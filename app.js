const sideBarToggle =document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sideBar = document.querySelector(".sidebar")



sideBarToggle.addEventListener('click', function(){
	// console.log(sideBar.classList);
	// console.log(sideBar.classList.contains("random"));
	// console.log(sideBar.classList.contains('sideBar'));
// if (sideBar.classList.contains("show-sideBar")){
// 	sideBar.classList.remove("show-sideBar")
// } else {
// 	sideBar.classList.add("show-sideBar");
// }
sideBar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener('click', function() {
sideBar.classList.toggle("show-sidebar")
})
