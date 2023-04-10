
import React from "react";

class AboutUs extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: ""
        }
    }

    ChangeText = () => {
        if (this.state.title == "text"){
            this.setState({
                title: ""
            })
        } else{
            this.setState({
                title: "text"
            })
        }

    }

    render() {
        return (
        <>
            <p>{this.state.title}</p> 
            <button onClick={this.ChangeText}>кнопку</button>
        </>
        )
    }
}

export default AboutUs;