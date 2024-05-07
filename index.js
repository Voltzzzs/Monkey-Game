const click = document.querySelector(".click")
document.querySelector(".gameover").addEventListener("click",()=>{
    location.reload()
})



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
        clickedSequence.push(event.target)
        event.target.style.display = "none";
        checkSequence()
        checkWin()
    });
    
}


function positionClick(num){
    num.style.top = Math.floor(Math.random() *(viewportHeight - 90)) + 'px'
    num.style.left = Math.floor(Math.random() *(viewportWidth - 90)) + 'px'

}






function checkSequence(){
    if(clickedSequence[clickedSequence.length - 1] !== totalClick[clickedSequence.length - 1]){
        document.querySelector(".gameover").style.display = "flex"
        document.querySelectorAll(".click").forEach((element)=>{
            element.style.display = "none"
        })
    }
}



createClick()
createClick()

const seq1 = document.querySelector(".seq1")

seq1.addEventListener("click",(event)=>{
    document.querySelectorAll(".click").forEach((element)=>{
        element.style.backgroundColor = "black"
    })
})


function checkWin(){
    if(clickedSequence.length === totalClick.length){
        clickedSequence = []
        document.querySelectorAll(".click").forEach((element)=>{
            element.style.display = "flex"
            positionClick(element)
            element.style.backgroundColor = "rgb(49, 63, 75)"
        })
        createClick()

    }
}
