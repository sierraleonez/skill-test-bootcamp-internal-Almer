function isPalindrome(arg){
    let lower = arg.toLowerCase()
    let mid = arg.length % 2 == 0 ? arg.length/2 : (Math.floor(arg.length/2)+1)
    let j = arg.length - 1
    for(let i = 0 ; i < mid ; i++){
        if (lower[i] != lower[j] ){
            console.log( false)
            return
        }
        j--
    }
    console.log( true)
}
isPalindrome("Ibu Ratna antar ubi")