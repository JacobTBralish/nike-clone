import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, selectedProduct } from '../../Redux/reducer';
import MensShoes from '../../Data/AllMensShoesPg1-6.json';
import ProductSort from '../ProductSort/ProductSort';

import './ProductContainer.scss';

class MensShoe extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            isLoading: null
        }
        // this.toTopRef = React.createRef();
    }
    
    
    // window.self.scrollX();
    componentDidMount() {
        this.props.getProducts(MensShoes);
        
        // console.log('toTopRef', this.toTopRef);
    }

    // resetWindow = () => {
    //     // toTopRef
    //     console.log('toTopRef: ', this.toTopRef);
        
    // }

    
    render() { 
        let { products, selectedProduct } = this.props;
        let mappedShoes = products.map((item, index) => {
            return <div className='productContainer'>
                <Link key={index} onClick={() => { selectedProduct([item])}} to={`/product/${item.title}`} >
                <div className='productImageContainer'>
                    <img id='productImage' src={item.spriteSheet} alt={item.title}></img>
                </div>
                <div className='gridwallItemInfo'>
                <div className='colorwayContainer'>
                    <p id='colorwayNumber'>{item.numberOfColors} Colors</p>
                </div>
                    <p id='productTitle'>{item.title}</p>
                    <p id='productType'>{item.subtitle}</p>
                    <p id='productPrice'>{item.localPrice}</p>
                </div>
                </Link>
            </div>
        })
        
        return ( 
            <>
                <div className='productPageContainer'>
                    <div ref={this.toTopRef}></div>
                    <div id='gridwall'>
                    <div className='bannerContainer'>
                        <div className='bannerTitleContainer'>
                            <h1 className='pageTitle'>MEN'S SHOES & SNEAKERS {/* <h1 id='productCount'> */}<span>({`${products.length}`})</span>{/* </h1> */}</h1>
                            <p className='bannerDescription'>Explore the latest shoes for men for every sport, workout and everyday look. Built for ultimate performance and sneaker style, Nike shoes for men deliver cutting-edge technologies specific to your sport in iconic designs.</p>
                        </div>
                        <div>
                            <select className='sortSelector'>
                                <option>SORT BY:</option>
                                <option>Newest</option>
                                <option>Highest Rated</option>
                                <option>Price $$-$</option>
                                <option>Price $-$$</option>
                            </select>
                            </div>
                    </div>
                        <div className='subGridwall'>
                            {mappedShoes}
                        </div>
                        <ProductSort myRef={this.toTopRef}/>
                    </div>
                </div>
            </>
         );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = {
    getProducts,
    selectedProduct
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MensShoe);