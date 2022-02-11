const request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send()


request.onload=function()
{ 
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)
c.filter((s)=>(s.population<200000)).map((e)=>{
    console.log(e.population);
})}
else   
{ 
request.onerror=function()
{
    console.log("site is error")
}}} 