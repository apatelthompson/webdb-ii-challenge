const express = require("express");

const db = require("./data/dbConfig.js");

const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get cars" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  console.log(req.body);

  db("cars")
    .insert(req.body)

    .then(car => {
      res.status(200).json(car);
    })

    .catch(err => {
      res.status(500).json({ message: "Failed to add car" });
    });
});

module.exports = router;
