const { controls } = require('./constants')
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  

  const handleUserInput = stdin.on('data', key => {
    if (key === '\u0003') process.exit();
    if (controls[key])  connection.write(controls[key]);  
  });
  
  stdin.resume();

  return stdin;
}


module.exports = { setupInput };


