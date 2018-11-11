function main(event){
	const btn = event.currentTarget;
	//btn.style.backgroundColor = 'blue'
	const div = btn.parentNode;
	const array = div.childNodes;
	array[1].style.textDecoration = "line-through";//setAttribute("status","done");//[status]="done";
	btn.removeEventListener('click',main)
}
const buttons = document.querySelectorAll('button');
for(const button of buttons){
	button.addEventListener('click',main);
}

/* Write your code here */
