
const net = require('net');

const connect = name => {
  const play = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  play.setEncoding('utf8');

  play.on('connect', () => {
    console.log('connected!');
    play.write(`Name: ${name}`);
    
    let timer = setInterval(() => {
      play.write('Move: up')
    },500);
    setTimeout(() => clearInterval(timer), 2000);
  })

  play.on('data', msg => {
    console.log(msg)
  })



  return play //a socket object
}


module.exports = { connect }