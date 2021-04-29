function leapYear(s,e){
    let res = []
    for(let i = s ; i <= e ; i++){
        i%4==0&&res.push(i)
    }
    console.log(res)
}

leapYear(1902,1912)