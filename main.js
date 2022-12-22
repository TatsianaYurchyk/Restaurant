const burger=document.getElementById("burger");
const burger_self=document.getElementById("burger_self");
const left_bar=document.getElementById("left_bar");
const left_bar_opened=document.getElementById("left_bar_opened");
const burger_close=document.getElementById("burger_close");
const booking_button=document.getElementById("booking_button");

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
    left_bar_opened.style.height="100%";
    booking_button.style.display="block";

}
function closeNav(){
  // left_bar_opened.classList.add("display");
  left_bar_opened.style.width="0%";
  left_bar_opened.style.zIndex='-1';
  booking_button.style.display="none";
}

burger.addEventListener("click",openNav);
burger_self.addEventListener("click",openNav);
burger_close.addEventListener("click",closeNav);


const div = document.getElementsByTagName('div')[0]
left_bar_opened.addEventListener('scroll', function() {
  console.log("oo")
})

