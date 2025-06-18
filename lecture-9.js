                            ******************* Todo App *************************
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

                                ***************** Random Quotes Generator ************

const quotes = ["“To be able to forgive we must first meet the legitimate needs of the s of us that don’t want to forgive.”",
                "“We need to be willing to accept our feelings around an event in order to fully gain the benefits, which are available from it.”",
                "“If we hold onto our wounds in an area of life then we hold back the growth of wisdom in that area too.”",
                "“A more forgiving attitude makes it easier to develop wisdom…Likewise a deeper capacity for wisdom makes it easier to forgive.”",
                "“A garden emerges from tending the outer world; forgiveness emerges from tending our inner world.”"
]

function quotegenerator() {
    let index = Math.floor(Math.random()*quotes.length);
    return quotes[index];
}
console.log(quotegenerator());
