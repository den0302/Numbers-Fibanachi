const fibanachi = document.querySelector(".fibanachi")
const txtFibanachi = document.querySelector(".txtFibanachi")
const txtFibanachiSum = document.querySelector(".txtFibanachiSum")
const submit = document.querySelector(".submit")

function numbersFibanachi(num){
    let arr = [0, 1, 1]
    for(let i = 1; i < num - 2 ; i++){
        let length = arr.length
        let sum = arr[length - 1] + arr[length - 2]
        arr[length] = sum
    }
    return arr
}

function sumNumbersFibanachi(num){
    let arrNum = numbersFibanachi(num)
    let sum = 0
        for(let i = 0; i < arrNum.length; i++){
            sum += arrNum[i]
        }
    
    return sum
}

function submitClick(){
    if(fibanachi.value < 0){
        txtFibanachi.textContent = "number must be bigger then 0"
        txtFibanachiSum.textContent = "number must be bigger then 0"
        fibanachi.value = 0
    } else if(fibanachi.value == 0){
        txtFibanachi.textContent = "nothing"
        txtFibanachiSum.textContent = "nothing"
    }else if(fibanachi.value == 1){
        txtFibanachi.textContent = '0'
        txtFibanachiSum.textContent = 0
    }else if(fibanachi.value == 2){
        txtFibanachi.textContent = '0,1'
        txtFibanachiSum.textContent = 1
    }else if(fibanachi.value > 2){
        txtFibanachi.textContent = numbersFibanachi(fibanachi.value)
        txtFibanachiSum.textContent = sumNumbersFibanachi(fibanachi.value)  
    }
}

submit.addEventListener('click', submitClick)
fibanachi.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') submitClick()
  })