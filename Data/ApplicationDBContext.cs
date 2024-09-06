using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskTracker.Models;

namespace TaskTracker.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {
            
        }
        public DbSet<UserTask> UserTasks { get; set;}
        public DbSet<Plan> Plans { get; set;}
        public DbSet<PlanStep> PlanSteps { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Plan>()
            .HasOne(p => p.UserTask)
            .WithOne (t => t.Plan)
            .HasForeignKey<Plan> ( p => p.UserTaskId);

            modelBuilder.Entity<PlanStep>()
            .HasOne(ps => ps.Plan)
            .WithMany(p => p.Steps)
            .HasForeignKey(ps => ps.PlanId);
        }
    }
}