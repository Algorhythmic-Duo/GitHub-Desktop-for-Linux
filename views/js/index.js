document.getElementById("drawerButton").addEventListener("click", function () {
  const drawer = document.getElementById("drawer");
  if (drawer.style.width === "250px") {
    drawer.style.width = "0";
  } else {
    drawer.style.width = "250px";
  }
});
document.getElementById("drawerClose").addEventListener("click", function () {
  const drawer = document.getElementById("drawer");
  if (drawer.style.width === "250px") {
    drawer.style.width = "0";
  } else {
    drawer.style.width = "250px";
  }
});
document.getElementById("profileButton").addEventListener("click", function () {
  alert("Profile button clicked!");
});
