
import React from "react";

class PortfolioPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    Clear = () => {
        this.setState({
            value: ""
        })
    }

    Log = () => {
        console.log(this.state.value)
        this.Clear()
    }

    InputChange = (event) =>{
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.InputChange} value={this.state.value}/>
                <button onClick={this.Log}>add</button>
                <button onClick={this.Clear}>clear</button>
            </>
        )
    }
}

export default PortfolioPage;