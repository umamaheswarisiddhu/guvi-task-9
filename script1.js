const request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send()


request.onload=function()
{ 
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)
c.filter((s)=>s.region==="Asia").map((e)=>{
console.log(e.name.official)})
}
else   
{ 
request.onerror=function()
{
    console.log("site is error")
}}} 