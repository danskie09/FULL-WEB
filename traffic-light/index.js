let button = document.getElementById("btn")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")

var count = 0;
const changeColor = () => {
    
    if(count === 0){
        red.style.backgroundColor = "red"
        yellow.style.backgroundColor = ""
        green.style.backgroundColor = ""
       
    }
    else if(count === 1){
        red.style.backgroundColor = ""
        yellow.style.backgroundColor = "yellow"
        green.style.backgroundColor = ""
    }
    else if(count === 2){
        red.style.backgroundColor = ""
        green.style.backgroundColor = "green"
        yellow.style.backgroundColor = ""
        
    }

    count = (count + 1) % 3
    console.log(count)
}

