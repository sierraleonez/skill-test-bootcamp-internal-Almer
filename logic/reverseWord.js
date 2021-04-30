function reverseWord(word){
    let splitted = word.split(" ")
    let isUpperCase 
    let isUpperCaseLength 
    for (let i = 0 ;i < splitted.length ;i++){
        isUpperCase = splitted[i].split('')
        isUpperCaseLength = isUpperCase.filter(e => e == e.toUpperCase())
        console.log(isUpperCaseLength)
        if (isUpperCaseLength.length > 0){
            splitted[i] = splitted[i].toLowerCase().split('').reverse()
            splitted[i][0] = splitted[i][0].toUpperCase() 
            splitted[i] =splitted[i].join('')
        }else {
            splitted[i] = splitted[i].split('').reverse().join('')
        }
    }
    splitted = splitted.join(' ')
    console.log(splitted)
}
reverseWord("I am A Great human")