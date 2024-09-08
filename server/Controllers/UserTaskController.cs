using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Interfaces;
using TaskTracker.Data;
using TaskTracker.Dtos.UserTask;
using TaskTracker.Mappers;
using TaskTracker.Models;

namespace TaskTracker.Controllers
{
    [Route("api/task")]
    [ApiController]
    public class UserTaskController : ControllerBase
    {
      private readonly IUserTaskRepository _userTaskRepo;
        public UserTaskController(IUserTaskRepository userTaskRepo)
        {
          _userTaskRepo = userTaskRepo ?? throw new ArgumentNullException(nameof(userTaskRepo));
        }

      [HttpGet]
      public async  Task<ActionResult<IEnumerable<UserTaskDto>>> GetUserTasks()
      {
        var userTasks = await _userTaskRepo.GetAllTasksAsync();
        return Ok(userTasks);
      }

      [HttpGet]
      [Route("{id}")]
      public async Task<ActionResult<UserTaskDto>> GetUserTaskById([FromRoute] int id)
      {
          var userTask = await _userTaskRepo.GetTaskByIdAsync(id);
          if( userTask == null)
          {
            return NotFound();
          }
          return Ok(userTask);
      }
     [HttpPost]
      public async Task<ActionResult<UserTaskDto>> CreateUserTask([FromBody] CreateUserTaskRequestDto userTaskDto)
      {
          if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
         }

             

   
            var createdUserTask = await _userTaskRepo.CreateTaskAsync(userTaskDto);

    
          return CreatedAtAction(nameof(GetUserTaskById), new { id = createdUserTask.Id }, createdUserTask);
          }

       [HttpPut]
       [Route("{id}")]
       public async Task<ActionResult> UpdateUserTask([FromRoute] int id,[FromBody] UpdateUserTaskRequestDto updateDto)
       {
          
         if (!ModelState.IsValid)
         {
           return BadRequest(ModelState);
         }
          
          var result = await _userTaskRepo.UpdateTaskAsync(id, updateDto);
          if (result == null)
          {
            return NotFound();
          }


          return NoContent();
       }

       [HttpDelete]
       [Route("{id}")]

       public async Task<bool> DeleteUserTask([FromRoute] int id)
       {
         var result = await _userTaskRepo.DeleteTaskAsync(id);

         if(result == null)
         {
          return false;
         }


         return true;
       }
    }
}
