document.addEventListener("DOMContentLoaded", function() {
  const letterContext = document.querySelector(".letter-context");
  const messages = [
    "Happy Birthday, Nafiza! Wishing you a day filled with love and joy!!! 🎉",
    "Nafiza, may your birthday be as wonderful as you are! 🎂",
    "Cheers to you, Nafiza! Have a fantastic birthday! 🥳",
    "Sending you smiles for every moment of your special day, Nafiza! 😊",
    "Nafiza, hope your birthday is as sweet as you are! 🍰"
  ];

  document.querySelector(".letter-image").addEventListener("mouseover", function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    letterContext.textContent = randomMessage;
  });
});