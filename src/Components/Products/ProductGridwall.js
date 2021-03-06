import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, selectedProduct } from '../../Redux/reducer';
import ProductSort from '../ProductSort/ProductSort';

import './ProductContainer.scss';
// import YouMightAlsoLike from '../YouMightAlsoLike/YouMightAlsoLike';

class MensShoe extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            isLoading: null,
            // mensShoes: JSON.parse(localStorage.getItem("mensShoes")) || [],
            // randomItems: null
        }
    }
    
    
    async componentDidMount() {
        // this.setState({isLoading: true})
        // TODO: "name" removed from this.props 
        let { fetch } = this.props;
        let fetched = await fetch();
        // try {
        //     let fetched = fetch();
        //     this.setState({ product:fetched  }, localStorage.setItem(""));
        // }
        // let { randomItems } = this.state;
        // console.log('this.props: ', this.props);
        this.props.getProducts(fetched)
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    getDerivedStateFromProps(nextProps) {
        let {fetch} = nextProps;
        let fetched = fetch();
        this.props.getProducts(fetched);
    }

    componentWillReceiveProps(nextProps) {
        // TODO: "name" removed from this.props 
        // console.log('nextProps: ', nextProps);
        const { fetch } = nextProps;
        this.props.getProducts(fetch)
    }

    handleFilter = (arr, value) => {
        if (value){
        let array = [];
        arr.filter((e, i) => {
          if (e.subtitle === value){
            array.push(arr[i])
          }
        })
        return array
       } else {
        return arr
    }
}

    // noDataMessage = () => {
    //     alert('Sorry! We do not have any data for this categorie, try another category!')
    // }
    
    render() { 
        let { products, selectedProduct, name } = this.props;
        // console.log('name: ', name);

        let filteredArray = this.handleFilter(products, (name || null))
        // console.log('filteredArray: ', filteredArray);

        let mappedShoes = filteredArray.map((item, index) => {
            return <div key={index} className='productContainer'>
                <Link key={index} onClick={() => { selectedProduct([item])}} to={`/product/${encodeURIComponent(item.title)}`} >
                <div className='productImageContainer'>
                    <img id='productImage' src={item.spriteSheet} alt={item.title} />
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
                            <h1 className='pageTitle'>{this.props.fetch[0].pageHeaderTitle} {/* <h1 id='productCount'> */}({`${mappedShoes.length}`}){/* </h1> */}</h1>
                            <p className='bannerDescription'>{this.props.fetch[0].pageHeader}</p>
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