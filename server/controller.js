const db = require('./models');

const controller = {};

//middlerware functions that will be stored in the controller object
controller.getToDo = (req, res, next) => {
    console.log('You made it to your get middleware!')
    const string = 'SELECT * FROM public.todo';
    
    db.query(string)
    .then(todos => {
        console.log("Our todos:", todos.rows)
        res.locals.todos = todos.rows;
        return next();
        // comment
    })
    .catch(err => {
        console.log("You didn't receive your querry from the database")
        next(err)
    });
}

controller.postToDo = (req, res, next) => {
  console.log('You made it to your post middleware!', req.body.input)
  
  //const string = 'INSERT INTO public.todo()  '
 // const vals = ''

  // db.query(string, vals)
  // .then()
  // .catch()
}

module.exports = controller;