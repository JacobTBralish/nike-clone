import React, { Component } from 'react';

class ProductSort extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: ''
         }
    }

    handleSort = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    
    render() { 
        return ( 
            <div className='left-sort-nav'>
                <div className='left-sort-nav-header'>
                    <div className='left-sort-nav-title'>
                    </div>
                    <span className='left-sort-nav-header-line'>
                    </span>
                </div>

                <div className='categoryParentContainer'>
                    <div className='categorySubContainer'>
                        Shoes
                        <div className='listContainer'>
                            <ul className='list'>
                                <li value='Lifestyle' onClick={()=> this.handleSort(e.target.value)}>Lifestyle</li>
                                <li value='Running' onClick={()=> this.handleSort(e.target.value)}>Running</li>
                                <li value='Basketball' onClick={()=> this.handleSort(e.target.value)}>Basketball</li>
                                <li value='Football' onClick={()=> this.handleSort(e.target.value)}>Football</li>
                                <li value='Soccer' onClick={()=> this.handleSort(e.target.value)}>Soccer</li>
                                <li value='Training & Gym' onClick={()=> this.handleSort(e.target.value)}>Training & Gym</li>
                                <li value='' onClick={()=> this.handleSort(e.target.value)}>+ More</li>
                                <li value='Skateboarding' onClick={()=> this.handleSort(e.target.value)}>Skateboarding</li>
                                <li value='Baseball / Softball' onClick={()=> this.handleSort(e.target.value)}>Baseball / Softball</li>
                                <li value='Golf' onClick={()=> this.handleSort(e.target.value)}>Golf</li>
                                <li value='Tennis' onClick={()=> this.handleSort(e.target.value)}>Tennis</li>
                                <li value='Track & Field' onClick={()=> this.handleSort(e.target.value)}>Track & Field</li>
                                <li value='Lacrosse' onClick={()=> this.handleSort(e.target.value)}>Lacrosse</li>
                                <li value='Walking' onClick={()=> this.handleSort(e.target.value)}>Walking</li>
                                <li value='Outdoor' onClick={()=> this.handleSort(e.target.value)}>Outdoor</li>
                                <li value='Boxing' onClick={()=> this.handleSort(e.target.value)}>Boxing</li>
                            </ul>
                        </div>
                    </div>
                        <div>
                            Compression & Nike Pro
                            <div>
                                <ul>
                                    <li value='Tops' onClick={()=> this.handleSort(e.target.value)}>Tops</li>
                                    <li value='Bottoms' onClick={()=> this.handleSort(e.target.value)}>Bottoms</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            Tops & T-Shirts
                            <div>
                                <ul>
                                    <li value='Graphic T-Shirt' onClick={()=> this.handleSort(e.target.value)}>Graphic T-Shirt</li>
                                    <li value='Compression & Nike Pro' onClick={()=> this.handleSort(e.target.value)}>Compression & Nike Pro</li>
                                    <li value='Long Sleeve' onClick={()=> this.handleSort(e.target.value)}>Long Sleeve</li>
                                    <li value='Short Sleeve' onClick={()=> this.handleSort(e.target.value)}>Short Sleeve</li>
                                    <li value='Sleeveless & Tank Tops' onClick={()=> this.handleSort(e.target.value)}>Sleeveless & Tank Tops</li>
                                    <li value='Polos' onClick={()=> this.handleSort(e.target.value)}>Polos</li>
                                    <li value='Jerseys' onClick={()=> this.handleSort(e.target.value)}>Jerseys</li>
                                    <li value='Button-downs & Flannels' onClick={()=> this.handleSort(e.target.value)}>Button-downs & Flannels</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            Hoodies & Pullovers
                            <div>
                                <ul>
                                    <li value='Hoodies' onClick={()=> this.handleSort(e.target.value)}>Graphic T-Shirt</li>
                                    <li value='Pullovers' onClick={()=> this.handleSort(e.target.value)}>Compression & Nike Pro</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            Jackets & Vests
                            <div>
                                <ul>
                                    <li value='Bombers' onClick={()=> this.handleSort(e.target.value)}>Bombers</li>
                                    <li value='Other' onClick={()=> this.handleSort(e.target.value)}>Other</li>
                                    <li value='Parkas' onClick={()=> this.handleSort(e.target.value)}>Parkas</li>
                                    <li value='Puffers' onClick={()=> this.handleSort(e.target.value)}>Puffers</li>
                                    <li value='Vests' onClick={()=> this.handleSort(e.target.value)}>Vests</li>
                                    <li value='Windbreakers' onClick={()=> this.handleSort(e.target.value)}>Windbreakers</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            Pants & Tights
                            <div>
                                <ul>
                                    <li value='Joggers & Sweatpants' onClick={()=> this.handleSort(e.target.value)}>Joggers & Sweatpants</li>
                                    <li value='Base Layers & Nike Pro' onClick={()=> this.handleSort(e.target.value)}>Base Layers & Nike Pro</li>
                                    <li value='Pants' onClick={()=> this.handleSort(e.target.value)}>Pants</li>
                                    <li value='Tights & Leggings' onClick={()=> this.handleSort(e.target.value)}>Tights & Leggings</li>
                                    <li value='Vests' onClick={()=> this.handleSort(e.target.value)}>Vests</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            Tracksuits
                            <div>
                                <ul>
                                    <li value='Tracksuit Tops' onClick={()=> this.handleSort(e.target.value)}>Tracksuit Tops</li>
                                    <li value='Tracksuit Bottoms' onClick={()=> this.handleSort(e.target.value)}>Tracksuit Bottoms</li>
                                    <li value='Tracksuit Sets' onClick={()=> this.handleSort(e.target.value)}>Tracksuit Sets</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div value='Shorts' onClick={()=> this.handleSort(e.target.value)}>Shorts</div>
                        </div>
                        <div>
                            Surf & Swimwear
                            <div>
                                <ul>
                                    <li value='Board Shorts' onClick={()=> this.handleSort(e.target.value)}>Board Shorts</li>
                                    <li value='Booties and Gloves' onClick={()=> this.handleSort(e.target.value)}>Booties & Gloves</li>
                                    <li value='Compression' onClick={()=> this.handleSort(e.target.value)}>Compression</li>
                                    <li value='Rashgaurds & Surf Shirts' onClick={()=> this.handleSort(e.target.value)}>Rashgaurds & Surf Shirts</li>
                                    <li value='Swimwear' onClick={()=> this.handleSort(e.target.value)}>Swimwear</li>
                                    <li value='Wetsuits' onClick={()=> this.handleSort(e.target.value)}>Wetsuits</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div value='Socks' onClick={()=> this.handleSort(e.target.value)}>Socks</div>
                        </div>
                        <div className='categoryParentContainer'>
                            Accessories & Equipment
                            <div className='listContainer'>
                                <ul className='list'>
                                    <li value='Bags & Backpacks' onClick={()=> this.handleSort(e.target.value)}>Lifestyle</li>
                                    <li value='Balls' onClick={()=> this.handleSort(e.target.value)}>Balls</li>
                                    <li value='Belts' onClick={()=> this.handleSort(e.target.value)}>Belts</li>
                                    <li value='Gloves & Mitts' onClick={()=> this.handleSort(e.target.value)}>Gloves & Mitts</li>
                                    <li value='Hats, Visors & Headbands' onClick={()=> this.handleSort(e.target.value)}>Hats, Visors & Headbands</li>
                                    <li value='Watches' onClick={()=> this.handleSort(e.target.value)}>Watches</li>
                                    <li value='Other' onClick={()=> this.handleSort(e.target.value)}>Other</li>
                                    <li value='Scarves' onClick={()=> this.handleSort(e.target.value)}>Scarves</li>
                                    <li value='Shin Gaurds' onClick={()=> this.handleSort(e.target.value)}>Shin Gaurds</li>
                                    <li value='Shoeslaves' onClick={()=> this.handleSort(e.target.value)}>Tennis</li>
                                    <li value='Sleeves & Arm Bands' onClick={()=> this.handleSort(e.target.value)}>Sleeves & Arm Bands</li>
                                    <li value='Sunglasses' onClick={()=> this.handleSort(e.target.value)}>Sunglasses</li>
                                    <li value='Swim Goggles & Caps' onClick={()=> this.handleSort(e.target.value)}>Swim Goggles & Caps</li>
                                    <li value='Training and Gym' onClick={()=> this.handleSort(e.target.value)}>Training and Gym</li>
                                </ul>
                            </div>
                    </div>
                </div>

                <div>
                </div>

                <div>
                </div>

            </div>
         );
    }
}
 
export default ProductSort;