// var heading = document.getElementById('heading')
// var body = document.querySelector('body')

// console.log[heading]

// heading.innerHTML = "i was added by JS"
// heading.style = "color:red;font-size:2rem"
// heading.classList.add('five')
// heading.classList.remove('one')
// console.log(heading.classList)

// body.classList.add('dark')
// body.classList.remove('dark')
var list = document.querySelector('ul')
 console.log(list)
 var arr = ['Go to the gym','cook','test']

 for(var i=0; i= arr.length;i++){
   var element = document.createElement('li')
   var textnode = document.createTextNode(arr[i])
   console.log(element)
   element.appendChild(textnode)
   console.log(element)
 }