const moods = [
    { mood: "Chill 😎", color: "#87CEEB" },
    { mood: "Hyper 🔥", color: "#FF6347" },
    { mood: "Sleepy 😴", color: "#9370DB" },
    { mood: "Excited 🤩", color: "#FFD700" },
    { mood: "Focused 🎯", color: "#32CD32" },
    { mood: "Confused 😵", color: "#FFB6C1" }
  ];
  
  const button = document.getElementById("generateBtn");
  const display = document.getElementById("moodDisplay");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * moods.length);
    const selectedMood = moods[randomIndex];
  
    display.textContent = selectedMood.mood;
    document.body.style.backgroundColor = selectedMood.color;
  });
  

