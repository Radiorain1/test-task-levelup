$(document).ready(function () {
  let currentIndex = 0;
  let slides = $(".carousel-slide");
  let totalSlides = slides.length;
  let isAnimating = false;

  $(".carousel-next").click(function () {
    if (isAnimating) return;
    isAnimating = true;

    slides.eq(currentIndex).fadeOut(350, function () {
      $(this).removeClass("active");
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.eq(currentIndex).fadeIn(350, function () {
        $(this).addClass("active");
        isAnimating = false;
      });
    });
  });

  $(".carousel-prev").click(function () {
    if (isAnimating) return;
    isAnimating = true;

    slides.eq(currentIndex).fadeOut(350, function () {
      $(this).removeClass("active");
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      slides.eq(currentIndex).fadeIn(350, function () {
        $(this).addClass("active");
        isAnimating = false;
      });
    });
  });
});
