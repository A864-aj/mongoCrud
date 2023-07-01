const express = require('express');
const Sellerrouter = express.Router();
const {addSeller,updateSeller} = require('../Controller/sellerApi');


Sellerrouter.post('/addSeller',addSeller)
Sellerrouter.put('/updateSeller/:id',updateSeller)

module.exports = Sellerrouter;