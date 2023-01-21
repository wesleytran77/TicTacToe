//use change of class to the divs to change colors and change innerhtmls

const spot= document.querySelectorAll(".spot")

var turn= "X"
var gameOn= true


spot.forEach(spot => {
	spot.addEventListener("click", () =>{
		if (gameOn == true && spot.innerHTML == ""){
			spot.innerHTML= turn
			nextTurn()
		}
		checkWin()
	})
})

function nextTurn(){
	if (gameOn == true){
		if (turn == "X"){
			turn = "O"
			document.querySelector(".turn").innerHTML= "O's Turn"
		}
		else{
			turn = "X"
			document.querySelector(".turn").innerHTML= "X's Turn"
		}
	}
}

const spot1= document.querySelector(".spot1")
const spot2= document.querySelector(".spot2")
const spot3= document.querySelector(".spot3")
const spot4= document.querySelector(".spot4")
const spot5= document.querySelector(".spot5")
const spot6= document.querySelector(".spot6")
const spot7= document.querySelector(".spot7")
const spot8= document.querySelector(".spot8")
const spot9= document.querySelector(".spot9")



function checkWin(){
	//check horizontal wins
	if (spot1.innerHTML == spot2.innerHTML && spot2.innerHTML == spot3.innerHTML && spot3.innerHTML != ""){
		spot1.style.color= "#e2b714"
		spot2.style.color= "#e2b714"
		spot3.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	if (spot4.innerHTML == spot5.innerHTML && spot5.innerHTML == spot6.innerHTML && spot6.innerHTML != ""){
		spot4.style.color= "#e2b714"
		spot5.style.color= "#e2b714"
		spot6.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	if (spot7.innerHTML == spot8.innerHTML && spot8.innerHTML == spot9.innerHTML && spot9.innerHTML != ""){
		spot7.style.color= "#e2b714"
		spot8.style.color= "#e2b714"
		spot9.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	//check vertical wins
	if (spot1.innerHTML == spot4.innerHTML && spot4.innerHTML == spot7.innerHTML && spot7.innerHTML != ""){
		spot1.style.color= "#e2b714"
		spot4.style.color= "#e2b714"
		spot7.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	if (spot2.innerHTML == spot5.innerHTML && spot5.innerHTML == spot8.innerHTML && spot8.innerHTML != ""){
		spot2.style.color= "#e2b714"
		spot5.style.color= "#e2b714"
		spot8.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	if (spot3.innerHTML == spot6.innerHTML && spot6.innerHTML == spot9.innerHTML && spot9.innerHTML != ""){
		spot3.style.color= "#e2b714"
		spot6.style.color= "#e2b714"
		spot9.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	//check for diagonal wins
	if (spot1.innerHTML == spot5.innerHTML && spot5.innerHTML == spot9.innerHTML && spot9.innerHTML != ""){
		spot1.style.color= "#e2b714"
		spot5.style.color= "#e2b714"
		spot9.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}
	if (spot3.innerHTML == spot5.innerHTML && spot5.innerHTML == spot7.innerHTML && spot7.innerHTML != ""){
		spot3.style.color= "#e2b714"
		spot5.style.color= "#e2b714"
		spot7.style.color= "#e2b714"
		gameOn= false
		document.querySelector(".turn").style.visibility= "hidden"
		document.querySelector(".header").style.visibility= "hidden"
	}

}

const resetButton= document.querySelector(".resetButton")
resetButton.addEventListener("click", function(){
	turn= "X"
	document.querySelector(".turn").innerHTML= "X's Turn"
	document.querySelector(".turn").style.visibility= "visible"
	document.querySelector(".header").style.visibility= "visible"
	gameOn = true
	spot.forEach(spot => {
		spot.innerHTML= ""
		spot.style.color= "#d1d0c5"
	})
})



//make sure u cant go on top of someones piece 

 