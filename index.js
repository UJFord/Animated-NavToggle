//get activatables
let acts = document.querySelectorAll('.activate');
//get toggle
let toggle = document.querySelector('#toggle');

//on toggle
toggle.onclick = () => {
	for(let i = 0 ; i < acts.length ; i++){
		acts[i].classList.toggle("active")
	}
	console.log(123)
}