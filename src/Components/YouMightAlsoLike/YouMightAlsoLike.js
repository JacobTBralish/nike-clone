import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedProduct } from '../../Redux/reducer';

class YouMightAlsoLike extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            randomItems: []
         }
    }
    componentDidMount() {
        let { randomItems } = this.state;
        let { products } = this.props;
        // console.log('products: ', products);
        
            var tmp = products.slice(products);
            for (var i = 0; i < 4; i++) {
              var index = Math.floor(Math.random() * tmp.length);
              var removed = tmp.splice(index, 1);
            //   console.log('removed: ', removed);
              randomItems.push(removed[0]);
            }
            this.setState({
                randomItems
            })
    }
    render() { 
        let { randomItems } = this.state;
        // console.log('randomItems: ', randomItems);
        // console.log('here it is', this.props.products);

        

        let mappedItems = randomItems.length === 0 && randomItems.map((item, i) => {
            return <div className='youMightLikeContainer' key={i}>
                <Link key={i} onClick={() => { selectedProduct([item])}} to={`/product/${encodeURIComponent(item.title)}`} >
                <div className='youMightLikeImageContainer'>
                    <img id='youMightLikeImage' src={item.spriteSheet} alt={item.title}></img>
                </div>
                <div className='youMightLikeItemInfo'>
                <div className='youMightLikeColorwayContainer'>
                    <p id='youMightLikeColorwayNumber'>{item.numberOfColors} Colors</p>
                </div>
                    <p id='youMightLikeProductTitle'>{item.title}</p>
                    <p id='youMightLikeProductType'>{item.subtitle}</p>
                    <p id='youMightLikeProductPrice'>{item.localPrice}</p>
                </div>
                </Link>
            </div>
        }) 
    
        return ( 
            <div>
                <div className='youMightLikeTitleLineContainer'>
                    <div className='youMightLikeTitleLine'></div>
                
                </div>
                    <div className='youMightLikeTitleContainer'>
                    <div className='youMightLikeTitleSubContainer'>
                        <h1 className='youMightLikeTitle'>YOU MIGHT ALSO LIKE</h1>
                    </div>
                </div>
                    <div className='youMightLikeGridWallContainer'>
                        {mappedItems}
                    </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
return {
    products: state.products
}
}

const mapDispatchToProps =  {
    selectedProduct
}
 
export default connect(mapStateToProps, mapDispatchToProps)(YouMightAlsoLike);