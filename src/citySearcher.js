import {Component} from 'react'
import ZipViewer from './zipViewer'

class CitySearch extends Component{
    constructor(props){
        super(props)

        this.state = { 
            myCurrInfo : []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(){
        const initSite = 'http://ctp-zip-api.herokuapp.com/city/'
        let userInput = document.getElementById('userInput').value.toUpperCase()
        let link = initSite + "" + userInput

        //alert(link)

        //call to the api
        let res = await fetch(link);
        let data = await res.json()

        //console.log(data)

        //let myArr = data.map((myArr) );
        //console.log(Array.isArray(myArr))

        let searchResults = data.map((data) => {return <ZipViewer myZip={data} />})

        console.log(searchResults)
        //console.log(myArr)

        //return searchResults;
        this.setState({myCurrInfo: searchResults});

    }



    render(){
        return(
            <div>
                <h1>Enter the name of any city down below</h1>
                <label>City:</label>
                <input type="text" id="userInput"/>
                <button onClick={this.handleSubmit}>Submit</button>
                {this.state.myCurrInfo}
            </div>
        )
    }
}

export default CitySearch