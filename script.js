document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to my portfolio!");

  // Dynamic text functionality
  const dynamicText = document.getElementById('dynamic');
  const texts = ['Wenzokuhle Maziya', 'a Full Stack Developer', 'and a UX/UI Designer'];
  let index = 0;

  setInterval(() => {
    dynamicText.style.opacity = 0; // Start fade-out effect
    setTimeout(() => {
      dynamicText.textContent = texts[index]; // Change the text
      dynamicText.style.opacity = 1; // Fade back in
      index = (index + 1) % texts.length; // Cycle through the texts
    }, 500); // Change the text after 500ms fade-out
  }, 3000); // Change text every 3 seconds
   document.querySelectorAll('.skill-box').forEach(box => {
        box.addEventListener('mousedown', () => {
            box.style.transform = 'scale(0.95)';
        });

        box.addEventListener('mouseup', () => {
            box.style.transform = 'scale(1)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)'; // Reset when the mouse leaves the box
        });
    });
});
