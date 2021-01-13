const { connect } = require('./client');
const { setupInput } = require('./input');

const playername = 'may';

const game = connect(playername)




setupInput(game);



