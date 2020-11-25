const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

// console.log(menu)

const handleMenu = function(choice) {
  interface.close()
  if (choice === '6') {
    interface.close()
  } else if (choice === '1' || choice === '2' || choice === '3' || choice === '4' || choice === '5') {
    console.log('Your selection is: ' + choice)
    interface.question(menu, handleMenu)
  } else {
        console.log('You got it wrong AGAIN? Get out of here.')
    }
    interface.close()
}

console.clear()
interface.question(menu, handleMenu)


