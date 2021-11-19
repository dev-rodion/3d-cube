"use stict";

window.onload = function () {
  const root = document.documentElement;
  const inputs = document.getElementsByTagName("input");

  for (let key in Object.values(inputs)) {
    const element = inputs[key];
    const varName = element.getAttribute("data-var");
    const color = getComputedStyle(root).getPropertyValue(varName).trim();

    element.value = color;

    element.addEventListener("input", function () {
      handleColorChange(this);
    });
  }

  function handleColorChange(element) {
    const color = element.value;
    const varName = element.getAttribute("data-var");

    root.style.setProperty(varName, color);
  }
};
