
const net = require('net');
const { IP, PORT } = require('./constants')

const connect = name => {
  const play = net.createConnection({
    host: IP,
    port: PORT
  });

  play.setEncoding('utf8');

  play.on('connect', () => {
    console.log('connected!');
    play.write(`Name: ${name}`);
  })  
    
  play.on('data', msg => {
    console.log(msg)
  })
  



  return play //a socket object
}


module.exports = { connect }