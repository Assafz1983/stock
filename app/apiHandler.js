class ApiHandler {
    apiKey = '15ADBBKI8NZG69T5';
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';
    
    getStockQuote(symbol) {
        const fullUrl = `${this.url}&apikey=${this.apiKey}&symbol=${symbol}`;
        return fetch(fullUrl)
        .then(function(response) {
            return response.json();
        }).catch(function() {
            console.error("error");
        });;
    }
}