const { connect } = require('./client');
const { setupInput } = require('./input');

const playername = 'may';






setupInput(connect(playername));



