const checkbox = document.getElementById("checkbox");
const items = document.querySelectorAll(".item");
const overviewItems = document.querySelectorAll(".overview-item");
const label = document.querySelector(".label");

const textChange = () => {
  checkbox.checked
    ? (label.textContent = "White Theme")
    : (label.textContent = "Dark Theme");
};

const themeChange = () => {
  document.body.classList.toggle("white-theme");
  items.forEach((item) => {
    item.classList.toggle("white");
  });
  overviewItems.forEach((item) => {
    item.classList.toggle("white");
  });

  textChange();
};

checkbox.addEventListener("change", themeChange);
