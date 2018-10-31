var clicked=0;
var selectedItem=document.getElementById("javascript");
selectedItem.style.cursor="pointer";
function javaScriptCategorySelected()

{
  if(clicked===0)
  {
		var newItem4=document.createElement("li");					
	newItem4.appendChild(document.createTextNode(" Angular.js"));
	newItem4.addEventListener("click",function()
				{
	 				window.open('angularInfoPage.html','_blank');			
				})					
	newItem4.style.cursor="pointer";
	selectedItem.insertAdjacentElement("afterend",newItem4);	

	var newItem3=document.createElement("li");					
	newItem3.appendChild(document.createTextNode(" Vue.js "));
	newItem3.addEventListener("click",function()
				{
	 				window.open('VueInfoPage.html','_blank');			
				})					
	newItem3.style.cursor="pointer";
	selectedItem.insertAdjacentElement("afterend",newItem3);

	var newItem2=document.createElement("li");
	newItem2.appendChild(document.createTextNode(" jQuery "));
	newItem2.setAttribute("onclick","itemClicked()");					
	newItem2.style.cursor="pointer";
	selectedItem.insertAdjacentElement("afterend",newItem2);



	var newItem=document.createElement("li");					
	newItem.appendChild(document.createTextNode(" Pure JavaScript "));
	newItem.addEventListener("click",function()
				{
	 				window.open('javaScriptInfoPage.html','_blank');			
				})					
	newItem.style.cursor="pointer"
	selectedItem.insertAdjacentElement("afterend",newItem);


	clicked=1;
  }//end of if
}
function itemClicked()
{
    	window.open('jQueryInfoPage.html','_blank');	
}