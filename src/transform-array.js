module.exports = function transform(arr) {
    let resultArr = []
    if (!Array.isArray(arr)) {
        throw new Error()
    } else if (arr.length == 0) {
        return resultArr
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--double-next' && i < arr.length - 1) {
                resultArr.push(arr[i + 1])
                resultArr.push(arr[i + 1])
                i++
            } else if (arr[i] === '--double-next' && i === arr.length - 1) {
                continue
            } else if (arr[i] === '--double-prev' && arr[i-2] === '--discard-next') {
                continue
            } else if (arr[i] === '--discard-prev' && arr[i-2] === '--discard-next') {
                continue
            } else if (arr[i] === '--double-prev' && i > 0) {
                resultArr.push(arr[i - 1])
            } else if (arr[i] === '--double-prev' && i === 0) {
                continue
            } else if (arr[i] === '--discard-prev' && i === 0) {
                continue
            } else if (arr[i] === '--discard-prev' && i > 0) {
                resultArr.pop()
            } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
                i++
            } else if (arr[i] === '--discard-next' && i === arr.length - 1) {
                continue
            } else {
                resultArr.push(arr[i])
            }
        }
        return resultArr
    }
};
