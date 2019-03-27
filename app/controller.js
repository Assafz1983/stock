class Controller {
    apiHanlder = new ApiHandler();
    graphHandler = new GraphHandler();
    domManipulator = new DomManipulator();
    
    constructor() {
        this.domManipulator.whenThresholdChange(this.thresholdSelected.bind(this));
        this.domManipulator.whenSymbolChange(this.symbolSelected.bind(this));
    }
    
    symbolSelected(symbol) {
        this.apiHanlder.getStockQuote(symbol).then((data) => {
            if (data['Error Message']) {
                this.domManipulator.presentErrorMessage(`Symbol '${symbol}' was not found`);
            } else {
                const dataPoints = this.buildDataPoints(data['Time Series (Daily)']);
                const threshold = this.domManipulator.getCurrentThreshold();
                this.graphHandler.createChart(dataPoints, threshold, `Daily stock close prices - ${symbol}`);    
            }
            
        });
    }
    
    thresholdSelected(val) {
        this.graphHandler.updateThreshold(val);
    }
    
    buildDataPoints(pointsHash) {
        const keys = Object.keys(pointsHash);
        const dataPoints = keys.map(key => {
            return {
                x: moment(key, "YYYY-MM-DD").toDate(),
                y: Number(pointsHash[key]['4. close'])
            }
        });
        return dataPoints.reverse().slice(20); // present just 20 last results
    }
}