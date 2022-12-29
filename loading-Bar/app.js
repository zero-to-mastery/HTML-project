const loadingBarEl = document.querySelector(".loading_inner");

let myWidth = 0;
const loadingBar = setInterval(() => {
    myWidth++;
    if(myWidth === 100) {
        clearInterval(loadingBar)
    }
    loadingBarEl.style.width = `${myWidth}%`

}, 100);


