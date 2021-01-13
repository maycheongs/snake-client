
const net = require('net');

const connect = () => {
  const play = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  play.setEncoding('utf8');

  play.on('data', msg => {
    console.log(msg)
  })

  return play //a socket object
}


module.exports = connect