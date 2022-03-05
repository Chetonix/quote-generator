const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    
}

// Fetching Quotes from an API

let apiQuotes = [];

function newQuote() {
    loading();
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
    // Set quote and hide the loader
    quoteText.textContent = quote.text;
    complete();
}

async function getQuotes() {
    loading();
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

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();


