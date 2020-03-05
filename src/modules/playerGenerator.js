const playerGenerator = (name, mark, wins, playArr) => ({
  name,
  mark,
  wins,
  playArr,
});

module.exports = { playerGenerator, default: playerGenerator };