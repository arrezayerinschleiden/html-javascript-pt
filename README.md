<!DOCTYPE html>
<html>
<head>
    <title>Random Quote Generator</title>
    <style>
        body {
            text-align: center;
            font-family: Arial;
            margin-top: 100px;
        }
        #quote {
            font-size: 20px;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h2>Random Quote Generator</h2>
    <p id="quote">Click the button to get a quote!</p>
    <button onclick="generateQuote()">New Quote</button>

    <script>
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
    </script>

</body>
</html>
