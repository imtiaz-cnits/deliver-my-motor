let sideNavbarBtn = document.querySelector("#sideNavbarIcon");
      let sidenavbar = document.querySelector("#sidenavbar");
      let sideNavbar = document.querySelector(".dashboard-sidebar");
      let dashboardCols = document.querySelector(".dashboard-content-cols");
      let dashboardCols1 = document.querySelector(".dashboard-content-cols1");
      let dashboardCols2 = document.querySelector(".dashboard-content-cols2");

      sideNavbarBtn.addEventListener("click", function () {
        if (
          sideNavbarBtn.firstElementChild.classList.contains(
            "fa-bars-staggered"
          )
        ) {
          sideNavbarBtn.firstElementChild.classList.replace(
            "fa-bars-staggered",
            "fa-xmark"
          );
          sideNavbarBtn.style.color = "#ff861c";
        } else {
          sideNavbarBtn.firstElementChild.classList.replace(
            "fa-xmark",
            "fa-bars-staggered"
          );
          sideNavbarBtn.style.color = "#000000";
        }

        if (dashboardCols.classList.contains("col-lg-12")) {
          dashboardCols.classList.replace("col-lg-12", "col-lg-9");
          sideNavbar.style.display = "block";
        } else {
          dashboardCols.classList.replace("col-lg-9", "col-lg-12");
          sideNavbar.style.display = "none";
        }

        if (dashboardCols1.classList.contains("col-lg-12")) {
          dashboardCols1.classList.replace("col-lg-12", "col-lg-9");
          dashboardCols.style.display = "none";
        } else {
          dashboardCols1.classList.replace("col-lg-9", "col-lg-12");
          dashboardCols.style.display = "block";
        }
        // sidenavbar.classList.toggle("showSidebar");
      });


// side navbar


let mainBasicForms1 = document.querySelector(".main-basic-info-box-1");
let mainBasicForms2 = document.querySelector(".main-basic-info-box-2");
let mainBasicForms3 = document.querySelector(".main-basic-info-box-3");

let firstStepNextBtn = document.querySelector("#first-step-next-btn");
let secondStepNextBtn = document.querySelector("#second-step-next-btn");

let secondStepBackBtn = document.querySelector("#second-step-back-btn");
let thirdStepBackBtn = document.querySelector("#third-step-back-btn");


firstStepNextBtn.addEventListener("click", function() {
    mainBasicForms1.style.display = 'none';
    mainBasicForms2.style.display = 'block';
});

secondStepNextBtn.addEventListener("click", function() {
    mainBasicForms2.style.display = 'none';
    mainBasicForms3.style.display = 'block';
});

secondStepBackBtn.addEventListener("click", function() {
    mainBasicForms1.style.display = 'block';
    mainBasicForms2.style.display = 'none';
});

thirdStepBackBtn.addEventListener("click", function() {
    mainBasicForms2.style.display = 'block';
    mainBasicForms3.style.display = 'none';
});
