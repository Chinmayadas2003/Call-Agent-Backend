function createTodoValidator(req , res,next){
    if(!req.body.todoText){
        return res.json({msg:'Invalid request'})
    }
    //if you are sending everything correctly
    next();
}

module.exports={
    createTodoValidator
}