const express = require('express');
const router = express.Router();
//import in our middleware file
const controller = require('./controller');

router.get('/get', controller.getToDo, (req, res) => {
    
    return res.status(200).json(res.locals.todos);
})

router.post('/post', controller.postToDo, (req, res) => {
    
  return res.status(200);
})



module.exports = router;