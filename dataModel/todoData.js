import datamodel from '../dataEntities/dataModelEntities.js';

class TodoDataService {
    addTodo(){
        let todoData = [];
        todoData.push(new datamodel("test1", "test status1", 1, "test", "date 1" ));
        todoData.push(new datamodel("test2", "test status2", 2, "test", "date 2"  ));
        return todoData;
    }

    deleteTodo(id){
        todoData.filter(todo =>  todo.id !== id); 
    }


}