using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;
using TaskTracker.Dtos.UserTask;
using TaskTracker.Models;

namespace server.Interfaces
{
    public interface IUserTaskRepository
    {
       Task<IEnumerable<UserTaskDto>> GetAllUserTasksAsync(AppUser user);
       Task<UserTaskDto> GetTaskByIdAsync(int id);
       Task<UserTaskDto> CreateTaskAsync(CreateUserTaskRequestDto userTask);
       Task<UserTaskDto> UpdateTaskAsync(int id, UpdateUserTaskRequestDto updateDto);
       Task<bool> DeleteTaskAsync(int id,string appUserId);
    }
}