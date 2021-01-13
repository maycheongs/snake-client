
const net = require('net');

const connect = () => {
  const play = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  play.setEncoding('utf8');

  play.on('connect', () => {
    console.log('connected!');
    play.write('Name: mc')
  })

  play.on('data', msg => {
    console.log(msg)
  })

  return play //a socket object
}


module.exports = connect