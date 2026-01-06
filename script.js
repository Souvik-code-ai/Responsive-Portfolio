var roleSwitch=new Typed("#role",{
    strings:["Frontend Developer","Web Designer","Software Engineer","Coder"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:100,
    loop:true
})
let x,y;
function showSideBar(){
    let showBar=document.querySelector("#mobile-menu");
    // showBar.style.display="block";
    // let closeButton=document.querySelector("#closeButton");
    // closeButton.style.display="block";
    // let navButton=document.querySelector("#navDrawer");
    // navButton.style.display="none";
    // x=1;
    console.log("done");
    // showBar.classList.toggle("hidden");
    console.log("done");
     let closeButton=document.querySelector("#closeButton");
     let navButton=document.querySelector("#navDrawer");
     navButton.classList.add("hidden");
    // navButton.style.display="none";
    
    showBar.classList.remove("hidden");
    closeButton.classList.remove("hidden");
}

function hideSideBar(){
    let navDrawer=document.querySelector("#mobile-menu");
    let navButton=document.querySelector("#navDrawer");
    // hideBar.style.display="none";
      let closeButton=document.querySelector("#closeButton");
    // navButton.style.display="block";
    
    navButton.classList.remove("hidden");
    navDrawer.classList.add("hidden");
    closeButton.classList.add("hidden");
   
}
// function clickCloseButton(){
//     let removeOption=document.querySelector("#option");
//     removeOption.style.display="none";
    
//     let closeButton=document.querySelector("#closeButton");
//     closeButton.style.display="none";
// }
// function showHomePage(){
//     let navbar=document.querySelector("#option");
//     navbar.style.display="none";
//     let navDrawer=document.querySelector("#navDrawer");
//     navDrawer.style.display="block";
//     let hideCloseButton=document.querySelector("#closeButton");
//     hideCloseButton.style.display="none";
// }
// function showSkillsPage(){
//     let navbar=document.querySelector("#option");
//     navbar.style.display="none";
//     let navDrawer=document.querySelector("#navDrawer");
//     navDrawer.style.display="block";
//     let hideCloseButton=document.querySelector("#closeButton");
//     hideCloseButton.style.display="none";
// }
// function showExperiencePage(){
//     let navbar=document.querySelector("#option");
//     navbar.style.display="none";
//     let navDrawer=document.querySelector("#navDrawer");
//     navDrawer.style.display="block";
//     let hideCloseButton=document.querySelector("#closeButton");
//     hideCloseButton.style.display="none";
// }
// function showEducationPage(){
//     let navbar=document.querySelector("#option");
//     navbar.style.display="none";
//     let navDrawer=document.querySelector("#navDrawer");
//     navDrawer.style.display="block";
//     let hideCloseButton=document.querySelector("#closeButton");
//     hideCloseButton.style.display="none";
// }
// function showContactPage(){
//     let navbar=document.querySelector("#option");
//     navbar.style.display="none";
//     let navDrawer=document.querySelector("#navDrawer");
//     navDrawer.style.display="block";
//     let hideCloseButton=document.querySelector("#closeButton");
//     hideCloseButton.style.display="none";
// }
// // if(x===1 && y===1){
// //     let navbar=document.querySelector("#option");
// //     navbar.style.display="none";
// //     let navDrawer=document.querySelector("#navDrawer");
// //     navDrawer.style.display="block";
// //     let hideCloseButton=document.querySelector("#closeButton");
// //     hideCloseButton.style.display="none";
// //     x=0;
// //     y=0;
// //     console.log("done");

// // }
// // console.log(x,y);