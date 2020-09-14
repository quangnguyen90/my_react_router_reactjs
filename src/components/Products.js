import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        var products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone',
                price: 100000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung',
                price: 200000
            },
            {
                id: 3,
                slug: 'vsmart',
                name: 'VSmart',
                price: 300000
            }
        ];

        var {match} = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })

        var {location} = this.props;
        // Show information of location which is sent from Login Page
        console.log(location);

        return (
            <div>
                <h1>This is Products page</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path='/products/:name' component={Product} />
                </div>
            </div>
        );
    }
}

Products.propTypes = {

};

export default Products;