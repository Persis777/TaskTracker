using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskTracker.Data;
using TaskTracker.Dtos.UserTask;
using TaskTracker.Mappers;
using TaskTracker.Models;

namespace TaskTracker.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserTaskController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public UserTaskController(ApplicationDBContext context)
        {
            _context = context;
        }
      [HttpGet]
      public async  Task<ActionResult<IEnumerable<UserTaskDto>>> GetUserTasks()
      {
        var UserTask = await _context.UserTasks
        .Include(ut => ut.Plan)
        .Select(s => s.ToUserTaskDto())
        .ToListAsync();
        
        return Ok(UserTask);
      }
      
      [HttpGet("{id}")]
      public async Task<ActionResult<UserTaskDto>> GetUserTaskById([FromRoute] int id)
      {
          var userTask = await _context.UserTasks //.FindAsync(id);
          .Include(ut => ut.Plan)
          .FirstOrDefaultAsync(ut => ut.Id == id);
          if (userTask == null)
          {
            return NotFound();
          }
          return Ok(userTask.ToUserTaskDto());
      }
      [HttpPost]
       public async Task<ActionResult<UserTaskDto>> CreateUserTask([FromBody] CreateUserTaskRequestDto userTaskDto)
       {
          if (userTaskDto == null)
          {
            return BadRequest("Invalid data.");
          }

          var userTask = userTaskDto.ToUserTaskFromCreateDto();

          _context.UserTasks.Add(userTask);
          await _context.SaveChangesAsync();

          var toUserTaskDto = userTask.ToUserTaskDto();

          return CreatedAtAction(nameof(GetUserTaskById), new {id = userTask.Id}, userTaskDto);
       }

       [HttpPut]
       [Route("{id}")]
       public async Task<ActionResult> UpdateUserTask([FromRoute] int id,[FromBody] UpdateUserTaskRequestDto updateDto)
       {
          var userTaskModel = await _context.UserTasks.FindAsync(id);

          if(userTaskModel == null)
          {
            return NotFound();
          }

          userTaskModel.Title = updateDto.Title;
          userTaskModel.Description = updateDto.Description;
          userTaskModel.Deadline = updateDto.Deadline;
          userTaskModel.Priority = updateDto.Priority;
          userTaskModel.Status = updateDto.Status;

          await _context.SaveChangesAsync();

          return NoContent();
       }

       [HttpDelete]
       [Route("{id}")]

       public async Task<ActionResult> DeleteUserTask([FromRoute] int id)
       {
         var userTaskModel = await _context.UserTasks.FindAsync(id);

         if(userTaskModel == null)
         {
            return NotFound();
         }

         _context.Remove(userTaskModel);
         await _context.SaveChangesAsync();

         return NoContent();
       }
    }
}