using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.PlanStep;
using TaskTracker.Dtos.PlanStep;
using TaskTracker.Models;

namespace TaskTracker.Mappers
{
    public static class PlanStepMappers
    {
       public static PlanStepDto ToPlanStepDto(this PlanStep planStepModel)
       {     
         return new PlanStepDto 
         {
            Id = planStepModel.Id,
            PlanId = planStepModel.PlanId,
            StepNumber = planStepModel.StepNumber
         };
       }

       public static PlanStep ToPlanStepFromCreateDto(this CreatePlanStepRequestDto planStepDto)
       {
        return new PlanStep
        {
            StepNumber = planStepDto.StepNumber
        };
       }
       public static PlanStep ToPlanStepFromUpdateDto(this UpdatePlanStepRequestDto planStepDto)
       {
          return new PlanStep
          {
            StepNumber = planStepDto.StepNumber
          };
       }
    }
}