document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Cảm ơn bạn đã đặt xe! Chúng tôi sẽ liên hệ sớm nhất.");

    form.reset();
  });
});
