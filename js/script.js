const body = document.querySelector("body"),
sidebar = body.querySelector(".dashboard-sidebar"),
toggle = body.querySelector("#sideNavbarIcon");
toggles = body.querySelector("#sideNavbarXmarkIcon");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    toggle.style.visibility = "hidden";
});

toggles.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    toggle.style.visibility = "visible";
});

// side navbar


let mainBasicForms1 = document.querySelector(".main-basic-info-box-1");
let mainBasicForms2 = document.querySelector(".main-basic-info-box-2");
let mainBasicForms3 = document.querySelector(".main-basic-info-box-3");

let firstStepNextBtn = document.querySelector("#first-step-next-btn");
let secondStepNextBtn = document.querySelector("#second-step-next-btn");

let secondStepBackBtn = document.querySelector("#second-step-back-btn");
let thirdStepBackBtn = document.querySelector("#third-step-back-btn");


firstStepNextBtn.addEventListener("click", function () {
  mainBasicForms1.style.display = 'none';
  mainBasicForms2.style.display = 'block';
});

secondStepNextBtn.addEventListener("click", function () {
  mainBasicForms2.style.display = 'none';
  mainBasicForms3.style.display = 'block';
});

secondStepBackBtn.addEventListener("click", function () {
  mainBasicForms1.style.display = 'block';
  mainBasicForms2.style.display = 'none';
});

thirdStepBackBtn.addEventListener("click", function () {
  mainBasicForms2.style.display = 'block';
  mainBasicForms3.style.display = 'none';
});



// imgInp.onchange = evt => {
//   const [file] = imgInp.files
//   if (file) {
//     blah.src = URL.createObjectURL(file)
//   }
// }