const request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send()


request.onload=function()
{ 
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)
c.filter((e)=>e.currencies).filter((e)=>{
    console.log(e.currencies.USD)}
// .map((e)=>{
//     console.log(object.keys(e.currencies))
// })
)}
else   
{ 
request.onerror=function()
{
    console.log("site is error")
}}} 