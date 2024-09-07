using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskTracker.Models
{
    public class PlanStep
    {
        public int Id { get; set;}
        public int PlanId { get; set; }
        public int StepNumber { get; set;}

        public Plan Plan { get; set;}
        
    }
}