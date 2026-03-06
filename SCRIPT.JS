const quotes = [
    "Believe in yourself.",
    "Stay positive and strong.",
    "Dream big and work hard.",
    "Small steps every day.",
    "You can do this!",
    "Progress, not perfection."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
