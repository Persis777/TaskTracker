using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskTracker.Dtos.PlanStep
{
    public class PlanStepDto
    {
        public int Id { get; set;}
        public int PlanId { get; set; }
        public int StepNumber { get; set;}
    }
}