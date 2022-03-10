
//declare an empty array
//empty array to fill push method
a=[];
m=a.push("thayir","chapathi","rasam","murungakaai","kathirika","bread","ittly","kambukool");
console.log(m)
//o/p
//[
 //   'thayir',
 //   'chapathi',
 //   'rasam',
 //   'murungakaai',
 //   'bread',
 //   'ittly',
 //   'kambukool' ]
//---------------------------------------------------

//write a code to count the elements in the array . Don’t use length property

var arr=[11,22,33,44,55];
arr1=arr.push()
console.log(`array length is ${arr1}`)
//o/p
//array length is 5
//--------------------------------------------------

//choose fav food
let food=['thayir','chapathi','rasam','murungakaai','bread','ittly','kambukool']
console.log(food.slice(2,3))
//o/p
//['rasam']

//------------------------------------------------
//change element
let m= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];

function dataHandling(m,f,l){
  {
  temp=m[f] 
  m[f]=m[t]
  m[t]=temp
  }
console.log(m)
}
  ans=dataHandling(m,0,3);

//----------------------------------------------------
//till you meet CaptianAmerica.
let m= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];
function dataHandling(m,timeofloop){
  for (let i=0;i<timeofloop;i++)
  {
  temp=m[0]
  for (let i=0;i<m.length;i++) 
  {
  m[i]=m[i+1]
  }
  m[m.length-1]=temp
  }
console.log(m)
}
  ans=dataHandling(m,2);
//o/p
//[
//  'CaptianAmerica',     
 // 'Munnabai',
 // 'Jeff',
 // 'AAK chandran',       
 // 'Mari',
 // 'MaryJane'
//----------------------------------------------

let friends= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];

function dataHandling(input, name){
  for (var i = 0; i < input.length;i++) 
  if(friends[i]==name)
  {
    find=friends[i]
    console.log(`${find} is my friends`)
  }  
  }
  let found = dataHandling(friends,"Munnabai");
//o/p
//Munnabai is my friends
//--------------------------------------------------

//two list of friends combine one

let friends1= ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = [ "Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];

friends=[...friends1,...friends2]
function dataHandling(input){
  input.sort()
  console.log(friends)
  }
  dataHandling(friends);
//[
 // 'AAK chandran', 'CaptianAmerica',
 // 'ET',           'Gabbar',
 // 'Jeff',         'Jeff',
 // 'Mari',         'MaryJane',
 // 'Mass',         'Munnabai',
 // 'Rajinikanth',  'Spiderman'
//------------------------------------------------

//get first,mid,last item
function ord(...a){
m=(a.length-1)/2;
l=a.length-1;
i=0;
console.log(a[i],a[m],a[l])}
o=ord(1,2,3,4,5,6,7)
//o/p
//1 4 7
//-----------------------------------------------------

//2. Add your name to the end of the friends array, and add another name to beginning.
let friends= ["Mari","AAK chandran"];

function ord(friends,l,f){
  (friends.push(l),friends.unshift(f))
  console.log(friends)
}
  o=ord(friends,"manju","gopi")
//o/p
 // ['gopi', 'Mari','AAK chandran','manju']
//-------------------------------------------------

//add mr and ms
let friends= ["manjunathan","esaivani"];

function ord(friends,l,f){

  console.log(l,friends[0],f,friends[1])
}
  o=ord(friends,"mr","ms")

  //o/p
  //mr manjunathan ms esaivani
//-------------------------------------------------

let friends= ["manjunathan","esaivani"];

function ord(friends){
  temp=""
  for(let i=0;i<friends.length;i++)
  if(i==friends.length-1)
  {
    temp+=`"${friends[i]}"`
  }
  else{
     temp+=`"${friends[i]}",`
  }
  console.log(temp)
}
  o=ord(friends)
//o/p
//"manjunathan","esaivani"
//---------------------------------------------------

// Find the friends names who has letter ‘a’ and return the list.
value=["manju","nj","go","pmi","va","esma","mva"]
function identify(a,find){
  val=""
for(let i=0;i<a.length;i++)
for(let j=0;j<a.length;j++)
if(a[i][j]==find)
if(i==a.length-1)
{
  val+=a[i]
}
else{
val+=a[i]+","
}
return val
}
a=identify(value,"m")
console.log(val)
//o/p
//manju,pmi,esma,mva
//------------------------------------------------------

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

a=["manju","esaivani","jayanthi","munusamy"]
function avg(a){
value=0
for(let i=0;i<a.length;i++)
{
value+=a[i].length/a.length
}
console.log(value)
}
m=avg(a);
//o/p
//7.25

//------------------------------------------------------

//Find the names and return the list starting with letter M.
value=["majjnhju","manath","gopm","god"]
function identify(a,find){
  val=""
for(let i=0;i<a.length;i++)
for(let j=0;j<a.length;j++)
if(a[i][j]==find)
{
  val+=a[i]+","
}
return val
}
a=identify(value,"m")
console.log(a)
//o/p
//manju,nnknkj,gibjbo,pmji,mvaj

//---------------------------------------------------

//8. Find the name with max characters and return the name.
a=["varshinim","manju","bigfamilly","esai","vani","jayanthi"]
function order(a){
for(let i=0;i<a.length;i++)
for(let j=i+1;j<a.length;j++)
if(a[i].length>a[j].length)
{
  temp=a[j];
a[j]=a[i];
a[i]=temp;
}
return (a[a.length-1])
}
h=order(a);
console.log(h)
//o/p
//bigfamily


//-----------------------------------------------------
//9. Find the name with min characters and return the name.
a=["varshinim","manju","bigfamilly","esai","vani","jayanthi"]
function order(a){
for(let i=0;i<a.length;i++)
for(let j=i+1;j<a.length;j++)
if(a[i].length<a[j].length)
{
  temp=a[j];
a[j]=a[i];
a[i]=temp;
}
return (a[a.length-1])
}
h=order(a);
console.log(h)
//o/p
//esai


//--------------------------------------------------
let value=[6,12,"Mari",1,true, "Munnabai","200", "CaptianAmerica",8,10];
function add(a){
temp=0;
for(let i=0;i<a.length;i++)
if(Number(a[i]))
{
temp+=Number(a[i]);
}
console.log(temp)
}
m=add(value)
//o/p
//36
//-------------------------------------------------

//Print the contents of the input variable
var input = [
["0001","Roman Alamsyah","Bandar Lampung","21/05/1989", "Membaca"],
["0002","Dika Sembiring","Medan","10/10/1992","Bermain Gitar"],
["0003","Winona","Ambon","25/12/1965","Memasak"]]


function add(a,i,j){
{
temp=(a[i][j]);
}
return temp;
}
m=add(input,0,4)
console.log(m)
//o/p
//Membaca
//--------------------------------------------------

//add key value

myobject = {om:"one","11":1,"name":"arun"};
myobject.key3="ten"
value=Object.assign(myobject,{ok:"m"})
console.log(value);
console.log(myobject);
//o/p
//{ '11': 1, om: 'one', name: 'arun', key3: 'ten' }

//-------------------------------------------------
//
myobject={gh:"one",jb:"1",name:"arun"};
m=`${myobject}kjbk`
console.log(m);
//o/p
//[object Object]kjbk


































































































































































































