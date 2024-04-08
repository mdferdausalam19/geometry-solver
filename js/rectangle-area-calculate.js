function calculateRectangleArea() {
  // rectangle width
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthValue = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthValue);

  //rectangle length
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthValue = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthValue);

  const areaOfRectangle = width * length;

  // display area on the sidebar
  const areaCalculation = document.getElementById("area-calculation");
  const ul = document.createElement("ul");
  areaCalculation.appendChild(ul);
  const li = document.createElement("li");
  li.innerText =
    count + "." + " Rectangle" + " " + areaOfRectangle + " cm\u00B2";
  ul.appendChild(li);
  count++;

  //   display area on the card
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = areaOfRectangle;

  rectangleWidthInput.value = "";
  rectangleLengthInput.value = "";
}
