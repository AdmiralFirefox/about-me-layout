const accordionContent = document.getElementsByClassName("accordion");

for (let i = 0; i < accordionContent.length; i++) {
  accordionContent[i].addEventListener("click", () => {
    accordionContent[i].classList.toggle("active");
    let panel = accordionContent[i].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}
