const express = require("express");

const db = require("../data/dbConfig.js");
const accountsRouter = require('../accountsRouter')

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter)


server.use(function(req, res, next) {
    res.status(404).json({message: "page not found"})
  })

module.exports = server;
