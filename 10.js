result = prompt("Введите число ");
let n=0
if (result>1000){

    alert("Данные неверны")
}

else{

    for(let i=1;i<result;i++){

        if(result==0){
            alert("Число равно 0")
            
    
    }

    if(result==1){
        alert("Число равно 1")
        

}
        
         if(result%i==0){
                n++
                
        
        }
         
    
        
        
    
    }
    if(n>2){

        alert("Составное число")
    }
    else{
        alert("Простое число")
    }

}