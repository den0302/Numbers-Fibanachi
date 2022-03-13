const fibanachi = document.querySelector(".fibanachi")
const txtFibanachi = document.querySelector(".txtFibanachi")
const txtFibanachiSum = document.querySelector(".txtFibanachiSum")
const submit = document.querySelector(".submit")
const title = document.querySelector(".title")

function numbersFibanachi(num){
    let arr = [` 0`,` 1`,` 1`]
    for(let i = 1; i < num - 2 ; i++){
        let length = arr.length
        let sum = +arr[length - 1] + +arr[length - 2]
        arr[length] = ` ${sum}`
    }
    return arr
}

function sumNumbersFibanachi(num){
    let arrNum = numbersFibanachi(num)
    let sum = arrNum.reduce(function(preciousValue, item){
        return +item + +preciousValue
    }, 0)
    return sum
}

function submitClick(){
    if(fibanachi.value == "if you translated it you are cool"){
        title.textContent = "0101101001001000010001100011001001100101011011010110100000110001010011110110100101000010010001010101001001010110010010100100011001010010010000010011110100111101"
        txtFibanachi.textContent = "Did you find it? Wow. If you have gone so far, go ahead. I believe in you!"
        txtFibanachiSum.textContent = "0101101001001000010001100011001001100101011011010110100000110001010011110110100101000010010001010101001001010110010010100100011001010010010000010011110100111101"
    } else if(isNaN(+fibanachi.value)){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = "enter number"
        txtFibanachiSum.textContent = "enter number"
        fibanachi.value = 0
    } else if(fibanachi.value < 0){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = "number must be bigger then 0"
        txtFibanachiSum.textContent = "number must be bigger then 0"
        fibanachi.value = 0
    } else if(fibanachi.value == 0){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = "nothing"
        txtFibanachiSum.textContent = "nothing"
    }else if(fibanachi.value == 1){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = '0'
        txtFibanachiSum.textContent = 0
    }else if(fibanachi.value == 2){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = '0,1'
        txtFibanachiSum.textContent = 1
    }else if(fibanachi.value > 2){
        title.textContent = "Numbers Fibanachi"
        txtFibanachi.textContent = numbersFibanachi(fibanachi.value)
        txtFibanachiSum.textContent = sumNumbersFibanachi(fibanachi.value)  
    }
}

submit.addEventListener('click', submitClick)
fibanachi.addEventListener('keydown', function(event) {if(event.code == 'Enter') submitClick()})