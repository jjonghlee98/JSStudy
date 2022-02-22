let input = prompt('What would you like to do?');
const todoList = ['Eat Chicken', 'Eat Pizza'];

while (input !== 'quit' && 'q') {
  if (input.toLowerCase() === 'new') {
    let newTodo = prompt('Ok, What is the new todo?');
    todoList.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input.toLowerCase() === 'list') {
    console.log('**********');
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log('**********');
  } else if (input.toLowerCase() === 'delete') {
    let deleteTodo = parseInt(prompt('Ok, What is the delete todo?'));
    if (!deleteTodo.isNaN) {
      const deleted = todoList.splice(deleteTodo, 1);
      console.log(deleted);
      console.log(`Ok, deleted ${deleted[0]}!`);
    } else {
      console.log('Unknown index!');
    }
  }
  input = prompt('What would you like to do?');
}
console.log('OK, QUIT THE APP!');

// let input = prompt('What would you like to do?');
// const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while (input !== 'quit' && input !== 'q') {
//   if (input === 'new') {
//     const newTodo = prompt('Ok, what is the new todo?');
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list!`);
//   }else if (input === 'list') {
//     console.log('**********');
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log('**********');
//   }else if (input === 'delete') {
//     const index = parseInt(prompt('Ok, what is the delete todo?'));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, deleted ${deleted[0]}`);
//     } else {
//       console.log('Unknown index');
//     }
//   }
//   input = prompt('What would you like to do?');
// }
// console.log('OK QUIT THE APP');