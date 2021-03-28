const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moves = 0,
      time = 0;
      answer = {
          'turns': 0,
          'seconds': 0
      };
    
    moves = Math.pow(2, disksNumber) - 1;
    time = Math.floor((3600 / turnsSpeed) * moves);

    answer.turns = moves;
    answer.seconds = time;
    return answer;
};
