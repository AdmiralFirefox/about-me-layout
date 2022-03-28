const accHeading = document.querySelectorAll(".accordion");
const accPanel = document.querySelectorAll(".panel");

// Function that shows a Panel
const showPanel = (elem) => {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = `${elem.nextElementSibling.scrollHeight}px`;
};

// Function that hides all shown Panels
const hidePanels = () => {
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    accHeading[i].classList.remove("active");
  }
};

for (let i = 0; i < accHeading.length; i++) {
  accHeading[i].onclick = function () {
    if (accHeading[i].nextElementSibling.style.maxHeight) {
      hidePanels();
    } else {
      showPanel(accHeading[i]);
    }
  };
}
