/*-----------------------------------------header hamburger icon--------------------------------*/
function openMenu() {
  document.body.classList += " menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}

/***-------------------------- Review section----------------------------------------***/
document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review");
  let currentReview = 0;
  function showReview(index) {
    reviews.forEach((review) => review.classList.remove("active"));
    reviews[index].classList.add("active");
  }
  document.querySelector(".prev-btn").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  });
  showReview(currentReview);
});


/*----------------------------------------drop down faq-question-------------------------*/
const questions = document.querySelectorAll(".dropbtn");
const answers = document.querySelectorAll(".dropdown-content");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers[index].classList.toggle("active");
  });
});
var dropButtons = document.querySelectorAll(".dropbtn");
// Add click event listener to each drop button
dropButtons.forEach(function (dropButton) {
  dropButton.addEventListener("click", function () {
    // Toggle the active class on the parent faqs__collapsible element
    var faqCollapsible = dropButton.closest(".faqs__collapsible");
    faqCollapsible.classList.toggle("active");

    // Toggle the visibility of the dropdown content
    var dropdownContent = faqCollapsible.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("img, div, span, section"); // Add any elements you want to check
  elements.forEach((element) => {
    if (element.scrollWidth > document.documentElement.clientWidth) {
      element.classList.add("highlight-overflow");
    }
  });
});