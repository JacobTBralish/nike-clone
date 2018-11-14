import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

    // handleSort = (e) => {
    //    this.props.history.push()
    // }

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
                                    <li value='Lifestyle' onClick={()=> this.props.history.push('/mens lifestyle shoes')}>Lifestyle</li>
                                    <li value='Running' onClick={()=> this.props.history.push('/mens running shoes')}>Running</li>
                                    <li value='Basketball' onClick={()=> this.props.history.push('/mens basketball shoes')}>Basketball</li>
                                    <li value='Football' onClick={()=> this.props.history.push('/mens football shoes')}>Football</li>
                                    <li value='Soccer' onClick={()=> this.props.history.push('/mens soccer shoes')}>Soccer</li>
                                    <li value='Training & Gym' onClick={()=> this.props.history.push('/mens training & gym shoes')}>Training & Gym</li>
                                    <li value='Skateboarding' onClick={()=> this.props.history.push('/mens skateboarding shoes')}>Skateboarding</li>
                                    <li value='Baseball / Softball' onClick={()=> this.props.history.push('/mens baseball cleats')}>Baseball / Softball</li>
                                    <li value='Golf' onClick={()=> this.props.history.push('/mens golf shoes')}>Golf</li>
                                    <li value='Tennis' onClick={()=> this.props.history.push('/mens tennis shoes')}>Tennis</li>
                                    <li value='Track & Field' onClick={()=> this.props.history.push('/mens track & field')}>Track & Field</li>
                                    <li value='Lacrosse' onClick={()=> this.props.history.push('/mens lacrosse cleat')}>Lacrosse</li>
                                    <li value='Walking' onClick={()=> this.props.history.push('/all mens shoes')}>Walking</li>
                                    <li value='Outdoor' onClick={()=> this.props.history.push('/mens boots')}>Outdoor</li>
                                    <li value='Boxing' onClick={()=> this.props.history.push('/all ments shoes')}>Boxing</li>
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
                                        <li value='Tops' onClick={()=> this.props.history.push('/mens tops')}>Tops</li>
                                        <li value='Bottoms' onClick={()=> this.props.history.push('/mens bottoms')}>Bottoms</li>
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
                                        <li value='Graphic T-Shirt' onClick={()=> this.props.history.push('/mens graphic t-shirts')}>Graphic T-Shirt</li>
                                        <li value='Compression & Nike Pro' onClick={()=> this.props.history.push('/mens nike pro & compression')}>Compression & Nike Pro</li>
                                        <li value='Long Sleeve' onClick={()=> this.props.history.push('/mens long sleeve')}>Long Sleeve</li>
                                        <li value='Short Sleeve' onClick={()=> this.props.history.push('/mens short sleeve')}>Short Sleeve</li>
                                        <li value='Sleeveless & Tank Tops' onClick={()=> this.props.history.push('/mens sleeveless & tank tops')}>Sleeveless & Tank Tops</li>
                                        <li value='Polos' onClick={()=> this.props.history.push('/mens polos')}>Polos</li>
                                        <li value='Jerseys' onClick={()=> this.props.history.push('/mens jerseys')}>Jerseys</li>
                                        <li value='Button-downs & Flannels' onClick={()=> this.props.history.push('/mens button-downs & flannels')}>Button-downs & Flannels</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </>
                    :
                    <div className='categorySubContainer'>
                        <li className='categorieTitleClosed'>
                            <input type="radio" className='radioButtons'  onChange={this.handleOptionChange}  checked={selectedOption === '2'} id='radioTops & T-Shirts' value='2' />
                            <label for='radioTops & T-Shirts'>Tops & T-Shirts</label>
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
                                        <li value='Hoodies' onClick={()=> this.props.history.push('/mens graphic t-shirt')}>Graphic T-Shirt</li>
                                        <li value='Pullovers' onClick={()=> this.props.history.push('/mens nike pro & compression')}>Compression & Nike Pro</li>
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
                                        <li value='Bombers' onClick={()=> this.props.history.push('/mens bombers')}>Bombers</li>
                                        <li value='Other' onClick={()=> this.props.history.push('/mens other')}>Other</li>
                                        <li value='Parkas' onClick={()=> this.props.history.push('/mens parkas')}>Parkas</li>
                                        <li value='Puffers' onClick={()=> this.props.history.push('/mens puffers')}>Puffers</li>
                                        <li value='Vests' onClick={()=> this.props.history.push('/mens vests')}>Vests</li>
                                        <li value='Windbreakers' onClick={()=> this.props.history.push('/mens windbreakers')}>Windbreakers</li>
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
                                        <li value='Joggers & Sweatpants' onClick={()=> this.props.history.push('/mens joggers & sweatpants')}>Joggers & Sweatpants</li>
                                        <li value='Base Layers & Nike Pro' onClick={()=> this.props.history.push('/mens base layers & nike pro')}>Base Layers & Nike Pro</li>
                                        <li value='Pants' onClick={()=> this.props.history.push('/mens ')}>Pants</li>
                                        <li value='Tights & Leggings' onClick={()=> this.props.history.push('/mens tights & leggings')}>Tights & Leggings</li>
                                        <li value='Vests' onClick={()=> this.props.history.push('/mens vests')}>Vests</li>
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
                                            <li value='Tracksuit Tops' onClick={()=> this.props.history.push('/mens tracksuit tops')}>Tracksuit Tops</li>
                                            <li value='Tracksuit Bottoms' onClick={()=> this.props.history.push('/mens tracksuit bottoms')}>Tracksuit Bottoms</li>
                                            <li value='Tracksuit Sets' onClick={()=> this.props.history.push('/mens tracksuit sets')}>Tracksuit Sets</li>
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
                            <div value='Shorts' onClick={()=> this.props.history.push('/mens shorts')}>Shorts</div>
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
                                        <li value='Board Shorts' onClick={()=> this.props.history.push('/mens board shorts')}>Board Shorts</li>
                                        <li value='Booties and Gloves' onClick={()=> this.props.history.push('/mens booties & gloves')}>Booties & Gloves</li>
                                        <li value='Compression' onClick={()=> this.props.history.push('/mens compression')}>Compression</li>
                                        <li value='Rashgaurds & Surf Shirts' onClick={()=> this.props.history.push('/mens rashgaurds & surf shorts')}>Rashgaurds & Surf Shirts</li>
                                        <li value='Swimwear' onClick={()=> this.props.history.push('/mens swimwear')}>Swimwear</li>
                                        <li value='Wetsuits' onClick={()=> this.props.history.push('/mens wetsuit')}>Wetsuits</li>
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
                            <div value='Socks' onClick={()=> this.props.history.push('/socks')}>Socks</div>
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
                                        <li value='Bags & Backpacks' onClick={()=> this.props.history.push('/mens lifestyle accessories')}>Lifestyle</li>
                                        <li value='Balls' onClick={()=> this.props.history.push('/balls')}>Balls</li>
                                        <li value='Belts' onClick={()=> this.props.history.push('/mens belts')}>Belts</li>
                                        <li value='Gloves & Mitts' onClick={()=> this.props.history.push('/gloves & mitts')}>Gloves & Mitts</li>
                                        <li value='Hats, Visors & Headbands' onClick={()=> this.props.history.push('/hats')}>Hats, Visors & Headbands</li>
                                        <li value='Watches' onClick={()=> this.props.history.push('/watches')}>Watches</li>
                                        <li value='Other' onClick={()=> this.props.history.push('/other')}>Other</li>
                                        <li value='Scarves' onClick={()=> this.props.history.push('/scarves')}>Scarves</li>
                                        <li value='Shin Gaurds' onClick={()=> this.props.history.push('/shin gaurds')}>Shin Gaurds</li>
                                        <li value='Shoeslaves' onClick={()=> this.props.history.push('/tennis')}>Tennis</li>
                                        <li value='Sleeves & Arm Bands' onClick={()=> this.props.history.push('/sleeves & arm bands')}>Sleeves & Arm Bands</li>
                                        <li value='Sunglasses' onClick={()=> this.props.history.push('/sunglasses')}>Sunglasses</li>
                                        <li value='Swim Goggles & Caps' onClick={()=> this.props.history.push('/swim goggles & caps')}>Swim Goggles & Caps</li>
                                        <li value='Training and Gym' onClick={()=> this.props.history.push('/training & gym')}>Training and Gym</li>
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
 
export default withRouter(ProductSort);