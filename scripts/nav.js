const navbar = document.querySelector("nav");
const navUl = document.createElement("ul");
navUl.classList.add("menuLinks");

const hamButton = document.createElement("button");
hamButton.setAttribute("id", "hamButton");
hamButton.setAttribute("aria-label", "menu");
navbar.appendChild(hamButton);


const menuItems = [
  "Location and Meeting Times",
  "Announcements",
  "Temple Info",
  "Missionaries",
  "Calendar",
  "Leadership",
];
const menuIDs = [
  "location",
  "announcements",
  "temple",
  "missionaries",
  "calendar",
  "leadership",
];

const renderNav = () => {
  menuItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${menuIDs[index]}">${item}</a>`;
    navUl.appendChild(li);
  });

  navbar.appendChild(navUl);
  
};

hamButton.addEventListener("click", () => {
  navUl.classList.toggle("open");
  console.log("Clicked!");
  hamButton.classList.toggle("open");
});


renderNav();
