//changes we want to make
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .integer("VIN")
      .notNullable()
      .unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();

    tbl.decimal("mileage").notNullable();

    tbl.string("transmission");
    tbl.string("titleStatus");
  });
};
//to revert changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
