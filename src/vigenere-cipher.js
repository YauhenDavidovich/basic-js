class VigenereCipheringMachine {
    constructor(reverse = true) {
        this.reverse = reverse;
    }

    loop_key(message, key) {
        let loop_key = ("".padStart(message.length, key)).split('') // loop the key to the length of the message
        for (let i = 0; i < message.length; i++) {
            if (message[i] === ' ') {
                loop_key.splice(i, 0, ' ') //add spaces 
            }
        }
        return loop_key.join('')
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error()
        }
        let result = ""
        key = this.loop_key(message, key)
        for (let i = 0; i < message.length; i++) {
            if (/[a-zA-Z]/.test(message[i])) { //check if letter is an English alphabet letter         
                result = result.concat(String.fromCharCode((message[i].toUpperCase().charCodeAt() - 65 + key[i].toUpperCase().charCodeAt() - 65) % 26 + 65)) //convert the letter on the key after the shift(add values by module)
            } else result = result.concat(message[i])

        }
        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }



    decrypt(message, key) {
        if (!message || !key) {
            throw new Error()
        }
        let result = ""
        key = this.loop_key(message, key)
        for (let i = 0; i < message.length; i++) {
            if (/[a-zA-Z]/.test(message[i])) { //check if letter is an English alphabet letter         
                result = result.concat(String.fromCharCode(((message[i].toUpperCase().charCodeAt() - 65) - (key[i].toUpperCase().charCodeAt() - 65) + 26) % 26 + 65)) //convert the letter on the key after the shift(subtract value by module)
            } else result = result.concat(message[i])

        }
        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }

}

module.exports = VigenereCipheringMachine;