//your code here!

let arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']
let count = 11;
let listContainer = document.querySelector("#infi-list")
arr.forEach(item => {
	listContainer.innerHTML += `
	<li>${item}</li>
	`
})

listContainer.addEventListener("scrollend", ()=>{
	listContainer.innerHTML += `
	<li>Item ${count++}</li>
	<li>Item ${count++}</li>
	`
})




