function readToggle() {
    console.log("Button pressed!");

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("read-more");
  var btnText = document.getElementById("read-more-button");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
