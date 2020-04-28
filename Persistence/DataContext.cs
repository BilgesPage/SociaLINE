
using System;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
        // Constructor to pass the DBContextOptions from the base class to the initializing DataContext object
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // Specifying the entity we're going to use - We'' use the dummy entity "Value" in this walking skeleton stage
        public DbSet<Value> Values {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>().HasData(
                new Value { Id = 1, Name = "Name1", LastName = "LastName1"},
                new Value { Id = 2, Name = "Name2", LastName = "LastName2"},
                new Value { Id = 3, Name = "Name3", LastName = "LastName3"}
            );
        }


    }
}
