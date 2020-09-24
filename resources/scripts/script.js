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

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-light");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// $(".card").hover(
// 	function () {
// 		$(this).filter(':not(:animated)').animate({
// 			zoom: '125%'
// 		}, 500).css('background', '#eee');
// 		// This only fires if the row is not undergoing an animation when you mouseover it
// 	},
// 	function () {
// 		$(this).animate({
// 			zoom: '100%'
// 		}, 500).css('background', 'transparent');
// });

//NAVBAR - Change opacity and colours on scroll

const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link');
const headertext = document.querySelector('#headerText');
 
const navScroll = () => {

			if (document.documentElement.scrollTop > 80) {
				navbar.classList.add('navbar-light');
				navbar.classList.remove('navbar-dark');
				headertext.classList.add('header-text-light');
			} else {
				navbar.classList.remove('navbar-light');
				navbar.classList.add('navbar-dark');
				headertext.classList.remove('header-text-light');
			}
}


window.addEventListener('scroll', navScroll);

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 90) {
        $('.gotopbtn').fadeIn();
    } else {
        $('.gotopbtn').fadeOut();
    }
});
$(document).ready(function() {
    $(".gotopbtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/