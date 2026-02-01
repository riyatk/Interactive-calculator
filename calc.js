
let z = document.getElementById("display1")
function append(v){  
    z.value = z.value + v
}
function calculate(){ 
    if (z.value === "") {
        z.value = ""
        return
    }
    // z.value = eval(z.value)
    z.value = Number(eval(z.value).toFixed(11))

}
function clearAll(){    
    z.value = ""
}
function backspace(){
    z.value = z.value.slice(0,-1)
}