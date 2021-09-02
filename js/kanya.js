
//https://api.kanye.rest/ থেকে কোট নিয়ে দেখানো হয়েছে। 

const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;// এখানে কোট একটা অবজেক্ট আর এই অবজেক্টের ভিতরের প্রোপার্টিতে আবার কোট রয়েছে যাতে লেখা রয়েছে। তাই quote.quote দিতে হয়েছে।
}
