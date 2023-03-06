const argv=require('yargs').argv;

const tooManyArguments=new Error("Too many arguments : Required only two");
const tooLessArguments=new Error("Too Less arguments : Required two");
const mustBeNumber=new Error("Element must be a number");
const divisonByZero=new Error("Cannot divide by zero");

let arr=argv._;
let operation=argv.operation;

const addition=function(){
    if(arr.length===0){
        return "No arguments to add";
    }else{
        let sum=0;
        arr.forEach(element => {
            if(typeof element ==='number'){
                sum+=element;
            }else{
                throw mustBeNumber;
            }
        });
        return sum;
    }
}

const multiply=function(){
    if(arr.length===0){
        return "No arguments to multiply";
    }else{
        let product=1;
        arr.forEach(element => {
            if(typeof element ==='number'){
                product*=element;
            }else{
                throw mustBeNumber;
            }
        });
        return product;
    }
}

const subtraction=function(){
    if(arr.length<=1){
        throw tooLessArguments;
    }else if(arr.length==2){
        if(typeof arr[0] ==='number' && typeof arr[1] ==='number'){
            return arr[0]-arr[1];
        }else{
            throw mustBeNumber;
        }
    }else{
        throw tooManyArguments;
    }
}

const division = function(){
    if(arr.length<=1){
        throw tooLessArguments;
    }else if(arr[1]===0){
        throw divisonByZero;
    }else if(arr.length===2 && arr[1] !==0){
        if(typeof arr[0] ==='number' && typeof arr[1] ==='number'){
            return Math.floor(arr[0]/arr[1]);
        }else{
            throw mustBeNumber;
        }
    }else{
        throw tooManyArguments;
    }
}

let result;

switch(operation){
    case 'addition':
        result=addition();
        break;
    case 'multiply':
        result=multiply();
        break;
    case 'subtraction':
        result=subtraction();
        break;
    case 'division':
        result=division();
        break;
    default:
        result="Please enter a valid operation";
        break;
}
console.log(result);