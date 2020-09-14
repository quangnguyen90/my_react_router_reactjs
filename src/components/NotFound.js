import React, { Component } from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <h3>
                404 - Not Found
            </h3>
        );
    }
}

NotFound.propTypes = {

};

export default NotFound;