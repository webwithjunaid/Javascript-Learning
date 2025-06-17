let todo = [];
let request = prompt("add,remove,list")

while (request !== "quit") {
    if (request === "add") {
        let task = prompt("Enter your task: ")
        todo.push(task)
        console.log('-----------------');
    }else if(request === "list"){
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i]);
            
        }
        console.log('-----------------');
    }else if(request === "remove"){
        let index = prompt("Enter your index")
        todo.splice(index,1)
    }
    request  = prompt("add,remove,list")
}

console.log(todo);
