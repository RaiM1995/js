let arr = [0,0,0,0,'www'];
n=arr.length
let counter=0

  for(let i=0;i<n;i++){

    if(arr[0]==arr[i]){

      counter++
      if (counter==n){
        console.log("Все элементы равны true")

      }
    }
    else{
      
        console.log("Все элементы не равны false")

    }
    

    }

