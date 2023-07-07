let ele = document.querySelector(".scroller");
let hight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrolltop = document.documentElement.scrollTop;
  ele.style.width = `${(scrolltop / hight) * 100}%`
})