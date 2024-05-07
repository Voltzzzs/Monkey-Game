const click = document.querySelector(".click")
const seq1 = document.querySelector(".seq1")

let clickedSequence = []

let totalClick = []



let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;




function createClick (){
    let pra = totalClick.length + 1
    let numb = document.createElement('div')
    numb.className = `click seq${pra}`
    numb.textContent = pra
    document.body.appendChild(numb);
    positionClick(numb)
    totalClick.push(numb)
    numb.addEventListener("click", (event) => {
        clickedSequence = []
        clickedSequence.push(event.target)
        event.target.style.display = "none";
        checkSequence()
        checkWin()
    });

    console.log(totalClick)
    console.log(clickedSequence)

}


function positionClick(num){
    num.style.top = Math.floor(Math.random() *(viewportHeight - 90)) + 'px'
    num.style.left = Math.floor(Math.random() *(viewportWidth - 90)) + 'px'

}






function checkSequence(){
    if(clickedSequence[clickedSequence.length - 1] !== totalClick[clickedSequence.length - 1]){
        document.querySelector(".gameover").style.display = "flex"
    }
}

function checkWin(){
    if(clickedSequence.length === totalClick.length){
        document.querySelectorAll(".click").forEach((element)=>{
            element.style.display = "flex"
        })
        createClick()
    }
}



createClick()