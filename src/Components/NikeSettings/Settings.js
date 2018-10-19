import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            biography:'',
            first:'',
            last:'',
            height:6.1,
            weight: 180,
            day:'',
            month:'',
            year:'',
            email:'',
            mobile:'',
            

        }
    }
    render() {
        return (
            <div> {/* Wrapper */}
                <div> {/* (just padding top) */}
                    <div> {/* Content */}
                        <div> {/* Sidebar */}
                            <h2>SETTINGS</h2>
                            <ul>
                                <li><div>ACCOUNT</div></li> 
                                <li><div>PRIVACY</div></li> 
                                <li><div>ADDRESSES</div></li>
                                <li><div>PAYMENT OPTIONS</div></li> {/* opt */}
                                <li><div>SHARING</div></li> {/* opt */}
                                <li><div>NOTIFICATIONS</div></li> {/* opt */}
                                <li><div>CONNECTED APPS</div></li> {/* opt */}
                            </ul>
                        </div>
                        <div> {/* Profile content */}
                            <div>
                                <h2>Account Settings</h2>
                                <form>
                                    <div> {/* PIC, ABOUT, EDIT WRAPPER */}
                                        <div> {/* pic Div */}
                                            <div></div> {/* or img here */}    
                                        </div>
                                        <div> {/* BIO SECTION */}
                                            <label htmlFor="profile-bio-field">About Me</label>
                                            <textarea id="profile-bio-field" name="bio" maxLength='150' rows='6' cols='25'></textarea>
                                            <span>0/150</span>
                                        </div> 
                                        <div> {/* photo edit button */}
                                            <div>
                                                <button>Edit</button> 
                                            </div>
                                        </div>
                                    </div>
                                    <div> {/* first last name container */}
                                        <div> {/* FIRST */}
                                            <label htmlFor="first-name">First Name<span>*</span></label>
                                            <input id="first-name" name="firstName" maxLength="40" type="text" required></input>
                                        </div>
                                        <div> {/* LAST */}
                                            <label htmlFor="last-name">Last Name<span>*</span></label>
                                            <input id="last-name" name="lastName" maxLength="40" type="text" required></input>
                                        </div>
                                    </div>
                                    <div> {/* EMAIL */} 
                                        <div> 
                                            <label htmlFor="email">Email<span>*</span></label>
                                            <input id="email" name="email" maxLength="50" type="text" required></input>
                                        </div>
                                    </div>
                                    <div> {/* MOBILE */}
                                        <label htmlFor="mobile">Mobile<span>*</span></label>
                                        <input id="mobile" name="mobile"></input>
                                    </div>
                                    <div></div> {/* divider bottom */} 
                                    <div></div> {/* divider top */} 
                                    
                                    <div> {/* ATTRIBUTES */}
                                        <div>
                                            <h3>ATTRIBUTES</h3>
                                            <div> {/* TOOLTIP CONTAINER */}
                                            <span>?</span> {/* icon */} 
                                            <div>Your selections will be used to calculate fitness metrics and help filter products</div>
                                            </div>
                                        </div>
                                    <div> {/* DATE OF BIRTH */}
                                        <label htmlFor="">Date of Birth<span>*</span></label>
                                        <div> {/* month, day, year selects */} 
                                            <div> {/* month wrapper */}
                                                <select name="month"> {/* month */}
                                                <option value>MM</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            </div>
                                            <div>{/* day wrapper */}
                                                <select name="day"> {/* day */}
                                                <option value>DD</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                            </div>
                                            <div> {/* year wrapper */}
                                                <select name="year"> {/* year */}
                                                <option value>YYYY</option>
                                                <option value='2018'>2018</option>
                                                <option value='2017'>2017</option>
                                                <option value='2016'>2016</option>
                                                <option value='2015'>2015</option>
                                                <option value='2014'>2014</option>
                                                <option value='2013'>2013</option>
                                                <option value='2012'>2012</option>
                                                <option value='2011'>2011</option>
                                                <option value='2010'>2010</option>
                                                <option value='2009'>2009</option>
                                                <option value='2008'>2008</option>
                                                <option value='2007'>2007</option>
                                                <option value='2006'>2006</option>
                                                <option value='2005'>2005</option>
                                                <option value='2004'>2004</option>
                                                <option value='2003'>2003</option>
                                                <option value='2002'>2002</option>
                                                <option value='2001'>2001</option>
                                                <option value='2000'>2000</option>
                                                <option value='1999'>1999</option>
                                                <option value='1998'>1998</option>
                                                <option value='1997'>1997</option>
                                                <option value='1996'>1996</option>
                                                <option value='1995'>1995</option>
                                                <option value='1994'>1994</option>
                                                <option value='1993'>1993</option>
                                                <option value='1992'>1992</option>
                                                <option value='1991'>1991</option>
                                                <option value='1990'>1990</option>
                                                <option value='1989'>1989</option>
                                                <option value='1988'>1988</option>
                                                <option value='1987'>1987</option>
                                                <option value='1986'>1986</option>
                                                <option value='1985'>1985</option>
                                                <option value='1984'>1984</option>
                                                <option value='1983'>1983</option>
                                                <option value='1982'>1982</option>
                                                <option value='1981'>1981</option>
                                                <option value='1980'>1980</option>
                                                <option value='1979'>1979</option>
                                                <option value='1978'>1978</option>
                                                <option value='1977'>1977</option>
                                                <option value='1976'>1976</option>
                                                <option value='1975'>1975</option>
                                                <option value='1974'>1974</option>
                                                <option value='1973'>1973</option>
                                                <option value='1972'>1972</option>
                                                <option value='1971'>1971</option>
                                                <option value='1970'>1970</option>
                                                <option value='1969'>1969</option>
                                                <option value='1968'>1968</option>
                                                <option value='1967'>1967</option>
                                                <option value='1966'>1966</option>
                                                <option value='1965'>1965</option>
                                                <option value='1964'>1964</option>
                                                <option value='1963'>1963</option>
                                                <option value='1962'>1962</option>
                                                <option value='1961'>1961</option>
                                                <option value='1960'>1960</option>
                                                <option value='1959'>1959</option>
                                                <option value='1958'>1958</option>
                                                <option value='1957'>1957</option>
                                                <option value='1956'>1956</option>
                                                <option value='1955'>1955</option>
                                                <option value='1954'>1954</option>
                                                <option value='1953'>1953</option>
                                                <option value='1952'>1952</option>
                                                <option value='1951'>1951</option>
                                                <option value='1950'>1950</option>
                                                <option value='1949'>1949</option>
                                                <option value='1948'>1948</option>
                                                <option value='1947'>1947</option>
                                                <option value='1946'>1946</option>
                                                <option value='1945'>1945</option>
                                                <option value='1944'>1944</option>
                                                <option value='1943'>1943</option>
                                                <option value='1942'>1942</option>
                                                <option value='1941'>1941</option>
                                                <option value='1940'>1940</option>
                                                <option value='1939'>1939</option>
                                                <option value='1938'>1938</option>
                                                <option value='1937'>1937</option>
                                                <option value='1936'>1936</option>
                                                <option value='1935'>1935</option>
                                                <option value='1934'>1934</option>
                                                <option value='1933'>1933</option>
                                                <option value='1932'>1932</option>
                                                <option value='1931'>1931</option>
                                                <option value='1930'>1930</option>
                                                <option value='1929'>1929</option>
                                                <option value='1928'>1928</option>
                                                <option value='1927'>1927</option>
                                                <option value='1926'>1926</option>
                                                <option value='1925'>1925</option>
                                                <option value='1924'>1924</option>
                                                <option value='1923'>1923</option>
                                                <option value='1922'>1922</option>
                                                <option value='1921'>1921</option>
                                                <option value='1920'>1920</option>
                                                <option value='1919'>1919</option>
                                                <option value='1918'>1918</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div> {/* GENDER */}
                                        <label>Gender</label>
                                        <div>
                                            <input type='radio' value='2' id='gender-male'></input>
                                            <label htmlFor='gender-male'>Male</label>
                                        </div>
                                        <div>
                                            <input type='radio' value='1' id='gender-female'></input>
                                            <label htmlFor='gender-female'>Female</label>
                                        </div>
                                    </div>
                                    <div> {/* HEALTH (HEIGHT) & WEIGHT */}
                                        <div> {/* Upper div */}
                                            <div> {/* radios */}
                                                <label>Height<span>*</span></label>
                                                <div>
                                                    <select name="height" id='feetInch'>
                                                    <option>FT/IN</option>
                                                    <option value='3.0'>3'0"</option>
                                                    <option value='3.1'>3'1"</option>
                                                    <option value='3.2'>3'2"</option>
                                                    <option value='3.3'>3'3"</option>
                                                    <option value='3.4'>3'4"</option>
                                                    <option value='3.5'>3'5"</option>
                                                    <option value='3.6'>3'6"</option>
                                                    <option value='3.7'>3'7"</option>
                                                    <option value='3.8'>3'8"</option>
                                                    <option value='3.9'>3'9"</option>
                                                    <option value='3.10'>3'10"</option>
                                                    <option value='3.11'>3'11"</option>
                                                    <option value='4.0'>4'0"</option>
                                                    <option value='4.1'>4'1"</option>
                                                    <option value='4.2'>4'2"</option>
                                                    <option value='4.3'>4'3"</option>
                                                    <option value='4.4'>4'4"</option>
                                                    <option value='4.5'>4'5"</option>
                                                    <option value='4.6'>4'6"</option>
                                                    <option value='4.7'>4'7"</option>
                                                    <option value='4.8'>4'8"</option>
                                                    <option value='4.9'>4'9"</option>
                                                    <option value='4.10'>4'10"</option>
                                                    <option value='4.11'>4'11"</option>
                                                    <option value='5.0'>5'0"</option>
                                                    <option value='5.1'>5'1"</option>
                                                    <option value='5.2'>5'2"</option>
                                                    <option value='5.3'>5'3"</option>
                                                    <option value='5.4'>5'4"</option>
                                                    <option value='5.5'>5'5"</option>
                                                    <option value='5.6'>5'6"</option>
                                                    <option value='5.7'>5'7"</option>
                                                    <option value='5.8'>5'8"</option>
                                                    <option value='5.9'>5'9"</option>
                                                    <option value='5.10'>5'10"</option>
                                                    <option value='5.11'>5'11"</option>
                                                    <option value='6.0'>6'0"</option>
                                                    <option value='6.1'>6'1"</option>
                                                    <option value='6.2'>6'2"</option>
                                                    <option value='6.3'>6'3"</option>
                                                    <option value='6.4'>6'4"</option>
                                                    <option value='6.5'>6'5"</option>
                                                    <option value='6.6'>6'6"</option>
                                                    <option value='6.7'>6'7"</option>
                                                    <option value='6.8'>6'8"</option>
                                                    <option value='6.9'>6'9"</option>
                                                    <option value='6.10'>6'10"</option>
                                                    <option value='6.11'>6'11"</option>
                                                    <option value='7.0'>7'0"</option>
                                                    <option value='7.1'>7'1"</option>
                                                    <option value='7.2'>7'2"</option>
                                                    <option value='7.3'>7'3"</option>
                                                    <option value='7.4'>7'4"</option>
                                                    <option value='7.5'>7'5"</option>
                                                    <option value='7.6'>7'6"</option>
                                                    <option value='7.7'>7'7"</option>
                                                    <option value='7.8'>7'8"</option>
                                                    <option value='7.9'>7'9"</option>
                                                    <option value='7.10'>7'10"</option>
                                                    <option value='7.11'>7'11"</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div> {/* radios */}
                                                <label>Weight<span>*</span></label>
                                                <div>
                                                    <select name="weight" id="pounds">
                                                    </select>
                                                    <input name='default' id='default' type='checkbox'></input>
                                                    <label htmlFor='default'></label>
                                                    <p>We use height and weight information to provide more accurate results in Nike experiences, such as run distance and pace, calories and to help personalize coaching plans. If you don’t wish to enter your height and weight, select the “use default height and weight” option and we will use a default value to perform these calculations. <Link to="http://agreementservice.svs.nike.com/rest/agreement?agreementType=datalearnmore&uxId=nike.com&country=US&language=en&requestType=redirect">Learn More.</Link></p>
                                                </div>  
                                                <div></div> {/* buffer div */}
                                                <div>
                                                    <h3>WORKOUT INFO</h3>
                                                    <p>Let Nike use your workout info to give you features like: Running and Training plans that adapt to you, Invitations to local races, classes and events, Gear recommendations just for you. Nike will also combine workout info from you and others to better understand how athletes perform and to help create new and better products. You can change your choice anytime in Settings. <Link to=''>Learn More</Link></p>
                                                </div>
                                            </div>    
                                        </div>
                                        <div> {/* Lower Div */}

                                        </div>
                                    </div>
                                    <div></div> {/* PLACEHOLDER */}
                                    <div> {/* DISTANCE radio button holder */}
                                        <label>Distance</label>
                                        <div>
                                            <input name="distanceUnit" type='radio' value='2' id='miles'></input>
                                            <label htmlFor='miles'>Miles</label>
                                        </div>
                                        <div>
                                            <input name="distanceUnit" type='radio' value='1' id='kilometers'></input>
                                            <label htmlFor='kilometers'>Kilometers</label>
                                        </div>
                                    </div>
                                </div>
                                    <div></div> {/* space top */}
                                    <div></div> {/* space bottom */}
                                    <div> {/* LOCATION WRAPPER */}
                                        <div> {/* Title container */}
                                            <h3>LOCATION</h3>
                                        </div>
                                        <div> {/* STATE COUNTRY */}
                                            <div> {/* Country */}
                                                <label htmlFor='country'>Country/Region<span>*</span></label>
                                                <div>
                                                    <select id='country' name='country' required>
                                                        <option value="AF">Afghanistan</option>
	                                                    <option value="AX">Åland Islands</option>
	                                                    <option value="AL">Albania</option>
	                                                    <option value="DZ">Algeria</option>
	                                                    <option value="AS">American Samoa</option>
	                                                    <option value="AD">Andorra</option>
	                                                    <option value="AO">Angola</option>
	                                                    <option value="AI">Anguilla</option>
	                                                    <option value="AQ">Antarctica</option>
	                                                    <option value="AG">Antigua and Barbuda</option>
	                                                    <option value="AR">Argentina</option>
	                                                    <option value="AM">Armenia</option>
	                                                    <option value="AW">Aruba</option>
	                                                    <option value="AU">Australia</option>
	                                                    <option value="AT">Austria</option>
	                                                    <option value="AZ">Azerbaijan</option>
	                                                    <option value="BS">Bahamas</option>
	                                                    <option value="BH">Bahrain</option>
	                                                    <option value="BD">Bangladesh</option>
	                                                    <option value="BB">Barbados</option>
	                                                    <option value="BY">Belarus</option>
	                                                    <option value="BE">Belgium</option>
	                                                    <option value="BZ">Belize</option>
	                                                    <option value="BJ">Benin</option>
	                                                    <option value="BM">Bermuda</option>
	                                                    <option value="BT">Bhutan</option>
	                                                    <option value="BO">Bolivia, Plurinational State of</option>
	                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
	                                                    <option value="BA">Bosnia and Herzegovina</option>
	                                                    <option value="BW">Botswana</option>
	                                                    <option value="BV">Bouvet Island</option>
	                                                    <option value="BR">Brazil</option>
	                                                    <option value="IO">British Indian Ocean Territory</option>
	                                                    <option value="BN">Brunei Darussalam</option>
	                                                    <option value="BG">Bulgaria</option>
	                                                    <option value="BF">Burkina Faso</option>
	                                                    <option value="BI">Burundi</option>
	                                                    <option value="KH">Cambodia</option>
	                                                    <option value="CM">Cameroon</option>
	                                                    <option value="CA">Canada</option>
	                                                    <option value="CV">Cape Verde</option>
	                                                    <option value="KY">Cayman Islands</option>
	                                                    <option value="CF">Central African Republic</option>
	                                                    <option value="TD">Chad</option>
	                                                    <option value="CL">Chile</option>
	                                                    <option value="CN">China</option>
	                                                    <option value="CX">Christmas Island</option>
	                                                    <option value="CC">Cocos (Keeling) Islands</option>
	                                                    <option value="CO">Colombia</option>
	                                                    <option value="KM">Comoros</option>
	                                                    <option value="CG">Congo</option>
	                                                    <option value="CD">Congo, the Democratic Republic of the</option>
	                                                    <option value="CK">Cook Islands</option>
	                                                    <option value="CR">Costa Rica</option>
	                                                    <option value="CI">Côte d'Ivoire</option>
	                                                    <option value="HR">Croatia</option>
	                                                    <option value="CU">Cuba</option>
	                                                    <option value="CW">Curaçao</option>
	                                                    <option value="CY">Cyprus</option>
	                                                    <option value="CZ">Czech Republic</option>
	                                                    <option value="DK">Denmark</option>
	                                                    <option value="DJ">Djibouti</option>
	                                                    <option value="DM">Dominica</option>
	                                                    <option value="DO">Dominican Republic</option>
	                                                    <option value="EC">Ecuador</option>
	                                                    <option value="EG">Egypt</option>
	                                                    <option value="SV">El Salvador</option>
	                                                    <option value="GQ">Equatorial Guinea</option>
	                                                    <option value="ER">Eritrea</option>
	                                                    <option value="EE">Estonia</option>
	                                                    <option value="ET">Ethiopia</option>
	                                                    <option value="FK">Falkland Islands (Malvinas)</option>
	                                                    <option value="FO">Faroe Islands</option>
	                                                    <option value="FJ">Fiji</option>
	                                                    <option value="FI">Finland</option>
	                                                    <option value="FR">France</option>
	                                                    <option value="GF">French Guiana</option>
	                                                    <option value="PF">French Polynesia</option>
	                                                    <option value="TF">French Southern Territories</option>
	                                                    <option value="GA">Gabon</option>
	                                                    <option value="GM">Gambia</option>
	                                                    <option value="GE">Georgia</option>
	                                                    <option value="DE">Germany</option>
	                                                    <option value="GH">Ghana</option>
	                                                    <option value="GI">Gibraltar</option>
	                                                    <option value="GR">Greece</option>
	                                                    <option value="GL">Greenland</option>
	                                                    <option value="GD">Grenada</option>
	                                                    <option value="GP">Guadeloupe</option>
	                                                    <option value="GU">Guam</option>
	                                                    <option value="GT">Guatemala</option>
	                                                    <option value="GG">Guernsey</option>
	                                                    <option value="GN">Guinea</option>
	                                                    <option value="GW">Guinea-Bissau</option>
	                                                    <option value="GY">Guyana</option>
	                                                    <option value="HT">Haiti</option>
	                                                    <option value="HM">Heard Island and McDonald Islands</option>
	                                                    <option value="VA">Holy See (Vatican City State)</option>
	                                                    <option value="HN">Honduras</option>
	                                                    <option value="HK">Hong Kong</option>
	                                                    <option value="HU">Hungary</option>
	                                                    <option value="IS">Iceland</option>
	                                                    <option value="IN">India</option>
	                                                    <option value="ID">Indonesia</option>
	                                                    <option value="IR">Iran, Islamic Republic of</option>
	                                                    <option value="IQ">Iraq</option>
	                                                    <option value="IE">Ireland</option>
	                                                    <option value="IM">Isle of Man</option>
	                                                    <option value="IL">Israel</option>
	                                                    <option value="IT">Italy</option>
	                                                    <option value="JM">Jamaica</option>
	                                                    <option value="JP">Japan</option>
	                                                    <option value="JE">Jersey</option>
	                                                    <option value="JO">Jordan</option>
	                                                    <option value="KZ">Kazakhstan</option>
	                                                    <option value="KE">Kenya</option>
	                                                    <option value="KI">Kiribati</option>
	                                                    <option value="KP">Korea, Democratic People's Republic of</option>
	                                                    <option value="KR">Korea, Republic of</option>
	                                                    <option value="KW">Kuwait</option>
	                                                    <option value="KG">Kyrgyzstan</option>
	                                                    <option value="LA">Lao People's Democratic Republic</option>
	                                                    <option value="LV">Latvia</option>
	                                                    <option value="LB">Lebanon</option>
	                                                    <option value="LS">Lesotho</option>
	                                                    <option value="LR">Liberia</option>
	                                                    <option value="LY">Libya</option>
	                                                    <option value="LI">Liechtenstein</option>
	                                                    <option value="LT">Lithuania</option>
	                                                    <option value="LU">Luxembourg</option>
	                                                    <option value="MO">Macao</option>
	                                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
	                                                    <option value="MG">Madagascar</option>
	                                                    <option value="MW">Malawi</option>
	                                                    <option value="MY">Malaysia</option>
	                                                    <option value="MV">Maldives</option>
	                                                    <option value="ML">Mali</option>
	                                                    <option value="MT">Malta</option>
	                                                    <option value="MH">Marshall Islands</option>
	                                                    <option value="MQ">Martinique</option>
	                                                    <option value="MR">Mauritania</option>
	                                                    <option value="MU">Mauritius</option>
	                                                    <option value="YT">Mayotte</option>
	                                                    <option value="MX">Mexico</option>
	                                                    <option value="FM">Micronesia, Federated States of</option>
	                                                    <option value="MD">Moldova, Republic of</option>
	                                                    <option value="MC">Monaco</option>
	                                                    <option value="MN">Mongolia</option>
	                                                    <option value="ME">Montenegro</option>
	                                                    <option value="MS">Montserrat</option>
	                                                    <option value="MA">Morocco</option>
	                                                    <option value="MZ">Mozambique</option>
	                                                    <option value="MM">Myanmar</option>
	                                                    <option value="NA">Namibia</option>
	                                                    <option value="NR">Nauru</option>
	                                                    <option value="NP">Nepal</option>
	                                                    <option value="NL">Netherlands</option>
	                                                    <option value="NC">New Caledonia</option>
	                                                    <option value="NZ">New Zealand</option>
	                                                    <option value="NI">Nicaragua</option>
	                                                    <option value="NE">Niger</option>
	                                                    <option value="NG">Nigeria</option>
	                                                    <option value="NU">Niue</option>
	                                                    <option value="NF">Norfolk Island</option>
	                                                    <option value="MP">Northern Mariana Islands</option>
	                                                    <option value="NO">Norway</option>
	                                                    <option value="OM">Oman</option>
	                                                    <option value="PK">Pakistan</option>
	                                                    <option value="PW">Palau</option>
	                                                    <option value="PS">Palestinian Territory, Occupied</option>
	                                                    <option value="PA">Panama</option>
	                                                    <option value="PG">Papua New Guinea</option>
	                                                    <option value="PY">Paraguay</option>
	                                                    <option value="PE">Peru</option>
	                                                    <option value="PH">Philippines</option>
	                                                    <option value="PN">Pitcairn</option>
	                                                    <option value="PL">Poland</option>
	                                                    <option value="PT">Portugal</option>
	                                                    <option value="PR">Puerto Rico</option>
	                                                    <option value="QA">Qatar</option>
	                                                    <option value="RE">Réunion</option>
	                                                    <option value="RO">Romania</option>
	                                                    <option value="RU">Russian Federation</option>
	                                                    <option value="RW">Rwanda</option>
	                                                    <option value="BL">Saint Barthélemy</option>
	                                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
	                                                    <option value="KN">Saint Kitts and Nevis</option>
	                                                    <option value="LC">Saint Lucia</option>
	                                                    <option value="MF">Saint Martin (French part)</option>
	                                                    <option value="PM">Saint Pierre and Miquelon</option>
	                                                    <option value="VC">Saint Vincent and the Grenadines</option>
	                                                    <option value="WS">Samoa</option>
	                                                    <option value="SM">San Marino</option>
	                                                    <option value="ST">Sao Tome and Principe</option>
	                                                    <option value="SA">Saudi Arabia</option>
	                                                    <option value="SN">Senegal</option>
	                                                    <option value="RS">Serbia</option>
	                                                    <option value="SC">Seychelles</option>
	                                                    <option value="SL">Sierra Leone</option>
	                                                    <option value="SG">Singapore</option>
	                                                    <option value="SX">Sint Maarten (Dutch part)</option>
	                                                    <option value="SK">Slovakia</option>
	                                                    <option value="SI">Slovenia</option>
	                                                    <option value="SB">Solomon Islands</option>
	                                                    <option value="SO">Somalia</option>
	                                                    <option value="ZA">South Africa</option>
	                                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
	                                                    <option value="SS">South Sudan</option>
	                                                    <option value="ES">Spain</option>
	                                                    <option value="LK">Sri Lanka</option>
	                                                    <option value="SD">Sudan</option>
	                                                    <option value="SR">Suriname</option>
	                                                    <option value="SJ">Svalbard and Jan Mayen</option>
	                                                    <option value="SZ">Swaziland</option>
	                                                    <option value="SE">Sweden</option>
	                                                    <option value="CH">Switzerland</option>
	                                                    <option value="SY">Syrian Arab Republic</option>
	                                                    <option value="TW">Taiwan, Province of China</option>
	                                                    <option value="TJ">Tajikistan</option>
	                                                    <option value="TZ">Tanzania, United Republic of</option>
	                                                    <option value="TH">Thailand</option>
	                                                    <option value="TL">Timor-Leste</option>
	                                                    <option value="TG">Togo</option>
	                                                    <option value="TK">Tokelau</option>
	                                                    <option value="TO">Tonga</option>
	                                                    <option value="TT">Trinidad and Tobago</option>
	                                                    <option value="TN">Tunisia</option>
	                                                    <option value="TR">Turkey</option>
	                                                    <option value="TM">Turkmenistan</option>
	                                                    <option value="TC">Turks and Caicos Islands</option>
	                                                    <option value="TV">Tuvalu</option>
	                                                    <option value="UG">Uganda</option>
	                                                    <option value="UA">Ukraine</option>
	                                                    <option value="AE">United Arab Emirates</option>
	                                                    <option value="GB">United Kingdom</option>
	                                                    <option value="US">United States</option>
	                                                    <option value="UM">United States Minor Outlying Islands</option>
	                                                    <option value="UY">Uruguay</option>
	                                                    <option value="UZ">Uzbekistan</option>
	                                                    <option value="VU">Vanuatu</option>
	                                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
	                                                    <option value="VN">Viet Nam</option>
	                                                    <option value="VG">Virgin Islands, British</option>
	                                                    <option value="VI">Virgin Islands, U.S.</option>
	                                                    <option value="WF">Wallis and Futuna</option>
	                                                    <option value="EH">Western Sahara</option>
	                                                    <option value="YE">Yemen</option>
	                                                    <option value="ZM">Zambia</option>
	                                                    <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div> {/* State */}
                                                <label htmlFor='state'>State<span>*</span></label>
                                                <div>
                                                    <select id='state' name='state' required>
                                                        <option value="AL">Alabama</option>
	                                                    <option value="AK">Alaska</option>
	                                                    <option value="AZ">Arizona</option>
	                                                    <option value="AR">Arkansas</option>
	                                                    <option value="CA">California</option>
	                                                    <option value="CO">Colorado</option>
	                                                    <option value="CT">Connecticut</option>
	                                                    <option value="DE">Delaware</option>
	                                                    <option value="DC">District Of Columbia</option>
	                                                    <option value="FL">Florida</option>
	                                                    <option value="GA">Georgia</option>
	                                                    <option value="HI">Hawaii</option>
	                                                    <option value="ID">Idaho</option>
	                                                    <option value="IL">Illinois</option>
	                                                    <option value="IN">Indiana</option>
	                                                    <option value="IA">Iowa</option>
	                                                    <option value="KS">Kansas</option>
	                                                    <option value="KY">Kentucky</option>
	                                                    <option value="LA">Louisiana</option>
	                                                    <option value="ME">Maine</option>
	                                                    <option value="MD">Maryland</option>
	                                                    <option value="MA">Massachusetts</option>
	                                                    <option value="MI">Michigan</option>
	                                                    <option value="MN">Minnesota</option>
	                                                    <option value="MS">Mississippi</option>
	                                                    <option value="MO">Missouri</option>
	                                                    <option value="MT">Montana</option>
	                                                    <option value="NE">Nebraska</option>
	                                                    <option value="NV">Nevada</option>
	                                                    <option value="NH">New Hampshire</option>
	                                                    <option value="NJ">New Jersey</option>
	                                                    <option value="NM">New Mexico</option>
	                                                    <option value="NY">New York</option>
	                                                    <option value="NC">North Carolina</option>
	                                                    <option value="ND">North Dakota</option>
	                                                    <option value="OH">Ohio</option>
	                                                    <option value="OK">Oklahoma</option>
	                                                    <option value="OR">Oregon</option>
	                                                    <option value="PA">Pennsylvania</option>
	                                                    <option value="RI">Rhode Island</option>
	                                                    <option value="SC">South Carolina</option>
	                                                    <option value="SD">South Dakota</option>
	                                                    <option value="TN">Tennessee</option>
	                                                    <option value="TX">Texas</option>
	                                                    <option value="UT">Utah</option>
	                                                    <option value="VT">Vermont</option>
	                                                    <option value="VA">Virginia</option>
	                                                    <option value="WA">Washington</option>
	                                                    <option value="WV">West Virginia</option>
	                                                    <option value="WI">Wisconsin</option>
	                                                    <option value="WY">Wyoming</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div> {/* CITY and ZIPCODE */}
                                            <div> {/* City */}
                                                <label htmlFor='city'>City <span>*</span></label>
                                                <input id="city" type='text' required></input>
                                            </div>
                                            <div> {/* Zip */}
                                                <label htmlFor='zip'>Zip <span>*</span></label>
                                                <input id="zip" type='text' required></input>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div> {/* required wrapper */}
                                        <span>*</span> {/* red ast */} 
                                        Required Fields   
                                    </div>
                                    <div></div> {/* space top */}
                                    <div></div> {/* space bottom */}
                                    <div> {/* button wrapper */}
                                        <button type="button">CANCEL</button>
                                        <button type="button">SAVE</button>

                                    </div>
                                    <div></div> {/* space top */}
                                    <div></div> {/* space bottom */}
                                    <div> {/* delete account */}
                                    <button type="button">Delete Account</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
        }
}

export default connect(mapStateToProps)(Settings)