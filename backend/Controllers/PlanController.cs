using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Plan;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskTracker.Data;
using TaskTracker.Dtos.Plan;
using TaskTracker.Mappers;

namespace backend.Controllers
{
    [Route("api/Plan")]
    [ApiController]
    public class PlanController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
       public PlanController(ApplicationDBContext context)
       {
          _context = context;
       }

       [HttpGet("user/{userTaskId}")]
       public async Task<ActionResult<PlanDto>> GetPlanByUserTaskId([FromRoute] int userTaskId)
       {
          var plan = _context.Plans
          .Include(p => p.Steps)
          .FirstOrDefault(i => i.UserTaskId == userTaskId);

          if (plan == null)
          {
            return NotFound($"Not plan found for UserTaskId: {userTaskId}");
          }
          return Ok(plan.ToPlanDto());
       }

       [HttpPost]
       public async Task<ActionResult<PlanDto>> CreatePlan([FromBody] CreatePlanRequestDto createPlanRequest)
       {
          var userTask = await _context.UserTasks //.FindAsync(createPlanRequest.UserTaskId);
          .Include(ut => ut.Plan)
          .FirstOrDefaultAsync(ut => ut.Id == createPlanRequest.UserTaskId); 

          if (userTask == null)
          {
            return BadRequest("UserTask not found");
          }       
          if (userTask.Plan != null)
          {
            return Conflict(new {Message = "UserTask already has a plan", ExistingPlan = userTask.Plan.ToPlanDto() });
          }

          var newPlan = createPlanRequest.ToPlanFromCreateDto();
          newPlan.UserTaskId = createPlanRequest.UserTaskId;

          _context.Plans.Add(newPlan);

          userTask.PlanId = newPlan.Id;
          _context.UserTasks.Update(userTask);

          await _context.SaveChangesAsync();

          return CreatedAtAction(nameof(GetPlanByUserTaskId),new {userTaskId = newPlan.UserTaskId}, newPlan.ToPlanDto());
       }
       
       [HttpPut("{id}")]

       public async Task<ActionResult> UpdatePlan([FromRoute] int id,[FromBody] UpdatePlanRequestDto updatePlanRequestDto)
       {
          var plan = await _context.Plans
          .Include(p => p.Steps)
          .FirstOrDefaultAsync(p => p.Id == id);
          
          if (plan == null)
          {
            return NotFound();
          }

          if(!string.IsNullOrEmpty(updatePlanRequestDto.Title))
          {
            plan.Title = updatePlanRequestDto.Title;
          }

          if(updatePlanRequestDto.Steps != null && updatePlanRequestDto.Steps.Any())
          {
            plan.Steps.Clear();
            plan.Steps = updatePlanRequestDto.Steps.Select(stepDto => stepDto.ToPlanStepFromUpdateDto()).ToList();
          }

          await _context.SaveChangesAsync();

          return NoContent();

       }

       [HttpDelete("{id}")]

       public async Task<ActionResult> DeletePlan([FromRoute] int id)
       {
          var plan = await _context.Plans.FindAsync(id);

          if (plan == null)
          {
            return NotFound();
          }

          _context.Plans.Remove(plan);
          await _context.SaveChangesAsync();

          return NoContent();
       }
    
    }
}