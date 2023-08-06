//resume stuff
let resumeBtn = document.getElementById("resumebtn")
let resumeDiv = document.getElementById("resumediv")
// Projects stuff
let projectsBtn = document.getElementById("projectsbtn")
let projectsDiv = document.getElementById("projectsdiv");
// hide
let none = document.getElementsByClassName("nonere")



resumeBtn.addEventListener("click", () => {
projectsDiv.style.display = "none"
resumeDiv.style.display = "block"
})

projectsBtn.addEventListener('click', () => {

resumeDiv.style.display = "none"
projectsDiv.style.display = "block"
})
