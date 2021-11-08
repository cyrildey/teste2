function set(num) {
    a = document.getElementById('op').value
    if(a==0){
        document.getElementById('op').value = ''
    }
   document.getElementById('op').value += num
}

function calculate(){
    a = document.getElementById('op').value 
    document.getElementById('op').value = eval(a)

}
function clr() {
    document.getElementById('op').value = '0'
}