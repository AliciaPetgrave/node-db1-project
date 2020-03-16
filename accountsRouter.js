const express = require('express')
const db = require ('./data/dbConfig')

const router = express.Router()

//REQUESTS

//GET request working
router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: 'the information could not be received'})
    })
})

//GET by id working
router.get('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: 'the account information could not be received'})
    })
})

//POST request working
router.post('/', (req, res) => {
    db('accounts')
    .insert(req.body, "id")
    .then(id => {
        res.status(201).json({results: id})
    })
    .catch(error => {
        res.status(500).json({message: 'the account could not be created'})
    })
})

//PUT request working
router.put('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .update(req.body)
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: 'the account could not be updated'})
    })
})

//DELETE request working
router.delete('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .del(req.body)
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: 'the account could not be deleted'})
    })
})



module.exports = router