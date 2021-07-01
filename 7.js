let arr = [0,0,0,null,'a']
let n=arr.length
let even=0,odd=0
for(let i=0;i<n;i++){

    if(i==0){

        console.log("нулевой элемент")
    }
    else{
        if(i%2==0){
            even++
    
        }
        if(i%2!==0){
            odd++
    
        }

    }
    

}

console.log(even)
console.log(odd)