module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = ''}) {
    let additionBase = addition
    for (let j=1;j<Number(additionRepeatTimes);j++){
            additionBase+=String(additionSeparator)+addition
        }
    let strBase = str+additionBase
    for (let i=1;i<Number(repeatTimes);i++) {
        strBase+=String(separator)+str+additionBase       
    }
    return strBase
};
  