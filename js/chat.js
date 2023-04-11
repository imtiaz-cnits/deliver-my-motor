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



// Chat Script

let media = window.matchMedia("(max-width: 990px)");

let chatLanding = document.getElementById("chatLanding");

let chatOpen = document.querySelector(".chatOpen");

let mainChatField = document.getElementById("mainChatField");

let backBtn = document.querySelector(".back-btn");

chatOpen.addEventListener("click", openChat);

media.addListener(openChat);

function openChat() {
    if (media.matches) {
        chatLanding.style.display = 'none';
    mainChatField.style.display = 'block';
    } else {
        chatLanding.style.display = 'block';
    mainChatField.style.display = 'block';
    }
}

backBtn.addEventListener("click", () => {
    chatLanding.style.display = 'block';
    mainChatField.style.display = 'none';
});
