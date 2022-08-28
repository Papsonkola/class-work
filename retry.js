let result = document.getElementById('inputText');


let calculate = (number)=>{
    //result.value = result.value + number
    result.value += number;
}

function answer(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        alert('Enter the valid input');
    }
}
function clearrr(){
    result.value = " ";
}
function del(){
    result.value=result.value.slice(0,-1)
}
