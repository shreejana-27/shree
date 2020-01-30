// // alret ("hello js");
// console.log(4);
// console.error("this is error");
// console.warn("this is warning");
// // variable in js (var let and const)
// var age;//variable decleration;
// age=20;
// console.log(age);
// // data types in Js
// // 1. primitive data types

// //  a.Number 
// var number=10.10;
// console.log(number);
// console.log(typeof number);

// // b.string
//  var name= 'ram';
//  console.log(name);
//  console.log(typeof name);
 
//  var name1 = "20";
//  console.log("name1");
//  console.log(typeof name1);

//  //c.Undefined
//  var person;
//  console.log(person);
//  console.log(typeof person);

//  //d.Boolean
//  var bool = true;
//  console.log(bool);
//  console.log(typeof bool);

//  //e.Null
//     var Nul = null;
//     console.log(Nul);
//     console.log(typeof Nul);

//     //f.symbol
//    // let obj ={
//        // name:Symbol;

//        var sym = Symbol();
//        console.log(sym);
//        console.log(typeof sym);

//        //Math object
//        var value = Math.PI;
//            value = Math.random(); //random=0 to 1
//            value = Math.round(2.2);
//            value = Math.floor(2.8);
//            value = Math.floor(Math.random()*6);
//            valu = Math.ceil(2.1);
//            value = Math.pow(2,3);
//            value = Math.abs(-5);
//            value = Math.sqrt(16);
//            value = Math.min(1,4,-5.8);
//            value = Math.max(1,4,-5.9);
//            var string = prompt('Enter your marks?');

//        console.log(value);
//        // object litral in js
//        var car{
//            wheel:4;   //wheel and color is properties
//            color='white',
//            start:function(){}         //strat is method
//        };
//        console.log(car);
//        console.log(car.wheel);
//        console.log(typeof car);
//        console.log(car.start());



//     }


    //string concadination in js
    console.log("hello" + " " + "Js");//old way

    var str1 = "hello";
    var str2 = "world";
    console.log(str1+str2);

    var str3 = str1.concat(str2);
    console.log(str3);

    //Template literal 
    console.log(`${str1} $str{str2}`);
     
    //condition in js
    var job = "Developer";

    if (job == "Designer"){
     console.log("he is Designer");
    } else{
        console.log("he  is Devloper");
    }

    // var number=prompt("Enter your marks");

    //  if( number=>80){
    //     console.log("he is distinction");
    //  } 
    //  elseif(number=>40){
    //     console.log("he is pass");
    //  }
    //  else{
    //     console.log("he is fail");

    //  }
    // Double equal to and single equal to difference
var x = 5;
if(x=="5"){
    console.log(x);
}
// Ternary operator 
x== 5? console.log("5"):console.log("NAN");

//Switch case
switch(x){
    case 1:
        console.log(1);
     break;
     case 2:
     console.log(2);
     break;
     case 5:
     console.log(5);
     break;
     default:
         console.log("hello");
}
//Loop in js 
for (var i = 0; i<5;i++){
    console.log(i);
}

//while loop in js
var j = 0;
while(j<5){
    console.log(j);
    j++;
}

//Do while in js
var a=11;
do{
    console.log(a);
    a++;
} 
while(a<10)

//Function declaration in js
function person(name,age){
      console.log(`He is ${name}`);
      console.log(`Age is ${age}`);
      }

      person("Hari", 20);
// var, let and const(let and const ==>Block Scope)
//(var ==>Functional Scope)
function loopData(){
    for(let b = 0; b<10; b++){
       console.log(b);
    }
    //console.log(b);
}
loopData();
//const user;
//user ="Hari";
//console.log(user);

for(var j = 10; j>=1; j--){
    console.log(j);
}

//object literal in js
let user = {
    name: "Ram",
    age: 20,
    hobbies: ['programming','football','reading'],
    address:{
        street: "tinkune",
        city: "ktm"

    }


} ;
user.name = "Hari";
user.data = "something";
user.hobbies ="index"; 

console.log(user);
console.log(user.name);

//Destructuring in js (es6)
const{city,street} =user.address;


console.log(city);
console.log(street);

//number to string 
let num = 25;
num = true;
console.log(num);
console.log(String(num));

//string to number
let str = '25';
console.log(str);
console.log(Number(str));
//type coerceion
console.log(str*1);

//Tuthy and Falsy in js
console.log( true && 2 && "Hello");
//Falsy
console.log(false && 2);
console.log(0 && "hello")
console.log("" && 2);
console.log(null && "hi");
console.log(undefined && "hello");
console.log(NaN && 5);

//Array in js
let arr = Array(1,2,3,4);

arr.pop(); //Remove the value from last index

arr.push("Hello");//add to last index

arr.unshift(2,2,2);//Add to first index
arr.shift();//remove from first index
console.log(arr.indexOf("hello"));

console.log(arr);
console.log(arr[0]);
//Is Array or not
console.log(Array.isArray("arr"));
console.log(Array.isArray(arr));
console.log(arr.length); 

let contact = 
[
    {id:01, name:"shree", phone:098765},
    {id:02, name:"pema", phone:098765},
    {id:03, name:"Binta", phone:098765}
];
console.log(contact);

//for loop
//console.log(contact[0]);

for(let i = 0; i< contact.length; i++){
    console.log(contact[i]);
}

//Higher order array method

//Foreach array method
//foreach cann't return value
contact.forEach(function(contact,index, allarray){
    console.log(contact);
    console.log(index);
    console.log(allarray);
});

//map in js
//map can be use for return
let newContact = contact.map(function(data,idx,alldata){
    // console.log(data);
    // console.log(idx);
    // console.log(alldata);
    return idx;
});
console.log(newContact);

//Filter  in js
let filterData = contact.filter(function(contact){
return contact.id === 1;
});