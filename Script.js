// Helper Function
/**
 * $election
 * - true to select all
 * @param {Element} selector
 * @param {Boolean} all
 * @returns Element(s)
 */
function $(selector, all = false) {
  selector = selector.toString().trim();
  if (all) {
    return document.querySelectorAll(selector);
  } else {
    return document.querySelector(selector);
  }
}

[...$("input", true)].forEach((input) => {
  input.addEventListener("input", () => {
    let inpArr = []; // Creat empty array
    [...$("input", true)].forEach((input) => {
      if (input.value <= 100) {
        inpArr.push(input.value + "%"); // Push input value in inpArr
      }
    });

    for (let i = 0; i < inpArr.length; i++) {
      if (inpArr[i] === "%") {
        inpArr[i] = "0%"; // if empty field
      }
      [...$("span", true)][i].style.width = inpArr[i]; // Set the span width
      [...$("span", true)][i].dataset.progress = inpArr[i]; // And data-progress value
    }
    inpArr[inpArr.length - 1] !== "0%"
      ? $(".submit-btn").classList.add("active")
      : $(".submit-btn").classList.remove("active");
  });
});

$(".submit-btn").onclick = () => {
  $(".bg").classList.add("visible");
};
$(".popup-btn").onclick = () => {
  $(".bg").classList.remove("visible");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
