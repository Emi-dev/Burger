const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(
        function(data) {
            const hbsObj = {burgers: data};
            console.log("burgersController: all");
            res.render("index", hbsObj);
        }
    );
});

router.post("/api/burgers", function(req, res) {
    burger.create(
        ["burger_name"],
        [req.body.burgerName], 
        function(result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    burger.update(
        {devoured: req.body.devoured}, 
        condition, 
        function(result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;