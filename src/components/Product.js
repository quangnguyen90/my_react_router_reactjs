import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        var {match} = this.props;
        var name = match.params.name;
        return (
            <h3>
                This is Product Detail: {name}
            </h3>
        );
    }
}

Product.propTypes = {

};

export default Product;