/* .js files add interaction to your website */
var factList = [
  "Myth: Abortions are dangerous. <br> Fact: Abortions have less than a 0.05% change of complications. In fact, they are considered one of the safest medical procedures.", 
  "Myth: Getting an abortion will lead to infertility. <br> Fact: If you get an abortion it will not impact your ability to have a child in the future.", 
  "Myth: Abortions cause breast cancer. <br> Fact: There is no scientific link between abortions and breast cancer.", 
  "Myth: The embryo will feel pain upon getting an abortion. <br> Fact: The sensor to feel pain is not developed until the third trimester. 99% of abortions take place before the pain receptor is developed."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}




// Displays the overlay upon loading
function showOverlay (){
  document.getElementById("overlay").style.display = "block";
}

window.addEventListener("load", showOverlay);

// Add event listener to proceed by closing the overlay when clicked

var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);


// Closes the overlay

function closeOverlay(){
  document.getElementById("overlay").style.display = "none";
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
