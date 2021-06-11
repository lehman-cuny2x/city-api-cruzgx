import {Component} from 'react'

class CitySearch extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit(){
        const initSite = 'http://ctp-zip-api.herokuapp.com/city/'
        let userInput = document.getElementById('userInput').value.toUpperCase()
        let link = initSite + "" + userInput

        alert(link)

        //call to the api
        let res = fetch(link);
        let data = res.json()



    }



    render(){
        return(
            <div>
                <h1>Enter the name of any city down below</h1>
                <label>City:</label>
                <input type="text" id="userInput"/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default CitySearch