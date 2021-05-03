var express = require("express");
var pool = require("../database/db"); //database import
var user = express.Router(); //router handlers


// READ
user.get('/', async function(req,res,next){

  const alluser = await pool.query('SELECT QUERY');
  res.json(alluser);

})

// CREATE
user.post('/', async function(req,res,next){

  const {name,mobile,email,address}= req.body;

  const alluser = await pool.query('INSERT QUERY',[name,mobile,email,address]);
  
  res.json(alluser);

})

// UPDATE
user.put('/', async function(req,res,next){

  const {email}= req.body; 

  const alluser = await pool.query('UPDATE QUERY',[email]);
  
  res.json(alluser);

});

// DELETE
user.delete('/', async function(req,res,next){

  const {email}= req.body; 

  const alluser = await pool.query('DELETE QUERY',[email]);
  
  res.json(alluser);

});



module.exports = user;
