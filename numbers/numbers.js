// Implement the following functions

const stringLib = () => 
    {

function add(a, b) {
    // add a to b
    return a + b;
  }

function sub(a, b) {
    // sub a from b
    return a - b;
  }

function mul(a, b) {
    // mul a by b
    return a * b;
  }

function div(a, b) {
    // dib a by b
    return a / b;
  }

function Exponentiation(a, b) {
    // expont a of b
    return a ** b;
  }

function Increment(a, b) {
    // inc a by b
    return add(a,b);
  }

  
function Decrement(a, b) {
    // dec a by b
    return sub(a,b);
  }
  
  function NumberListA(start,end) //indicates index
  {
    // return list of numbers starting at start and ending at end

    let someList = [1,2,3,4,5,6,7,8,9,10];
       let resultList = [];

    for (let count = start; count< end; count ++)
    {
      resultList.push(someList[count]);
    }

    return resultList;
  }

function NumberListB(start,count,end, skipEvery)
    {
    // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
    let someList = [];
    let resultList =[];
    let k = 0;

    for (let i = start; i < end; i++)
    {   k++;
      if(!(k % skipEvery == 0) ){

        resultList.push(someList[i]);

      }
    }
  
      return resultList;
    }

function NumberListC(start,count, shouldBeRandomOrNot)
    {
    // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
    }

function IsOdd(aNumber);
    {
    // is a number odd? true false
    let result = true;
  
    if(!(aNumber % 2 == 0)) {
          result = true; 
    }else{
        result = false;
    }
  
    return result;
  }
    
    }        

function IsEven(aNumber){
    // is a number even? true false
    let result = true;
  
    if(!(aNumber % 2 == 0)) {
          result = true; 
    }else{
        result = false;
    }
  
    return result;
  }
  
  
   function IsEven(aNumber){
  
       return (aNumber % 2 == 0);
  
   }

function RandomNumberList(min, max)  //assuming start = min, end = max
    {
      var numberList = [];
     // return list of random numbers between start and end
    for(i = 0; i < 10; i++) {
      
      numberList.push(Math.floor(Math.random() * (max-min)) +min);
    }
     return numberList;
    }        

function RandomNumberList(start,end,count, allowDuplicates)
  {
// return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
  if(allowDuplicates) {
  var numberList = [];
   for(i = 0; i < 10; i++) {
    
   numberList.push(Math.floor(Math.random() * (max-min)) +min);
   }
  return numberList;
    
  }else {
  var numberList = [];
  for(i = 0; i < 10; i++) {
    
  //generate random number and save in temporary variable
  var tempNumber = Math.floor(Math.random() * (max-min)) +min;
  var shouldAddNumber = true;
    
  //check for duplicates
  for(j = 0; j < numberList.length; j ++){
    
  if(tempNumber == numberList[j]){ //if the temp number is already in the list, then DONT add
    shouldAddNumber = false;
    i --;
    break;
  }
  //if not duplicates, we add!
  if(shouldAddNumber){
   numberList.push(tempNumber);
    
  }
  }
    
    
    
  //at the end of the loop, we should have "rerolled" all the number until there are no duplicates, then return 
  return numberList;
  }
    
    }



