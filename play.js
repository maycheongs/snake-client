const connect = require('./client');


const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', key => {
    if (key === '\u0003') process.exit()    
  })
  return stdin
}



//const snake = connect('mc');





setupInput()