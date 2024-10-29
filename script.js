const menuIcon = document.querySelector(".menu_icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const headerNavbarAndBtnContainer = document.querySelector(
  ".header_navbar-and-btn-container"
);
const overlay = document.querySelector(".overlay");

const featureDropdownItem = document.querySelector(".features-dropdown-item");
const featureDropdownContent = document.querySelector(
  ".features-dropdown-content"
);

const companyDropdownItem = document.querySelector(".company-dropdown-item");
const companyDropdownContent = document.querySelector(
  ".company-dropdown-content"
);

const featureDownArrow = document.querySelector(".feature-down-arrow");
const featureUpArrow = document.querySelector(".feature-up-arrow");

const companyDownArrow = document.querySelector(".company-down-arrow");
const companyUpArrow = document.querySelector(".company-up-arrow");

function openMenu() {
  headerNavbarAndBtnContainer.style.display = "block";
  headerNavbarAndBtnContainer.classList.add("slide-menu", "active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
}

function closeMenu() {
  headerNavbarAndBtnContainer.style.display = "none";
  headerNavbarAndBtnContainer.classList.remove("slide-menu", "active");
  overlay.classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling
}

menuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

featureDropdownItem.addEventListener("click", () => {
  if (featureDropdownContent.classList.contains("active")) {
    featureDownArrow.style.display = "inline";
    featureUpArrow.style.display = "none";
    featureDropdownContent.classList.toggle("active");
  } else {
    featureDownArrow.style.display = "none";
    featureUpArrow.style.display = "inline";
    featureDropdownContent.classList.toggle("active");
  }
});

companyDropdownItem.addEventListener("click", () => {
  if (companyDropdownContent.classList.contains("active")) {
    companyDownArrow.style.display = "inline";
    companyUpArrow.style.display = "none";
    companyDropdownContent.classList.toggle("active");
  } else {
    companyDownArrow.style.display = "none";
    companyUpArrow.style.display = "inline";
    companyDropdownContent.classList.toggle("active");
  }
});

// Function that runs when screen width changes
function handleScreenResize() {
  let screenWidth = document.documentElement.clientWidth || window.innerWidth;
  if (screenWidth > 768) {
    headerNavbarAndBtnContainer.style.display = "flex";
    headerNavbarAndBtnContainer.classList.remove("slide-menu", "active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  } else {
    headerNavbarAndBtnContainer.style.display = "none";
  }
}

// Add event listener for window resize event
window.addEventListener("resize", handleScreenResize);

// Call the function immediately to handle the initial screen width
handleScreenResize();
