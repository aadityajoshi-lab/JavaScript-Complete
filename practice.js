


























// let a  = 5;
// let b = 10;
// try{
// console.log("a=",a);
// console.log("b=",b);
// console.log("a=",a);
// console.log("b=",b);
// console.log("b=",c);

// }
// catch(err){
//     console.log(err);
// }
// console.log("a=",a);
// console.log("b=",b);
// console.log("a=",a);
// console.log("b=",b);
// let DATA = "secret informaton";

// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let student1 = new User("aaditya","aaditya@gmail.com");
// let student2 = new User("joshi","joshi@gmail.com");

// let teacher1 = new User("teacher", "teacher@gmail.com");

// let admin1 = new Admin("admin","admin@gmail.com");
// class toyotaCar {
//     constructor(brand){
//         console.log("creating new object");
//         this.brand = brand;
//     }
//     start (){
//         console.log("start");
//     }
//     stop (){
//         console.log("stop");
//     }
   
// }

// let fortuner = new toyotaCar("fortuner");
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar();
// lexus.setBrand("lexus");

// lexus.brand = "laxus";

// class Parent{
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer extends Person {
//     work(){
//         console.log("work");
//     }
// }

// let aaditya = new Engineer();

// const employee = {
//     calcTax() {
//         console.log("tax is 10%");
//     }
// }

// const aaditya = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax is 20%");
//     }
// }

// aaditya.__proto__ = employee;

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log("button was clicked");
//     console.log(e);
// }

// btn1.addEventListener("click", () => {
//     console.log("button was clicked 1");
// } )
// btn1.addEventListener("click", () => {
//     console.log("button was clicked 2");
// } )

// const handler3 = () => {
//     console.log("button was clicked 3");
// }
// btn1.addEventListener("click",handler3 )
// btn1.addEventListener("click", () => {
//     console.log("button was clicked 4");
// } )

// btn1.removeEventListener("click",handler3 )
// let currentMode = "light";
// changeMode = () => {
//     body = document.querySelector("body");
//     if(currentMode === "light"){
//         body.style.backgroundColor = "green";
//         currentMode = "dark";
//     }
//     else{
//         body.style.backgroundColor = "yellow";
//         currentMode = "light";
//     }
    
// }

// btn1.addEventListener("click" , changeMode);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.color = "green";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

// let par = document.querySelector("p");

// par.setAttribute("class", "newClass")

// par.classList.add("newClass");
//  let div = document.querySelector("div");

// div.style.backgroundColor = "green";

// let newBtn = document.createElement("button")

// newBtn.innerText = " click me";

// console.log(newBtn.innerHTML);

// let div = document.querySelector("div");
// div.after(newBtn);
// let para = document.querySelector("p");

// para.remove();
// let div = document.querySelector("div");

// console.log(div);

// let id = div.setAttribute("id","newid");
// console.log(id);


// let divs = document.querySelectorAll(".box");
// console.log(divs);

// divs[0].innerText = "new text 1";
// divs[1].innerText = "new text 2";
// divs[2].innerText = "new text 3";

// index = 0;

// for(div of divs){
//     div.innerText = `new unique value ${index}`;
//     index++;
// }



// let div = document.querySelector("h1");
// console.log(div.textContent)

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + "from aaditya joshi";


// let heading = document.getElementById("heading");
// console.log(heading);

// let heading = document.getElementsByClassName("heading");
// console.log(heading);

// let paras = document.getElementsByTagName("p");
// console.log(paras);

// let elements = document.querySelector(".heading"); 
// console.dir(elements);

// console.log(elements.tagName);
// console.log(elements.innerText);

// console.dir(document.body.firstChild);



// let y = undefined;
// let x = null;
// let age = 10;
// let name = "Aaditya Joshi";
// let isFollow = true;


// console.log(name);

// const student = {
//     name: "Aaditya Joshi",
//     age: 25,
//     cgpa: 8
// };
// student.age = 50
// console.log(student["age"]);
// console.log(student.age);

// this is the comment which won't execute (single line)

/*   
    this is multiple line
    COMMENT
*/

/* operators ==
     (Arithmatic Operators)
    + = add
    - = subtract
    * = multiply
    / = division
    % = modulus
    ** = exponential
    -- = decrement
    ++ = increment

*/

// let a = 5;
// let b = 10;
// console.log("a+b = ",a+b);


// unary operators

// a++;
// a += 1;
// console.log(a)

// let a = 6;
// if(a % 2 == 0){
//     console.log("THIS IS EVEN NUMBER");
// }
// else{
//     console.log("This is odd number");
// }

// for(let i = 0; i<5; i++){
//     console.log("aaditya joshi");
// }

// let i = 1
// while (i<=7){
//     console.log("aaditya joshi");
//     i++;
// }


// let i =10
// do{
//     console.log("aaditya joshi")
// } while(i<5);


// let str = "aaditya joshi"

// for(let i of str){
//     console.log(i);
// }

// let student = {
//     name: "aaditya",
//     age: 20,
//     cgpa: 9.5,
//     isPass: true
// }

// for(let i in student){
//     console.log(student[i]);
// }

// for( let i=0; i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let usernum = prompt("Enter the guess number");
// if(usernum%2==0){
//         console.log(usernum,"is even number");
//    }
//    else{
//             console.log(usernum,"is odd number");

//    }


// let str = "aaditya joshi";
// let a = str.length

// console.log(a);
// console.log(str[4]);

// let obj = {
//     item: "pen",
//     price: 10,
// }

// let sentence = `the price of ${obj.item} is ${obj.price} rupees`;
// console.log(sentence);

// let str1 ="aaditya joshi";
// console.log(str1.toUpperCase());
// console.log(str1.trim());
// console.log(str1.slice(0,5));
// let str2 =  "javascript";
// console.log(str1.concat(str2));

// let str1 ="aaditya joshi";
// console.log(str1.replaceAll('a','r'));

// console.log(str1.charAt(4))


// userName= prompt("Enter your name");

// username = `@${userName}${userName.length}`;
// console.log(username);

// let marks = [23, 213, 123, 534, 12, 32];
// console.log(marks)

// let heros = ["ironman", "spiderman", "thor"];
// // console.log(heros)

// for(let i  = 0; i< heros.length; i++){
//     console.log(heros[i]);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for( let mark of marks) {
//     sum += mark;
// }
// let avg = sum / marks.length ; 
// console.log(avg);

// let price = [250, 645, 300, 900, 50];
// let i =0;
// for(items of price){
//     price[i] = 0.9 * items;
//     i++;
// }
// console.log(price);
// let marks = ["12", "22", "65", "87"]
// let veggis = ["potato", "tomato", "cucumber", "onion", "chilli"];
// veggis.push("mango", "burger");
// let removed = veggis.pop();
// let new_array = marks.concat(veggis)

// console.log(veggis);
// console.log(removed);

// console.log(veggis.toString());
// console.log(new_array);

// marks.shift();
// console.log(marks);

// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);

// companies.shift();

// console.log(companies);

// companies.splice(1,1,"Ola");

// console.log(companies);

// companies.push("Amazon");

// console.log(companies);

// function myFunction(){
//     console.log("aaditya");
//     console.log("joshi");
// }

// myFunction();

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }
// arrowSum(3,6);

// const arrowMul = (x,y)=>{
//     console.log(x*y);
// }
// arrowMul(4,5);
// let vowel = 0;
// function calcVowels(srt){
//     let vowel = 0;
//     for(char of srt){
//         if (char=='a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             vowel+=1;
//         }
//     }
//     return vowel
// }
// let count = calcVowels("aadityajoshi");

// console.log(count);


// const  calcVowels = (srt) => {
//     let vowel = 0;
//     for(char of srt){
//         if (char=='a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             vowel+=1;
//         }
//     }
//     return vowel
// }
// let count = calcVowels("aadityajoshiii");

// console.log(count);


// let name = ["aaditya", "bikash", "aayush", "aaryan"];

// name.forEach(function printName(val) {
//     console.log(val);
// });

// name.forEach((val => {
//     console.log(val);
// }))

// let number = [2,4,6,8,9,15,24,29];

// number.forEach((num) => {
//     console.log(num ** 2);
// })

// let newArr = number.map((val) => {
//     return val* 2;
// })

// console.log(newArr);

// let arr =[2,5,23,64,123,142];

// let evenArrr =  arr.filter((val)=>{
//     return val % 2 === 0;
// })

// console.log(evenArrr);

// let marks = [2,4,6,23,34,67,92,56,94,97,234,535,231];

// let newMarks = marks.filter((val)=> {
//     return val > 90;
// })
//  console.log(newMarks);

// let size = prompt("enter the number");
// let arr = [];
// for(let i = 1; i <= size ; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// let sum = arr.reduce((prev, anoth) => {
//     return prev+anoth;
// })
// console.log(sum);
// let prod = arr.reduce((prev, anoth) => {
//     return prev*anoth;                     
// })
// console.log(prod);

