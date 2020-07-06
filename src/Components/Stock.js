import React from 'react';



class Stock extends React.Component {
    
    constructor(props){
        super(props);
        // created state that will contain array for x and y values
        // this information will help us plot the data 
        this.state = {
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
        let STOCK_TICKER = "AMZN"; // ticker symbol for stock we want

        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${STOCK_TICKER}&outputsize=compact&apikey=${API_KEY}`;
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
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValues,
                    });
                }
            )
    }

    
    render(){
    
        return(
            <div>
                <h1>Welcome to MarketPro</h1>
                
            </div>
        );
    } 
}


export default Stock;