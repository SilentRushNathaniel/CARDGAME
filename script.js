const equipmentEmojis = {
    "🪓": "axe",
    "🧥": "fire coat",
    "📣": "megaphone",
    "🦺": "vest",
    "🪢": "rope",
    "🪣": "bucket",
    "🪜": "ladder",
    "🚒": "fire truck",
    "🔥": "fire",
    "🧯": "fire extinguisher",
    "👨‍🚒": "firefighter",
    "🚨": "alarm",
    "💧": "water",
    "💨": "smoke",
    "🚧": "traffic cone",
    "⛑️": "helmet",
    "🚪": "door",
    "🏃‍♂️": "running",
    "🧤": "fire gloves",
    "🥾": "boots",
    "🕶️": "googles",
    "🪖": "face shield",
};

let currentEmoji = '';
let score = 0;
let totalQuestions = 10; // Set a total number of questions

function newEmoji() {
    const emojis = Object.keys(equipmentEmojis);
    currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('emoji').innerText = currentEmoji;
}

document.getElementById('submit').addEventListener('click', function() {
    const guess = document.getElementById('guess').value.toLowerCase();
    const result = document.getElementById('result');
    if (guess === equipmentEmojis[currentEmoji]) {
        score += (100 / totalQuestions); // Increment score proportionally to 100
        result.innerText = 'Correct! 🎉 Score: ' + Math.round(score);
        newEmoji();
    } else {
        result.innerText = 'Try again!';
    }
    document.getElementById('guess').value = '';
});

newEmoji();