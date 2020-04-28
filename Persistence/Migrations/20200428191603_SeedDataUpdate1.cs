using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedDataUpdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "LastName", "Name" },
                values: new object[] { 1, "LastName1", "Name1" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "LastName", "Name" },
                values: new object[] { 2, "LastName2", "Name2" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "LastName", "Name" },
                values: new object[] { 3, "LastName3", "Name3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
