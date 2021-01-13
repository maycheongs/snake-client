let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  

  const handleUserInput = stdin.on('data', key => {
    if (key === '\u0003') process.exit();
    if (key === 'w')  connection.write('Move: up');
    if (key === 's')  connection.write('Move: down');
    if (key === 'a')  connection.write('Move: left');
    if (key === 'd')  connection.write('Move: right');
    if (key === '1')  connection.write('Say: omg');
    if (key === '2')  connection.write('Say: halp');
    if (key === '3')  connection.write('Say: (ᵔᴥᵔ)');
    if (key === 'b')  connection.write('Say: byebye'); 
  });
  

  stdin.resume();

  return stdin;
}


module.exports = { setupInput };


