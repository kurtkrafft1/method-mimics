const myArray = [100, 1, 200, 2, 300, 3];
const wordArray = ['I','cant','understand', 'your', 'accent', 'you', 'bean'
]
//FOR EACH METHOD
const myForEach = (array, action) => {
    for (let i=0; i<array.length; i++){
        action(array[i])
    }
}

myForEach(myArray, console.log);
// myForEach(wordArray, alert);


//MAP METHOD
const myMap = (array, action, func) => {
    const newArr = [];
    for (let i=0; i<array.length;i++){
        if (func===true){
            
            newArr.push(action(array[i]))
        } else if(func===false ) {
           const newVal = array[i]+action;
           newArr.push(newVal)
        }
        
    }
    return newArr
}


 const test = (num) => {
     return num+6
 }
const filteredMap = myMap(myArray, +3, false)
console.log(filteredMap)
const refilteredMap = myMap(myArray, test, true)
console.log(refilteredMap)


//INCLUDES METHOD
const myIncludes =(array, word) => {
    for (let i=0; i<array.length;i++){
        if (array[i]===word){
            console.log('true')
            return true;
        } 
    }
}
myIncludes(wordArray, 'you');

const testFunc = (num) => {
    return num>=1
}

//SOME METHOD
const mySome = (array, func) => {
    const arr=[]
    for(let i=0;i<array.length;i++){
      
        if (func(array[i])) {
            // console.log(`yay i made it: ${array[i]}`)
            arr.push(array[i]);
            console.log('true')
            return true
        }
       
    }
    return arr;
}
console.log('SOME AND EVERY')

mySome(myArray, testFunc);

//EVERY METHOD
const myEvery =(array,func)=> {
    const arr=[]
    for(let i=0;i<array.length;i++){
        if (func(array[i])) {
            // console.log(`yay i made it: ${array[i]}`)
            arr.push(array[i]);
        }
    }
    if (arr.length===array.length){
        console.log('true')
       return true;
    } 
}
myEvery(myArray, testFunc);

//FIND METHOD 
const myFind = (array, func) => {
    const arr=[]
    for(let i=0; i<array.length;i++){
        if(func(array[i])){
            arr.push(array[i])
            console.log(arr)
            return arr[0]
        }
    }
   
}

myFind(myArray, testFunc)


//INDEX OF

const myIndexOf = (array, item) => {
    let counter =0;
    for(let i=0;i<array.length;i++){
        
        // debugger
        if(array[i]==item){
            //would be return   
            console.log(counter)
            
            
        } else {
            counter+= 1
        }
    }
}

myIndexOf(wordArray, 'bean');


//LAST INDEX OF

const myLastIndexOf = (array, word) => {
    const splitArr = array.split(`${word}`);
    const newString=splitArr[1];
    
    const arrLength = newString.length;
    console.log(`The length of the string from "${word}" to the end is ${arrLength-1}`);
}
const stringer = "hello my friend lets tests this function and see if it works for strings!!@";
console.log('HELLOOOOO')
myLastIndexOf(stringer, '@');

// myLastIndexOf(wordArray)
// myLastIndexOf(myArray)

//JOIN METHODING

const myJoin = (array, word) => {
    let str= "";
    for(let i=0; i<array.length;i++){

        if(i===array.length-1){
            const string=`${array[i]}`
            str+=string

        } else{
        const string2 = `${array[i]} ${word} `
        str+=string2
    }
    }
    console.log(str);
    return str;
}

myJoin(wordArray, 'THHHHHH');

//CONCAT METHOD

const myConcat = (array, array2)=> {
    const newArr =[];
    for(let i =0; i<array.length;i++){
        newArr.push(array[i])
    }
    for(let j=0; j<array2.length;j++){
        newArr.push(array2[j]);
    }
    console.log(newArr)
}
// myConcat(wordArray, myArray);

//REVERSE METHOD

const myReverse = (array) => {
    const newArr =[];
    for(let i=0;i<array.length;i++){
         newArr.unshift(array[i])
    }
    for(let i=0; i<newArr.length;i++){
        array.shift();
    }
    for (let i=0;i<newArr.length;i++){
        // debugger
        array.push(newArr[i]);
    }
    // console.log(newArr)
}

myReverse(wordArray)
console.log(wordArray)

// //REDUCE METHOD 

const myReduce = (array, value) => {
    let newTotal = 0;
    if(value==='+'){
        for(let i =0;i<array.length;i++){
            newTotal+=array[i]
        }
    } else if(value==='-'){
        for(let i =0;i<array.length;i++){
            newTotal-=array[i]
        }
    }
    console.log(newTotal)

}

myReduce(myArray, '-');
myReduce(myArray, '+');