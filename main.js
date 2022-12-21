const burger=document.getElementById("burger");
const left_bar=document.getElementById("left_bar");
const left_bar_opened=document.getElementById("left_bar_opened");
// function openNav(){
// burger.addEventListener('click',()=>{
// left_bar.classList.add("left_bar_opened");
// console.log("dop");
// }
// )
// }
function openNav(){
    // left_bar_opened.classList.add("display");
    left_bar_opened.style.width="100%";
    left_bar_opened.style.zIndex='2';
}

burger.addEventListener("click",openNav);


const div = document.getElementsByTagName('div')[0]
left_bar_opened.addEventListener('scroll', function() {
  console.log("oo")
})

