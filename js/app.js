

var arr=[10, 2, 4, 28, 47, 9, 25];

index=0;
while( index < arr.length ){

    if (arr[index] <= 20 ){
        // add 3 for each number that is less than or equal 20
        console.log(`before adding 3: number = ${ arr[index] } after adding 3:number = ${arr [index]+=3 } `)
    }
    else if(arr[ index ] >= 20 && arr[ index ] <= 30){
        // subtract 5 from any number that is greater than 20 and less than or equal 30
        console.log(`before subtract 5: number = ${ arr[index] } after subtract 5 : number= ${arr [index]-=5} `)
    }
    else if(arr[index > 30]){
        // multiply 2 for each number that is greater than 30
        console.log(`before muliply 2: number= ${ arr[index]} after multiply 2: number= ${ arr[index] *=2}`)
    }
    
    index += 1;
}



