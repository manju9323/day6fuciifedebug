
//1)How to get value of the variable myvar as output
var a=[]
b=""
c=[]
console.log(a+b+c)
//o/p
//blank
//------------------------------------------------

// 2)How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");
//o/p
//myvar
//--------------------------------------------------------

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var address={name:"manjunathan m",
maritalstatus:"married",
coumntry:"india",
age:"27",
}
console.log(address)
//o/p
//{
//    name: 'manjunathan m',
//    maritalstatus: 'married',
//   coumntry: 'india',
//    age: '27'
//--------------------------------------------------


// 4.Declare variables to store your first name, last name, marital status, country and age in a single line
var address=["name:manjunathan m","maritalstatus:married",
"coumntry:india","age:27"]
temp=""
for(i=0;i<address.length;i++)
if(i==address.length-1)
{
    temp+=address[i]
}
else{
    temp+=address[i]+","
}
console.log(temp)
//o/p
//name:manjunathan m,maritalstatus:married,coumntry:india,age:27
//-------------------------------------------------

//5. Declare variables and assign string, boolean, undefined and null data types

var a;
b="manju";
console.log(b)
console.log("manju"==b,typeof(b))
console.log(a)
console.log(1&&1)
a=2;b=3;
if(a>b){
    console.log("b")
}
//------------------------------------------------

//6. Convert the string to integer parseInt()
//Number()
//Plus sign(+)
a="123";b="456";
console.log(Number(a)+Number(b))
a="123";b="456";
console.log(parseInt(a)+parseInt(b))
a="1";b="2";
console.log(+a + +b)
a=125;b=123;
console.log(a+"" + b+"")
//o/p
//579
//579
//3
//125123
//-----------------------------------------------


//square of anumber
class square
{
math(d){
    return d**2;
}
}
let o=new square();
a=o.math(20);
console.log(a);
//------------------------------------------------


//Swapping 2 numbers
function arrayrotate(a,k){
    for (let i=0;i<k;i++)
 {
 temp=a[0]
 for (let i=0;i<a.length-1;i++)
 {
 a[i]=a[i+1]
 }
 a[a.length-1]=temp
 }
 console.log(a);
 }
 ans=arrayrotate([1,2,3,4,5,6,7,8,9],9)
 //o/p
 //[1, 2, 3, 4, 5, 6, 7, 8, 9]
//-------------------------------------------

//add 3 number
add=(a)=>{
     temp=0
     for(let i=0;i<a.length;i++)
     {
         temp+=a[i]
     }
     return temp;
    }
j=add([1,2,3,4,5])
console.log(j)
//----------------------------------------------

//celsius to fahrenheat
fahren=(a)=>{
    f=a*(9/5)+32;
    return f;
}   
ans=fahren(2);
console.log(ans)
//o/p
//35.6
//----------------------------------------------

//meter to miles
miletome=(a)=>{
    f=a*0.000621371;
    return f;
}   
ans=miletome(1000);
console.log(ans)
//o/p
//0.621371
//-----------------------------------------------

//pounds  to kg
poukg=(a)=>{
    f=a*0.453592;
    return f;
}   
ans=poukg(1);
console.log(ans)
//o/p;
//0.453592
//-------------------------------------------------

//batting avg
bavg=(runs,inn)=>{
    f=runs/inn;
    return f;
}   
ans=bavg(1,2);
console.log(ans)
//o/p
//0.5
//--------------------------------------------------

//test avg
bavg=(runs,nomat)=>{
    temp=0;
    for(let i=0;i<runs.length;i++)
    {
temp+=runs[i];
    }
    f=temp/nomat;
    return f;
}   
ans=bavg([1,2,3,4,5],5);
console.log(`avg ${ans}`)
//o/p
//avg 3
//---------------------------------------------------

//power of two num
pow=(runs,nomat)=>{
return runs**nomat
    }
    
ans=pow(2,5);
console.log(`pow ${ans}`)
//o/p
//pow 32
//--------------------------------------------------

//Calculate Simple Interest
function si(p,n,r){
    val=p*n*r/100;
    return val;
}
m=si(400,5,2);
console.log(`interest ${val}`)
//o/p
//interest 40
//--------------------------------------------------

//equi of tri
function et(a){
    val=((Math.sqrt(3))/4)*(a**2);
    return val;
}
m=et(40);
console.log(`triangel ${val}`)
//o/p
//triangel 692.8203230275509
//----------------------------------------------------

//Area Of Isosceles Triangle(aoi)

function aoi(b,h){
    val=(b*h/2);
    return val;
}
m=aoi(4,6);
console.log(`aoisscles tri ${val}`)
//o/p
//aoisscles tri 12
//--------------------------------------------------

//vol of sphere(vos)
function aoi(r){
    val=(4/3*22/7*r**3);
    return val;
}
m=aoi(4);
console.log(`vol of sphere ${val}`)
//o/p
//vol of sphere 268.1904761904762
//--------------------------------------------------

//Volume Of Prism

function aoi(l,w,h){
    val=(l*w*h);
    return val;
}
m=aoi(4,4,4);
console.log(`Volume Of Prism ${val}`)
//o/p
//Volume Of Prism 64
//-------------------------------------------------


//Find area of a triangle (aot).
function aot(l,h){
    val=(l*h/2);
    return val;
}
m=aot(4,4);
console.log(`area of a triangle ${val}`)
//o/p
//area of a triangle 8
//--------------------------------------------------

//Actual cost and Sold cost, Calculate Discount Of Product
function aot(l,h){
    min=l-h;
    return min;
}
m=aot(1000,50);
console.log(`dis ${min}rs`)
//o/p
//dis 950rs
//---------------------------------------------------

//redius to coc, diameter of circle
function aot(r){
    coc=(2*22/7*r)
    return coc;
}
function ao(radius){
    aoc=(2*22/7*radius**2)
    return aoc;
}
m=aot(2);
console.log(`coc ${coc}rs`)
y=ao(2);
console.log(`aoc ${aoc}rs`)
//o/p
//coc 12.571428571428571rs
//aoc 25.142857142857142rs
//--------------------------------------------------

//two numbers and perform all arithmetic operations.

function arith(a,b,c,d,e,f)
{
    tot=a+b*c-d/e%f;
    return tot;
}
ans=arith(1,2,3,4,5,6)
console.log(ans)
//o/p
//6.2
//--------------------------------------------------

//Display the asterisk pattern 
a="*****";
b="*****";
c="*****";
d="*****";
e="*****";
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
//o/p
//*****
//*****
//*****
//*****
//*****
//--------------------------------------------------

//Calculate electricity bill?
function ebill(waats,hours,month){
    cac=((waats/1000)*10*(hours)*(month))
    return cac;
}
bill=ebill(1000,2,3)
console.log(`Ebill ${bill}rs`)
//o/p
//Ebill 60rs
//---------------------------------------------------

//Program To Calculate CGPA
function cgpa(mark,sub){
    cac=(mark/sub)
    return cac;
}
uni=cgpa(100,2)
console.log(`CGPA ${uni}`)
//o/p
//CGPA 50
//--------------------------------------------------

//Write a loop
a=["#","#","#","#","#",'#']
temp=""
for(let i=0;i<a.length;i++)
{
temp+=`${a[i]} `
console.log(temp);
}
//o/p
//# 
//# # 
//# # #
//# # # #
//# # # # #
//# # # # # #
//----------------------------------------------------

//string array
var a= ["<option>Jazz</option>",
      "<option>Blues</option>",
      "<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"]

for(let i=0;i<a.length;i++)
{
temp=`${a[i]} `
console.log(temp);
}
//o/p
//<option>Jazz</option> 
//<option>Blues</option>     
//<option>New Age</option>   
//<option>Classical</option> 
//<option>Opera</option>     
//----------------------------------------------------








































































































































































































































