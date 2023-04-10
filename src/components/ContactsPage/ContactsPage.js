
import React from "react";

class ContactsPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            works: [],
            one: true

        }
    }

    AddWork = () => {
        let newList = []
        if (this.state.one){
            newList = [...this.state.works, "Work1"]
        } else{
            newList = [...this.state.works, "Work2"]
        }
        
        const newOne = !this.state.one
            this.setState({
                works: newList,
                one: newOne
            })
    }

    render() {
        const workList = this.state.works.map((work, index) => {
        return<li key={index}>{work}</li>
    });
        return (
            <>
                <button onClick={this.AddWork}>get</button>
                <ul>
                    {workList}
                </ul>
            </>
        )
    }
}

export default ContactsPage;