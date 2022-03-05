const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Fetching Quotes from an API

let apiQuotes = [];

function newQuote() {
    //  Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    
    // Check if author feild is null, if it is replace it with "Unknown"
    if(!author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determin styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    }   else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        // console.log(response);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    }catch{
        // Handle error
    }
}

// On Load
getQuotes();