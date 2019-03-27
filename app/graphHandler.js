class GraphHandler {
    chart;
    basicSettings = {
        animationEnabled: true,
        title:{
            text: ""
        },
        axisX:{
            valueFormatString: "MM/DD/YY"
        },
        axisY: {
            title: "Close price",
            includeZero: true
            
        },
        data: [{
            type: "line",
            xValueFormatString: "MM/DD/YY",
            color: "#000000",
            markerSize: 0,
            toolTipContent: null,  
            markerType: 'none',
            dataPoints: []
        },{
            type: "line",
            xValueFormatString: "MM/DD/YY",
            color: "#F08080",
            dataPoints: []
        }]
    }
    
    
    constructor() {

    }



    createChart(dataPoints, thresholdValue, titleText) {
        const settings = {...this.basicSettings};
        settings.title.text = titleText;
        settings.data[0].dataPoints = [{
            x: dataPoints[0].x, y: thresholdValue
        }, {
            x: dataPoints[dataPoints.length - 1].x, y: thresholdValue
        }];
        settings.data[1].dataPoints = dataPoints;
        this.chart = new CanvasJS.Chart("chartContainer", settings);
        this.renderChart();
    }

    renderChart() {
        this.chart.render();
    }


    updateThreshold(newValue) {
        this.chart.data[0].dataPoints[0].y = newValue;
        this.chart.data[0].dataPoints[1].y = newValue;
        this.renderChart();
    }
}