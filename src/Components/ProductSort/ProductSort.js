import React, { Component } from 'react';

import './ProductSort.scss'

class ProductSort extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '',
            toggleValue: false,
            selectedOption: '20',

         }
    }

    handleSort = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleToggle = () => {
        this.setState((prevState) =>{
            console.log('prevState: ', prevState);
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }
    
     handleOptionChange =  (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
    }


    // onClick={() => this.props.myRef.current.scrollIntoView({behavior: "smooth"})}

    render() { 
        let { selectedOption } = this.state;

        return ( 
            <div className='left-sort-nav'>
                <div className='left-sort-nav-header'>
                    <div className='left-sort-nav-title'>
                    MEN'S
                    </div>
                    <span className='left-sort-nav-header-line'>
                    </span>
                </div>

                <ul className='categoryParentContainer'>


                {
                    selectedOption === '0' 
                    ?
                    <>
                        <div className='categorySubContainer'>
                    <li className='categorieTitle'>
                            <div onClick={this.handleToggle}>Shoes</div> 
                    
                            <div id='hiddenList1' className='listContainer'>
                                <ul className='hiddenList'>
                                    <li value='Lifestyle' onClick={(e)=> this.handleSort(e.target.value)}>Lifestyle</li>
                                    <li value='Running' onClick={(e)=> this.handleSort(e.target.value)}>Running</li>
                                    <li value='Basketball' onClick={(e)=> this.handleSort(e.target.value)}>Basketball</li>
                                    <li value='Football' onClick={(e)=> this.handleSort(e.target.value)}>Football</li>
                                    <li value='Soccer' onClick={(e)=> this.handleSort(e.target.value)}>Soccer</li>
                                    <li value='Training & Gym' onClick={(e)=> this.handleSort(e.target.value)}>Training & Gym</li>
                                    <li value='' onClick={(e)=> this.handleSort(e.target.value)}>+ More</li>
                                    <li value='Skateboarding' onClick={(e)=> this.handleSort(e.target.value)}>Skateboarding</li>
                                    <li value='Baseball / Softball' onClick={(e)=> this.handleSort(e.target.value)}>Baseball / Softball</li>
                                    <li value='Golf' onClick={(e)=> this.handleSort(e.target.value)}>Golf</li>
                                    <li value='Tennis' onClick={(e)=> this.handleSort(e.target.value)}>Tennis</li>
                                    <li value='Track & Field' onClick={(e)=> this.handleSort(e.target.value)}>Track & Field</li>
                                    <li value='Lacrosse' onClick={(e)=> this.handleSort(e.target.value)}>Lacrosse</li>
                                    <li value='Walking' onClick={(e)=> this.handleSort(e.target.value)}>Walking</li>
                                    <li value='Outdoor' onClick={(e)=> this.handleSort(e.target.value)}>Outdoor</li>
                                    <li value='Boxing' onClick={(e)=> this.handleSort(e.target.value)}>Boxing</li>
                                </ul>
                            </div>
                        </li>
                    </div>
                        </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '0'} id='radioShoes' value='0' />
                            <label for='radioShoes'>Shoes</label>
                        </li>
                    </div>
                }

                {
                    selectedOption === '1'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div  onClick={this.handleToggle}>Compression & Nike Pro</div>
                                <div id='hiddenList2' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Tops' onClick={(e)=> this.handleSort(e.target.value)}>Tops</li>
                                        <li value='Bottoms' onClick={(e)=> this.handleSort(e.target.value)}>Bottoms</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '1'} id='radioCompression & Nike Pro' value='1' />
                            <label for='radioCompression & Nike Pro'>Compression & Nike Pro</label>
                         </li>   
                    </div>
                }

                {
                    selectedOption === '2'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Tops & T-Shirts</div>
                                <div id='hiddenList3' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Graphic T-Shirt' onClick={(e)=> this.handleSort(e.target.value)}>Graphic T-Shirt</li>
                                        <li value='Compression & Nike Pro' onClick={(e)=> this.handleSort(e.target.value)}>Compression & Nike Pro</li>
                                        <li value='Long Sleeve' onClick={(e)=> this.handleSort(e.target.value)}>Long Sleeve</li>
                                        <li value='Short Sleeve' onClick={(e)=> this.handleSort(e.target.value)}>Short Sleeve</li>
                                        <li value='Sleeveless & Tank Tops' onClick={(e)=> this.handleSort(e.target.value)}>Sleeveless & Tank Tops</li>
                                        <li value='Polos' onClick={(e)=> this.handleSort(e.target.value)}>Polos</li>
                                        <li value='Jerseys' onClick={(e)=> this.handleSort(e.target.value)}>Jerseys</li>
                                        <li value='Button-downs & Flannels' onClick={(e)=> this.handleSort(e.target.value)}>Button-downs & Flannels</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '2'} id='radioTops & T-Shirts' value='2' />
                            <label for='radioTops & T-Shirts'>Compression & Nike Pro</label>
                        </li>
                    </div>
                }

                 {
                    selectedOption === '3'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Hoodies & Pullovers</div>
                                <div id='hiddenList4' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Hoodies' onClick={(e)=> this.handleSort(e.target.value)}>Graphic T-Shirt</li>
                                        <li value='Pullovers' onClick={(e)=> this.handleSort(e.target.value)}>Compression & Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '3'} id='radioHoodies & Pullovers' value='3' />
                            <label for='radioHoodies & Pullovers'>Hoodies & Pullovers</label>
                        </li>
                    </div>
                }

                {
                    selectedOption === '4'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Jackets & Vests</div>
                                <div id='hiddenList5' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Bombers' onClick={(e)=> this.handleSort(e.target.value)}>Bombers</li>
                                        <li value='Other' onClick={(e)=> this.handleSort(e.target.value)}>Other</li>
                                        <li value='Parkas' onClick={(e)=> this.handleSort(e.target.value)}>Parkas</li>
                                        <li value='Puffers' onClick={(e)=> this.handleSort(e.target.value)}>Puffers</li>
                                        <li value='Vests' onClick={(e)=> this.handleSort(e.target.value)}>Vests</li>
                                        <li value='Windbreakers' onClick={(e)=> this.handleSort(e.target.value)}>Windbreakers</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '4'} id='radioJackets & Vests' value='4' />
                            <label for='radioJackets & Vests'>Jackets & Vests</label>
                        </li>
                    </div>
                }

                {
                    selectedOption === '5'
                    ?
                    <>
                        <div className='categorySubContainer'>
                           <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Pants & Tights</div>
                                <div id='hiddenList6' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Joggers & Sweatpants' onClick={(e)=> this.handleSort(e.target.value)}>Joggers & Sweatpants</li>
                                        <li value='Base Layers & Nike Pro' onClick={(e)=> this.handleSort(e.target.value)}>Base Layers & Nike Pro</li>
                                        <li value='Pants' onClick={(e)=> this.handleSort(e.target.value)}>Pants</li>
                                        <li value='Tights & Leggings' onClick={(e)=> this.handleSort(e.target.value)}>Tights & Leggings</li>
                                        <li value='Vests' onClick={(e)=> this.handleSort(e.target.value)}>Vests</li>
                                    </ul>
                            </div> 
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '5'} id='radioPants & Tights' value='5' />
                            <label for='radioPants & Tights'>Pants & Tights</label>
                        </li>
                    </div>
                }

                {
                    selectedOption === '6'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <div lassName='categorieTitle'>
                                    <div onClick={this.handleToggle}>Tracksuits</div>
                                    <div id='hiddenList7' className='listContainer'>
                                        <ul id='hiddenList'>
                                            <li value='Tracksuit Tops' onClick={(e)=> this.handleSort(e.target.value)}>Tracksuit Tops</li>
                                            <li value='Tracksuit Bottoms' onClick={(e)=> this.handleSort(e.target.value)}>Tracksuit Bottoms</li>
                                            <li value='Tracksuit Sets' onClick={(e)=> this.handleSort(e.target.value)}>Tracksuit Sets</li>
                                        </ul>
                                    </div>
                            </div>     
                        </div>  
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '6'} id='radioTracksuits' value='6' />
                            <label for='radioTracksuits'>Tracksuits</label>
                        </li>
                    </div>
                }

                    <div className='categorySubContainer'>
                        <li className='categorieTitle'>
                            <div value='Shorts' onClick={(e)=> this.handleSort(e.target.value)}>Shorts</div>
                        </li>
                    </div>

                {
                    selectedOption === '7'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Surf & Swimwear</div>
                                <div id='hiddenList8' className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Board Shorts' onClick={(e)=> this.handleSort(e.target.value)}>Board Shorts</li>
                                        <li value='Booties and Gloves' onClick={(e)=> this.handleSort(e.target.value)}>Booties & Gloves</li>
                                        <li value='Compression' onClick={(e)=> this.handleSort(e.target.value)}>Compression</li>
                                        <li value='Rashgaurds & Surf Shirts' onClick={(e)=> this.handleSort(e.target.value)}>Rashgaurds & Surf Shirts</li>
                                        <li value='Swimwear' onClick={(e)=> this.handleSort(e.target.value)}>Swimwear</li>
                                        <li value='Wetsuits' onClick={(e)=> this.handleSort(e.target.value)}>Wetsuits</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <div> 
                                <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '7'} id='radioSurf & Swimwear' value='7' />
                                <label for='radioSurf & Swimwear'>Surf & Swimwear</label>
                            </div>
                           
                        </li>
                    </div>
                }

                    <div className='categorySubContainer'>
                        <li className='categorieTitle'>
                            <div value='Socks' onClick={(e)=> this.handleSort(e.target.value)}>Socks</div>
                        </li>
                    </div>



                {
                    selectedOption === '8'
                    ?
                    <>
                        <div className='categorySubContainer'>
                            <li className='categorieTitle'>
                                <div onClick={this.handleToggle}>Accessories & Equipment</div>

                                <div className='listContainer'>
                                    <ul id='hiddenList'>
                                        <li value='Bags & Backpacks' onClick={(e)=> this.handleSort(e.target.value)}>Lifestyle</li>
                                        <li value='Balls' onClick={(e)=> this.handleSort(e.target.value)}>Balls</li>
                                        <li value='Belts' onClick={(e)=> this.handleSort(e.target.value)}>Belts</li>
                                        <li value='Gloves & Mitts' onClick={(e)=> this.handleSort(e.target.value)}>Gloves & Mitts</li>
                                        <li value='Hats, Visors & Headbands' onClick={(e)=> this.handleSort(e.target.value)}>Hats, Visors & Headbands</li>
                                        <li value='Watches' onClick={(e)=> this.handleSort(e.target.value)}>Watches</li>
                                        <li value='Other' onClick={(e)=> this.handleSort(e.target.value)}>Other</li>
                                        <li value='Scarves' onClick={(e)=> this.handleSort(e.target.value)}>Scarves</li>
                                        <li value='Shin Gaurds' onClick={(e)=> this.handleSort(e.target.value)}>Shin Gaurds</li>
                                        <li value='Shoeslaves' onClick={(e)=> this.handleSort(e.target.value)}>Tennis</li>
                                        <li value='Sleeves & Arm Bands' onClick={(e)=> this.handleSort(e.target.value)}>Sleeves & Arm Bands</li>
                                        <li value='Sunglasses' onClick={(e)=> this.handleSort(e.target.value)}>Sunglasses</li>
                                        <li value='Swim Goggles & Caps' onClick={(e)=> this.handleSort(e.target.value)}>Swim Goggles & Caps</li>
                                        <li value='Training and Gym' onClick={(e)=> this.handleSort(e.target.value)}>Training and Gym</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <div>
                                <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '8'} id='radioAccessories & Equipment' value='8' />
                                <label for='radioAccessories & Equipment'>Accessories & Equipment</label>
                            </div>
                        </li>
                    </div>
                }
                            
    </ul>

                <div>
                </div>

                <div>
                </div>

            </div>
         );
    }
}
 
export default ProductSort;