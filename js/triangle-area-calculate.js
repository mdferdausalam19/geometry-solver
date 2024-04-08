let count = 1;
function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  // get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  const areaOfTriangle = 0.5 * base * height;

  // display triangle area on the side bar
  const areaCalculation = document.getElementById("area-calculation");
  const ul = document.createElement("ul");
  areaCalculation.appendChild(ul);
  const li = document.createElement("li");
  li.innerText = count + "." + " Triangle" + " " + areaOfTriangle + " cm\u00B2";
  ul.appendChild(li);
  count++;

  // display area on the card
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = areaOfTriangle;

  triangleBaseInput.value = "";
  triangleHeightInput.value = "";
}
