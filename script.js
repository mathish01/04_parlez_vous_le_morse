const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
}


function getLatinCharacterList (text) {
    return text.split('')

} 

const result = getLatinCharacterList("Hello World")
console.log (result)





function translateLatinCharacter (character) {

if (latinToMorse[character]) {
    return latinToMorse[character]
} else {
    return ''; 
}


}
const resultMorse = translateLatinCharacter('A'); 
console.log(resultMorse)

//////////////////////////////////////////////////////////////////

function enCode (text) {
    const characterList = getLatinCharacterList(text)
let morseMessage = ''

for (let i = 0; i < characterList.length; i++) {
const morseCharacter = translateLatinCharacter(characterList[i])

if (morseCharacter !== '') {
    morseMessage += morseCharacter
}

if(i < characterList.length - 1) {
    morseMessage += ' ';
}
}

return morseMessage
}


console.log(enCode('Hello World'))
