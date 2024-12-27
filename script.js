document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to my portfolio!");


  const dynamicText = document.getElementById('dynamic');
  const texts = ['Wenzokuhle Maziya', 'a Full Stack Developer', 'and a UX/UI Designer'];
  let index = 0;

  setInterval(() => {
    dynamicText.style.opacity = 0; 
    setTimeout(() => {
      dynamicText.textContent = texts[index]; 
      dynamicText.style.opacity = 1; 
      index = (index + 1) % texts.length; 
    }, 500); 
  }, 3000); 
   document.querySelectorAll('.skill-box').forEach(box => {
        box.addEventListener('mousedown', () => {
            box.style.transform = 'scale(0.95)';
        });

        box.addEventListener('mouseup', () => {
            box.style.transform = 'scale(1)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)'; 
        });
    });
    const form = document.querySelector("form[name='contact']");
    const thankYouMessage = document.getElementById("thank-you-message");
    const formContainer = document.querySelector(".contact");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        thankYouMessage.style.display = "block";
        form.style.display = "none";

        // formContainer.querySelector("form").style.display = "none";

        setTimeout(function() {
            form.submit();
        }, 2000); 
    });
});
