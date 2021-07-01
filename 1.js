 result = prompt("Введите значение");
let a=+result

console.log(typeof(a))
if(typeof(a)!=='number'){
    console.log('Упс кажется вы ошиблись')

    
}
if(typeof(a)=='NaN'){
    console.log('Not-A-Number')

    
}
else{
    if(a%2==0){
        console.log('Четное число')
    
    }
    else{
        console.log('нечетное число')
    
    }

}
