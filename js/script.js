//--------------Navbar-----------//
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

//--------------Portfolio Gallery-----------//
let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")){
        //deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");

        //activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }

});
// Review Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
});
// =========typing==========>
var typed = new Typed(".typing",{
    strings:["Web Developer","Web Designer","Ui/UX Designer","Graphic Designer","Freelancer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

});
// =========logo color change=====
let logo = document.querySelector('.logo');
logo.addEventListener('input', () =>{
    logo.style.background = logo.var(--main-color);
});
// =========Email validation=====
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  

