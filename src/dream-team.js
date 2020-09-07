module.exports = function createDreamTeam(members) {
  let dreamTeamName = []
  if (!Array.isArray(members)) { return false } //check members is array
  else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== "string") { //check the array consist of string or skip
        continue
      } else {
        dreamTeamName.push(String(members[i].replace(/\s/g, '').toUpperCase()).substring(0, 1))
      }
    }
    return dreamTeamName.sort().join('')
  }
}
