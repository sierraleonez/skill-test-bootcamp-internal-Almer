function nearestFibonacci(a,b,c){
    let fibonacci=[0,1,1]
    let sum = a+b+c
    let res = []
    for(let i = 3 ; i < (a+b+c); i++){
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
    }
    for(let i = 0 ; i < fibonacci.length ; i++){
        if(sum >= fibonacci[i] && sum <= fibonacci[i+1]){
            Math.abs(sum - fibonacci[i]) < Math.abs(sum - fibonacci[i+1]) ? res.push(fibonacci[i]) : res.push(fibonacci[i+1]) 
            
            break
        }
    }
    console.log(res)
}
nearestFibonacci(1,2,20)