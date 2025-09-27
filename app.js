// ⚠️ WARNING: API key will be visible in GitHub Pages
const API_KEY = "d3bm7n1r01qqg7bv706gd3bm7n1r01qqg7bv7070"; 
const PASSWORD = "vse2k25"; // set your own password

// 9 stock symbols (can be changed)
let symbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NFLX", "NVDA", "META", "IBM"];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadStocks();
  } else {
    alert("Wrong password!");
  }
}

function loadStocks() {
  const container = document.getElementById("stocks");
  container.innerHTML = "";

  symbols.forEach(symbol => {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        let card = document.createElement("div");
        card.className = "stock-card";
        card.innerHTML = `
          <h3>${symbol}</h3>
          <p>Price: $${data.c}</p>
          <p>High: $${data.h}</p>
          <p>Low: $${data.l}</p>
        `;
        container.appendChild(card);
      });
  });
}

function changeBackground() {
  let color = document.getElementById("bgcolor").value;
  document.body.style.backgroundColor = color;
}
