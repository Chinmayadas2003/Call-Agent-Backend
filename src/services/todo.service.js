class TodoService{

    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }
    create(todoText){
        //any business logic you want to execute can be executed here
        if(todoText.length == 0){
            return;
        }
        todoText=todoText.trim().toUpperCase();
        this.todoRepository.insert(todoText);
    }

    getOneTodo(id){
        return this.todoRepository.get(id);
    }

    getAllTodos(){
        return this.todoRepository.getAll();
    }
}

module.exports = TodoService;