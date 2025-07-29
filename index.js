
let number =0
let count = document.getElementById("count")
let num =document.getElementById("lock")


function increment()
{
   number =number+1
   count.innerText = number
   return number
}
function save()
{
   num.innerText += number + "-"
   count.textContent = 0 
   number = 0
}