import React, { Component } from "react";
import { Prompt } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked : false
        };

    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }

    render() {
        var {isChecked} = this.state;
        return (
            <div>
                This is Contact page
                <br/>
                <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Allow</button>
                <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>Not Allow</button>
                <Prompt
                    when={isChecked}
                    message={location => (`Are you sure you want to go to page: ${location.pathname}`)}
                />
            </div>
        );
    }
}

Contact.propTypes = {

};

export default Contact;