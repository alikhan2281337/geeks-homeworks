let result = document.getElementById('results')
let less = document.getElementById('Less')
let reset = document.getElementById('Reset')
let more = document.getElementById('More')
let counter = 0
 
function addLess(){
    counter--
    result.innerText = counter
    
}
function addReset(){
    counter = 0
    result.innerText = 0
}
function addMore(){
    counter++
    result.innerText = counter
}