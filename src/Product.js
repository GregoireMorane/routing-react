import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
				<p>Bonjour</p>
              {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default Product;