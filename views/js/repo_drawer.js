// JavaScript for drawer functionality
document.addEventListener('DOMContentLoaded', () => {
  const drawerButton = document.getElementById('drawerButton'); // The hamburger menu button
  const drawer = document.getElementById('drawer'); // The drawer element itself
  const drawerClose = document.getElementById('drawerClose'); // The 'X' close button inside the drawer
  const overlay = document.getElementById('overlay'); // The semi-transparent overlay
  const body = document.body; // Reference to the body element for scroll control

  // Event listener to open the drawer when the hamburger button is clicked
  drawerButton.addEventListener('click', () => {
    drawer.classList.add('active'); // Add 'active' class to show the drawer
    overlay.classList.add('active'); // Add 'active' class to show the overlay
    body.classList.add('drawer-open'); // Add 'drawer-open' class to body to prevent scrolling
  });

  // Event listener to close the drawer when the 'X' button is clicked
  drawerClose.addEventListener('click', () => {
    drawer.classList.remove('active'); // Remove 'active' class to hide the drawer
    overlay.classList.remove('active'); // Remove 'active' class to hide the overlay
    body.classList.remove('drawer-open'); // Remove 'drawer-open' class to allow body scrolling
  });

  // Event listener to close the drawer when the overlay is clicked
  overlay.addEventListener('click', () => {
    drawer.classList.remove('active'); // Remove 'active' class to hide the drawer
    overlay.classList.remove('active'); // Remove 'active' class to hide the overlay
    body.classList.remove('drawer-open'); // Remove 'drawer-open' class to allow body scrolling
  });
});
