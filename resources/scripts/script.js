const itemClicked4 = () => window.open('angularInfoPage.html', '_blank');
const itemClicked3 = () => window.open('VueInfoPage.html', '_blank');
const itemClicked2 = () => window.open('jQueryInfoPage.html', '_blank');
const itemClicked = () => window.open('javaScriptInfoPage.html', '_blank');

var clicked = 0;

const javaScriptCategorySelected = () => {
	let selectedItem = document.getElementById("javascript");
	selectedItem.style.cursor = "pointer";
	const li = () => document.createElement("li");

	if (clicked === 0) {
		let newItem4 = li();
		newItem4.appendChild(document.createTextNode(" Angular.js"));
		newItem4.setAttribute("onclick", "itemClicked4()");
		newItem4.style.cursor = "pointer";
		selectedItem.insertAdjacentElement("afterend", newItem4);

		let newItem3 = li();
		newItem3.appendChild(document.createTextNode(" Vue.js "));
		newItem3.setAttribute("onclick", "itemClicked3()");
		newItem3.style.cursor = "pointer";
		selectedItem.insertAdjacentElement("afterend", newItem3);

		let newItem2 = li();
		newItem2.appendChild(document.createTextNode(" jQuery "));
		newItem2.setAttribute("onclick", "itemClicked2()");
		newItem2.style.cursor = "pointer";
		selectedItem.insertAdjacentElement("afterend", newItem2);

		let newItem = li();
		newItem.appendChild(document.createTextNode(" Pure JavaScript "));
		newItem.setAttribute("onclick", "itemClicked()");
		newItem.style.cursor = "pointer"
		selectedItem.insertAdjacentElement("afterend", newItem);
		clicked = 1;
	} //end of if
}