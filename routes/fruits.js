//FRUIT CRUD ROUTES
const express = require('express')
const Fruit = require('../models/fruit')
const router = express.Router()

//index - GET
router.get("/", async (req, res)=>{
    const allFruits = await Fruit.find({})
    res.json(allFruits);
});

//show - GET 
router.get('/:id', async (req, res) => {
    try {
const oneFruit = await Fruit.findById(req.params.id)
res.json(oneFruit);
});

//new - GET

//create - POST
router.post("/", async (req,res) => {
    console.log(req.body);
    const newFruit = await Fruit.create(req.body);
    res.json(newFruit)
})

//edit - GET - form

//update - PUT/PATCH
router.put("/:id", async (req, res)=>{
    const updateFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateFruit)
})

//destroy - DELETE
// destroy - DELETE
router.delete('/:id', async (req, res)=> {
    const deleteFruit = await Fruit.findByIdAndDelete(req.params.id)
    res.json(deleteFruit)
})


module.exports = router