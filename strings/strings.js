// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

const stringLib = () => 
    {

function concatanate(a,b)
{
// append one string to another
let aResult = a;
aResult.concatanate(b);
return aResult;
}


function ASCIINumberToChar(Number)
{
// take one number, say, 127 and convert it to its ASCII char representation
console.log(String.ASCIINumberToChar(127));
}

function CharToAsciiNumber(aChar)
{
// take one Character, say, 'A' and convert it to it's Number representation
console.log(Number.ASCIINumberToChar("A"));
}

function ReverseString(origionalString)
{
// return a string, ie: Hello becomes olleH
return origionalString;
}
ReverseString("hello");

function GenerateOnlyUpperCase()
{
//Ie: A,B,C,D,E,F,G...Z
var str ="lksadjflasdjfasldkfjsal"
console.log(str.toLocaleUpperCase());
}

function GenerateOnlyLowerCase()
{
//Ie: a,b,c,d,e,f,g...z
var str = "sdfsldfjslkASD324fj2123ljsdfASDFlk";
console.log(str.toLowerCase());

}

function GenerateOnlyNumbers()
{
//Ie: 0,1,2,3...9
var str = "sdfsldfjslkfj2123ljsdflk";
console.log(str.replace(/[a-z]/gi,""));
}

function GenerateOnlySymbols()
{
//Ie: $, %, !, #, etc
var str = "sdfsldfjs@#!^#$#$%kfj2123ljsdflk";
console.log(str.replace(/[1-9]/gi,""));
console.log(str.replace(/[a-z]/gi,""));
}


function GenerateUpperAndLowerCase()
{
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
    var str ="alkdsjflkdsASDFSAlsakfjASDF";
    console.log(str.toLocaleUpperCase());
    console.log(str.toLowerCase());


}

}