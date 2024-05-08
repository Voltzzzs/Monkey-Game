const audioclick = document.querySelector("#clicksound")
const points = document.querySelector(".difficuty")
const recorde = document.querySelector(".record")
const playground = document.querySelector(".playground")

recorde.textContent = localStorage.getItem("record")
let current = 0

let positions = []
function checkPosition(){
    
}






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
    positionClick(numb)
    totalClick.push(numb)
    playground.appendChild(numb);
    numb.addEventListener("click", (event) => {
        audioclick.play()
        clickedSequence.push(event.target)
        event.target.style.display = "none";
        checkSequence()
        checkWin()
    });
}


function positionClick(numb){
    let row, col, arte
    
    do{
        row = Math.floor(Math.random() * 5) + 1
        col = Math.floor(Math.random() * 5) + 1
        arte = `${row}${col}`
    } while(positions.includes(arte))

  
    numb.style.gridColumn = `${col}`;
    numb.style.gridRow = `${row}`;

   

    return positions.push(arte), console.log(positions)
}






function checkSequence(){
    if(clickedSequence[clickedSequence.length - 1] !== totalClick[clickedSequence.length - 1]){
        localStora()
        document.querySelector(".gameover").style.display = "flex"
        document.querySelectorAll(".click").forEach((element)=>{
            element.style.display = "none"
            
        })
        current = 0
        points.textContent = current
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
        positions = []
        document.querySelectorAll(".click").forEach((element)=>{
            element.style.display = "flex"
            positionClick(element)
            element.style.backgroundColor = "rgb(51, 77, 99)"
            element.style.textAlign = "center"
            element.style.justifyContent = "center";
        })
        createClick()

        current++
        points.textContent = current

    }
}



function localStora(){
    let prevRecord = localStorage.getItem("record")

    if(current > prevRecord){
        localStorage.setItem("record", current)
    }
    recorde.textContent = localStorage.getItem("record")
}