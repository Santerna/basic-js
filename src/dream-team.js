const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (typeof(members) !== 'object' || members === null) return false;
  let team = '';
  
  for (let i = 0; i < members.length; i++){
    if  (typeof(members[i]) === 'string'){
      team += members[i].trim().charAt(0);
    }
  }

  return team.toUpperCase().split('').sort().join('');
};
