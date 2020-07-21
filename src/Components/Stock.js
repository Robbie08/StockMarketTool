import React from 'react';


// Bootstrap component imports 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Stock extends React.Component {
    
    constructor(props){
        super(props);
        // created state that will contain array for x and y values
        // this information will help us plot the data 
        this.state = {
            stockTicker: "TSLA",
            stockChartXValues: [],
            stockChartYValues: [],
        }        
    }

    // when component has mounted
    componentDidMount(){
        this.fetchStock();
    }


    // This function is in charge of fetching the stock information
    fetchStock(){
        const pointerToThis = this; // gain access to our states
        const API_KEY = "E1HW7W3FEC4GRLRD"; // our API KEY for the AlphaVantage.co
        let STOCK_TICKER = "TSLA"; // ticker symbol for stock we want

        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockTicker}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];


        // will fetch the data from the address we are pinging above and then print in the console
        fetch(API_CALL)
            .then(
                function(response){
                    return response.json(); // return as json
                }
            )
            .then(
                function(data){
                    console.log(data);
                    for(let key in data['Time Series (Daily)']){
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. Open']);
                    }

                    //console.log(stockChartXValuesFunction);

                    // now let's change the state of the x and y values
                    
                }
            )
    }

    
    render(){
    
        return(
            <div>
                <h1>Welcome to MarketPro</h1>
                <Row className="main-border">
                    <Col className="stock-info">
                        <h2>{this.state.stockTicker}</h2>
                        <h3>$00.00</h3>
                        <h5>Open : $00.00</h5>
                        <h5>Close: $00.00</h5>
                        <h5>24-hour High: $00.00</h5>
                        <h5>24-hour Low : $00.00</h5>
                    </Col>
                    <Col>Time Series Graph</Col>
                </Row>
            </div>
        );
    } 
}


export default Stock;