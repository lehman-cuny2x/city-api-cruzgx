import {Component} from 'react'

class ZipViewer extends Component{
    constructor(props){

        super(props)

        this.state = {
        myZip: props.myZip
        }
    }


    render(){
        return(
            <div>
                <p>Matched with zip:{this.state.myZip}</p>
            </div>
        );
    }
}

export default ZipViewer