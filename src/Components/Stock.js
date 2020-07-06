import React from 'react';
import Button from 'react-bootstrap/Button';


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


    componentDidMount(){
        this.fetchStock();
    }


    fetchStock(){
        const API_KEY = "E1HW7W3FEC4GRLRD"; // our API KEY for the AlphaVantage.co
        let STOCK_TICKER = "SFTBY"; // ticker symbol for stock we want
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${STOCK_TICKER}&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_CALL)
            .then(
                function(response){
                    return response.json(); // return as json
                }
            )
            .then(
                function(data){
                    console.log(data);
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