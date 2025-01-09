const todos = [];

//just an example :)

class TodoRepository{

    insert(todoText){
        mysql.exec('insert into todos values {id} {todoText}');

    }
    getAll(){
        return todos;
    }
    get(id){
        mysql.exec('select * from todo');;
    }
}

//module.exports = TodoRepository;