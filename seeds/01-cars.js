exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 1234567,
          make: "Nissan",
          model: "XTerra",
          mileage: 100000,
          transmission: "auto",
          titleStatus: "clean"
        },
        {
          VIN: 2345678,
          make: "Ford",
          model: "Mustang",
          mileage: 64239,
          transmission: "manual",
          titleStatus: "clean"
        },
        {
          VIN: 3456789,
          make: "Honda",
          model: "Civic",
          mileage: 23456,
          transmission: "auto",
          titleStatus: "salvage"
        }
      ]);
    });
};
