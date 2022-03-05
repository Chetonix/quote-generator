// Fetching Quotes from an API

let apiQuotes = [];

function newQuote() {
    //  Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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