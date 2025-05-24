// Drawer functionality
const drawerButton = document.getElementById("drawerButton");
const drawerClose = document.getElementById("drawerClose");
const drawer = document.getElementById("drawer");
const main = document.querySelector("main");

function toggleDrawer() {
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    main.style.marginLeft = "280px";
  } else {
    main.style.marginLeft = "0";
  }
}

drawerButton.addEventListener("click", toggleDrawer);
drawerClose.addEventListener("click", toggleDrawer);

// Close drawer when clicking outside
document.addEventListener("click", (e) => {
  if (
    !drawer.contains(e.target) &&
    !drawerButton.contains(e.target) &&
    drawer.classList.contains("open")
  ) {
    toggleDrawer();
  }
});
