const headerTitle = document.getElementById("header__title");
let animationIter = 1;
for (let i = 0; i < title.length; i++) {
  let letterDIV = document.createElement("div");
  letterDIV.classList.add("grid_letter");

  let letter = title[i];

  for (let j = 0; j < letter.length; j++) {
    for (let k = 0; k < letter[j].length; k++) {
      let letterSegmentDiv = document.createElement("div");
      letterSegmentDiv.classList.add("letter_segment_div");

      if (letter[j][k] === 1) {
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        letterSegmentDiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
        letterSegmentDiv.classList.add("active");
        letterSegmentDiv.style.animationName = "rotate";
        letterSegmentDiv.style["animation-iteration-count"] = 1;
        letterSegmentDiv.style["animation-timing-function"] =
          "cubic-bezier(.23,-0.6,.77,1.5)";
        letterSegmentDiv.style.animationDuration = `${animationIter}s`;
        animationIter += 0.02;
      } else {
        letterSegmentDiv.style.backgroundColor = "white";
      }
      letterDIV.appendChild(letterSegmentDiv);
    }
  }
  headerTitle.appendChild(letterDIV);
}
