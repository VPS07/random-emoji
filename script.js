const contentUp = document.getElementById("content");
const contentDiv = document.getElementById("contentDiv");

fetch("https://api.emojisworld.fr/v1/random?limit=1")
  .then((res) => res.json())
  .then((data) => {
    let emojis = data.results[0].emoji;
    let emojiName = data.results[0].name;
    contentUp.style.fontSize = "40px";
    const emoji_name = document.createElement("p");
    emoji_name.textContent = emojiName;
    contentDiv.appendChild(emoji_name);
    contentUp.textContent = emojis;
    // copy to clipboard
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(emojis);
  });
