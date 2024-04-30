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
