let slidercards=document.querySelectorAll(".card"),
	arrowleft=document.querySelector("#arrow-left"),
	arrowright=document.querySelector("#arrow-right"),
	index = 0;

function reset(){
	for(let i=0;i<slidercards.length;i++)
		slidercards[i].style.display="none";
}

function startSlide(){
	reset();
	slidercards[0].style.display="block";
}

arrowright.addEventListener("click",function (){
	reset();
	if(index==slidercards.length-1)
		index=0;
	else{index++;}
	slidercards[index].style.display="block";
});
arrowleft.addEventListener("click",function (){
	reset();
	if(index==0)
		index=slidercards.length-1;
	else{index--;}
	slidercards[index].style.display="block";
});

startSlide();

