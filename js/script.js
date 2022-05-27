const calcScreen = document.querySelector('.calc__screen-out'),
calcBtns = Array.from(document.querySelectorAll('.calc__btn')), 
calcicon = document.querySelector('.icon')

calcBtns.map((btn)=>{
    btn.addEventListener('click', function (e) {
        let answer = e.target.innerHTML
        size()
        if (answer == 'C') {
            calcScreen.innerHTML = ''
        } else if (answer == calcicon.innerHTML) {
            calcScreen.innerHTML = calcScreen.innerHTML.slice(0,-1)
        }else if( answer == '='){
          calcScreen.innerHTML = eval(calcScreen.innerHTML)
        }
        else {
            if (calcScreen.innerHTML.length >= 85) {
              calcScreen.innerHTML = calcScreen.innerHTML
            }else{
              calcScreen.innerHTML = calcScreen.innerHTML + answer
            }
        }
    })
})
calcScreen.innerHTML = calcScreen.innerHTML + answer
function size() {
  if (calcScreen.innerHTML.length >= 30) {
    calcScreen.style.fontSize = '20px'
  }else if(calcScreen.innerHTML.length >= 20){
    calcScreen.style.fontSize = '30px'
  }else if(calcScreen.innerHTML.length < 20){
    calcScreen.style.fontSize = '40px'
  }
}