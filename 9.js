let arr = [0,0,0,null,'a',7]


function oddEvenElemCount(){
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
console.log('Четные элементы' )
console.log(even )
console.log('Нечетные элементы' )

console.log(odd)
}

oddEvenElemCount()