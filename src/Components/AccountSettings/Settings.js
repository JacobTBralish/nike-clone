import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

import './Account.scss'
import './nikeAccountSass.scss'

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
    <div className="profile-content"> {/* Profile content */}
            <h2 className="edf-font-size--xlarge">Account Settings</h2>
            <form className="basic-info-form">
                <div className="profile-image-bio-wrapper"> {/* PIC, ABOUT, EDIT WRAPPER */}
                    <div className="profile-pic-wrapper"> {/* pic Div */}
                        <div className="profile-pic defaultPic"></div> {/* or img here */}    
                    </div>
                    <div className="bio-section-wrapper"> {/* BIO SECTION */}
                        <label className="nsg-form--label" htmlFor="profile-bio-field">About Me</label>
                        <textarea className="nsg-form--input nike-textarea" id="profile-bio-field" name="bio" maxLength='150' rows='6' cols='25'></textarea>
                        <span className="length-count">0/150</span>
                    </div> 
                    <div className="photo-edit-button-container"> {/* photo edit button */}
                        <div className="photo-button-wrapper">
                            <button className="change-phot nsg-button nsg-gra--light-grey">Edit</button> 
                        </div>
                    </div>
                </div>
                <div className="name-container two-field-container"> {/* first last name container */}
                    <div className="left-container left-name-container input-wrapper"> {/* FIRST */}
                        <label className="nsg-form--label" htmlFor="first-name">First Name<span className="nsg-form--required">*</span></label>
                        <input className="nsg-form--input first-name" id="first-name" name="firstName" maxLength="40" type="text" required></input>
                    </div>
                    <div className="right-container right-name-container input-wrapper"> {/* LAST */}
                        <label className="nsg-form--label" htmlFor="last-name">Last Name<span className="nsg-form--required">*</span></label>
                        <input className="nsg-form--input last-name" id="last-name" name="lastName" maxLength="40" type="text" required></input>
                    </div>
                </div>
                <div className="input-wrapper screen-name-container">
                    <label className="nsg-form--label" for="screen-name">Screen Name<span className="nsg-form--required">*</span></label>
                    <input className="nsg-form--input js-screenName" id="screen-name" type="text" maxlength="50" name="screenName" data-validator="screenName" required="required" data-error-required="Please enter a Screen Name." data-dbloctext="The Nike Screen Name is already taken."></input>
                </div>

                <div className="input-wrapper email-container">
                    <label className="nsg-form--label" for="email">Email<span className="nsg-form--required">*</span></label>
                    <input className="nsg-form--input email" id="email" type="email" maxlength="50" name="email" data-validator="email" required="required" data-error-required="Please enter a valid email address." data-dbloctext="Email address already registered."></input>
                </div>
                <div className="input-wrapper" js-hook="mobileVerificationSection">
                      <label className="nsg-form--label">Mobile</label>
                      <input className="nsg-form--input" id="mobile" type="text" maxlength="50" name="mobile" data-validator="mobile" required="required" data-error-required="Please enter a valid email address." data-dbloctext="Email address already registered."></input>
                </div>
               

                <div className="divider bottom"></div>
                <div className="divider top"></div>
                
                <div className="attributes">
                    <div className="title-container">
                        <h3 className="nsg-font-family--platform edf-font-size--large">Attributes</h3>
                        <div className="tooltip-container">
                            <span className="nsg-glyph--help edf-title-font-size--xxxlarge nsg-text--nike-orange"></span>
                            <div className="nsg-form--tool-tip nsg-font-family--platform hidden">Your selections will be used to calculate fitness metrics and help filter products</div>
                        </div>
                    </div>
              
                    <div className="dob-container-profile ">
                      <label className="nsg-form--label">Date of Birth<span className="nsg-form--required">*</span></label>
                        <div className="dob-comp-outer" >
                          <div className="dob-comp">
                                <select id="comp-select dob-select" dob-select name="dobMonth">
                                  <option value="">MM</option>
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
                              
                                  <div className="dob-comp">          
                                        <select id="comp-select dob-select" name="dobDay">
                                            <option value="">DD</option>
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
                              
                                <div className="dob-comp dob-select" >
                                    <select id="comp-select" name="dobYear" data-validator="dob" data-agemin="13">
                                        <option value="">YYYY</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                        <option value="1923">1923</option>
                                        <option value="1922">1922</option>
                                        <option value="1921">1921</option>
                                        <option value="1920">1920</option>
                                        <option value="1919">1919</option>
                                        <option value="1918">1918</option>
                                    </select>
                                </div>
                            </div>
                        </div>
              
                    <div className="radio-group-container gender-container">
                      <label className="nsg-form--label">Gender</label>
                      <div className="input-wrapper radio-container">
                        <input name="gender" className=" gender-male" id="gender-male" type="radio" value="2" checked="checked"></input>
                        <label className="nsg-form--label--normal" for="gender-male">Male</label>
                      </div>
                      <div className="input-wrapper radio-container">
                        <input name="gender" className=" gender-female" id="gender-female" type="radio" value="1"></input>
                        <label className="nsg-form--label--normal" for="gender-female">Female</label>
                      </div>
                    </div>
              
                    <div className="js-healthDataWrapper">
                        <div className="js-healthData">
                        <div className="js-healthForm">
                            <div className="healthData-height-container">
                            <div className="radio-group-container">
                                <label className="nsg-form--label js-height-label">
                                Height
                                <span className="nsg-form--required">*</span>
                                </label>
                                <div className="input-wrapper radio-container">
                                    <input name="height" id="height-ft/inches" className="" type="radio" autocomplete="off" value="FT/INCHES" checked=""></input>
                                    <label className="nsg-form--label--normal" for="height-ft/inches">
                                    Feet/Inches
                                    </label>
                                </div>
                                <div className="input-wrapper radio-container">
                                    <input name="height" id="height-m/cm" className="" type="radio" autocomplete="off" value="M/CM"></input>
                                    <label className="nsg-form--label--normal" for="height-m/cm">
                                    Centimeters
                                    </label>
                                </div>
                            </div>
    
                          <div className="health-data-val-container">
                            <div className="nsg-form--drop-down health-data-val-item-container">
                              <select className="nsg-form--drop-down selectBox" data-validator="height" data-error-required="Please enter a value greater than zero."                     data-analytics-type="height" required="required" name="height">
                                <option value="0">FT/IN</option>
                                <option value="36">3'0''</option>
                                <option value="37">3'1''</option>
                                <option value="38">3'2''</option>
                                <option value="39">3'3''</option>
                                <option value="40">3'4''</option>
                                <option value="41">3'5''</option>
                                <option value="42">3'6''</option>
                                <option value="43">3'7''</option>
                                <option value="44">3'8''</option>
                                <option value="45">3'9''</option>
                                <option value="46">3'10''</option>
                                <option value="47">3'11''</option>
                                <option value="48">4'0''</option>
                                <option value="49">4'1''</option>
                                <option value="50">4'2''</option>
                                <option value="51">4'3''</option>
                                <option value="52">4'4''</option>
                                <option value="53">4'5''</option>
                                <option value="54">4'6''</option>
                                <option value="55">4'7''</option>
                                <option value="56">4'8''</option>
                                <option value="57">4'9''</option>
                                <option value="58">4'10''</option>
                                <option value="59">4'11''</option>
                                <option value="60">5'0''</option>
                                <option value="61">5'1''</option>
                                <option value="62">5'2''</option>
                                <option value="63">5'3''</option>
                                <option value="64">5'4''</option>
                                <option value="65">5'5''</option>
                                <option value="66">5'6''</option>
                                <option value="67">5'7''</option>
                                <option value="68">5'8''</option>
                                <option value="69">5'9''</option>
                                <option value="70">5'10''</option>
                                <option value="71">5'11''</option>
                                <option value="72">6'0''</option>
                                <option value="73">6'1''</option>
                                <option value="74">6'2''</option>
                                <option value="75">6'3''</option>
                                <option value="76">6'4''</option>
                                <option value="77">6'5''</option>
                                <option value="78">6'6''</option>
                                <option value="79">6'7''</option>
                                <option value="80">6'8''</option>
                                <option value="81">6'9''</option>
                                <option value="82">6'10''</option>
                                <option value="83">6'11''</option>
                                <option value="84">7'0''</option>
                                <option value="85">7'1''</option>
                                <option value="86">7'2''</option>
                                <option value="87">7'3''</option>
                                <option value="88">7'4''</option>
                                <option value="89">7'5''</option>
                                <option value="90">7'6''</option>
                                <option value="91">7'7''</option>
                                <option value="92">7'8''</option>
                                <option value="93">7'9''</option>
                                <option value="94">7'10''</option>
                                <option value="95">7'11''</option>
                              </select>
                            </div>
                          </div>
                        </div>    
    
    <div className="healthData-weight-container">
      <div className="radio-group-container">
        <label className="nsg-form--label js-height-label">
          Weight
          <span className="nsg-form--required">*</span>
        </label>
          <div className="input-wrapper radio-container">
            <input name="weight" id="weight-pounds" className="" type="radio" autocomplete="off" value="POUNDS" checked=""></input>
            <label className="nsg-form--label--normal" for="weight-pounds">
              Pounds
            </label>
          </div>
          <div className="input-wrapper radio-container">
            <input name="weight" id="weight-kilograms" className="" type="radio" autocomplete="off" value="KILOGRAMS"></input>
            <label className="nsg-form--label--normal" for="weight-kilograms">
              Kilograms
            </label>
          </div>
      </div>
    
      <div className="health-data-val-container">
        <div className="nsg-form--drop-down health-data-val-item-container">
          <select className="nsg-form--drop-down selectBox" data-validator="weight" data-error-required="Please enter a value greater than zero." data-analytics-type="weight" required="required" name="weight">
            <option value="0">LBS</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option><option value="121">121</option><option value="122">122</option><option value="123">123</option><option value="124">124</option><option value="125">125</option><option value="126">126</option><option value="127">127</option><option value="128">128</option><option value="129">129</option><option value="130">130</option><option value="131">131</option><option value="132">132</option><option value="133">133</option><option value="134">134</option><option value="135">135</option><option value="136">136</option><option value="137">137</option><option value="138">138</option><option value="139">139</option><option value="140">140</option><option value="141">141</option><option value="142">142</option><option value="143">143</option><option value="144">144</option><option value="145">145</option><option value="146">146</option><option value="147">147</option><option value="148">148</option><option value="149">149</option><option value="150">150</option><option value="151">151</option><option value="152">152</option><option value="153">153</option><option value="154">154</option><option value="155">155</option><option value="156">156</option><option value="157">157</option><option value="158">158</option><option value="159">159</option><option value="160">160</option><option value="161">161</option><option value="162">162</option><option value="163">163</option><option value="164">164</option><option value="165">165</option><option value="166">166</option><option value="167">167</option><option value="168">168</option><option value="169">169</option><option value="170">170</option><option value="171">171</option><option value="172">172</option><option value="173">173</option><option value="174">174</option><option value="175">175</option><option value="176">176</option><option value="177">177</option><option value="178">178</option><option value="179">179</option><option value="180">180</option><option value="181">181</option><option value="182">182</option><option value="183">183</option><option value="184">184</option><option value="185">185</option><option value="186">186</option><option value="187">187</option><option value="188">188</option><option value="189">189</option><option value="190">190</option><option value="191">191</option><option value="192">192</option><option value="193">193</option><option value="194">194</option><option value="195">195</option><option value="196">196</option><option value="197">197</option><option value="198">198</option><option value="199">199</option><option value="200">200</option><option value="201">201</option><option value="202">202</option><option value="203">203</option><option value="204">204</option><option value="205">205</option><option value="206">206</option><option value="207">207</option><option value="208">208</option><option value="209">209</option><option value="210">210</option><option value="211">211</option><option value="212">212</option><option value="213">213</option><option value="214">214</option><option value="215">215</option><option value="216">216</option><option value="217">217</option><option value="218">218</option><option value="219">219</option><option value="220">220</option><option value="221">221</option><option value="222">222</option><option value="223">223</option><option value="224">224</option><option value="225">225</option><option value="226">226</option><option value="227">227</option><option value="228">228</option><option value="229">229</option><option value="230">230</option><option value="231">231</option><option value="232">232</option><option value="233">233</option><option value="234">234</option><option value="235">235</option><option value="236">236</option><option value="237">237</option><option value="238">238</option><option value="239">239</option><option value="240">240</option><option value="241">241</option><option value="242">242</option><option value="243">243</option><option value="244">244</option><option value="245">245</option><option value="246">246</option><option value="247">247</option><option value="248">248</option><option value="249">249</option><option value="250">250</option><option value="251">251</option><option value="252">252</option><option value="253">253</option><option value="254">254</option><option value="255">255</option><option value="256">256</option><option value="257">257</option><option value="258">258</option><option value="259">259</option><option value="260">260</option><option value="261">261</option><option value="262">262</option><option value="263">263</option><option value="264">264</option><option value="265">265</option><option value="266">266</option><option value="267">267</option><option value="268">268</option><option value="269">269</option><option value="270">270</option><option value="271">271</option><option value="272">272</option><option value="273">273</option><option value="274">274</option><option value="275">275</option><option value="276">276</option><option value="277">277</option><option value="278">278</option><option value="279">279</option><option value="280">280</option><option value="281">281</option><option value="282">282</option><option value="283">283</option><option value="284">284</option><option value="285">285</option><option value="286">286</option><option value="287">287</option><option value="288">288</option><option value="289">289</option><option value="290">290</option><option value="291">291</option><option value="292">292</option><option value="293">293</option><option value="294">294</option><option value="295">295</option><option value="296">296</option><option value="297">297</option><option value="298">298</option><option value="299">299</option><option value="300">300</option><option value="301">301</option><option value="302">302</option><option value="303">303</option><option value="304">304</option><option value="305">305</option><option value="306">306</option><option value="307">307</option><option value="308">308</option><option value="309">309</option><option value="310">310</option><option value="311">311</option><option value="312">312</option><option value="313">313</option><option value="314">314</option><option value="315">315</option><option value="316">316</option><option value="317">317</option><option value="318">318</option><option value="319">319</option><option value="320">320</option><option value="321">321</option><option value="322">322</option><option value="323">323</option><option value="324">324</option><option value="325">325</option><option value="326">326</option><option value="327">327</option><option value="328">328</option><option value="329">329</option><option value="330">330</option><option value="331">331</option><option value="332">332</option><option value="333">333</option><option value="334">334</option><option value="335">335</option><option value="336">336</option><option value="337">337</option><option value="338">338</option><option value="339">339</option><option value="340">340</option><option value="341">341</option><option value="342">342</option><option value="343">343</option><option value="344">344</option><option value="345">345</option><option value="346">346</option><option value="347">347</option><option value="348">348</option><option value="349">349</option><option value="350">350</option><option value="351">351</option><option value="352">352</option><option value="353">353</option><option value="354">354</option><option value="355">355</option><option value="356">356</option><option value="357">357</option><option value="358">358</option><option value="359">359</option><option value="360">360</option><option value="361">361</option><option value="362">362</option><option value="363">363</option><option value="364">364</option><option value="365">365</option><option value="366">366</option><option value="367">367</option><option value="368">368</option><option value="369">369</option><option value="370">370</option><option value="371">371</option><option value="372">372</option><option value="373">373</option><option value="374">374</option><option value="375">375</option><option value="376">376</option><option value="377">377</option><option value="378">378</option><option value="379">379</option><option value="380">380</option><option value="381">381</option><option value="382">382</option><option value="383">383</option><option value="384">384</option><option value="385">385</option><option value="386">386</option><option value="387">387</option><option value="388">388</option><option value="389">389</option><option value="390">390</option><option value="391">391</option><option value="392">392</option><option value="393">393</option><option value="394">394</option><option value="395">395</option><option value="396">396</option><option value="397">397</option><option value="398">398</option><option value="399">399</option><option value="400">400</option><option value="401">401</option><option value="402">402</option><option value="403">403</option><option value="404">404</option><option value="405">405</option><option value="406">406</option><option value="407">407</option><option value="408">408</option><option value="409">409</option><option value="410">410</option><option value="411">411</option><option value="412">412</option><option value="413">413</option><option value="414">414</option><option value="415">415</option><option value="416">416</option><option value="417">417</option><option value="418">418</option><option value="419">419</option><option value="420">420</option><option value="421">421</option><option value="422">422</option><option value="423">423</option><option value="424">424</option><option value="425">425</option><option value="426">426</option><option value="427">427</option><option value="428">428</option><option value="429">429</option><option value="430">430</option><option value="431">431</option><option value="432">432</option><option value="433">433</option><option value="434">434</option><option value="435">435</option><option value="436">436</option><option value="437">437</option><option value="438">438</option><option value="439">439</option><option value="440">440</option><option value="441">441</option><option value="442">442</option><option value="443">443</option><option value="444">444</option><option value="445">445</option><option value="446">446</option><option value="447">447</option><option value="448">448</option><option value="449">449</option><option value="450">450</option><option value="451">451</option><option value="452">452</option><option value="453">453</option><option value="454">454</option><option value="455">455</option><option value="456">456</option><option value="457">457</option><option value="458">458</option><option value="459">459</option><option value="460">460</option><option value="461">461</option><option value="462">462</option><option value="463">463</option><option value="464">464</option><option value="465">465</option><option value="466">466</option><option value="467">467</option><option value="468">468</option><option value="469">469</option><option value="470">470</option><option value="471">471</option><option value="472">472</option><option value="473">473</option><option value="474">474</option><option value="475">475</option><option value="476">476</option><option value="477">477</option><option value="478">478</option><option value="479">479</option><option value="480">480</option><option value="481">481</option><option value="482">482</option><option value="483">483</option><option value="484">484</option><option value="485">485</option><option value="486">486</option><option value="487">487</option><option value="488">488</option><option value="489">489</option><option value="490">490</option><option value="491">491</option><option value="492">492</option><option value="493">493</option><option value="494">494</option><option value="495">495</option><option value="496">496</option><option value="497">497</option><option value="498">498</option><option value="499">499</option><option value="500">500</option>
          </select>
        </div>
      </div>
    </div>  
    </div>

          <div className="health-info-optin js-restoreDefaults">
            <input className="nsg-form--checkbox" type="checkbox"></input>
            <label className="nsg-form--label left">
              Use Default Height and Weight
            </label>
          </div>
          <div className="weight-information">
            We use height and weight information to provide more accurate results in Nike experiences, such as run distance and pace, calories and to help personalize coaching         plans. If you don’t wish to enter your height and weight, select the “use default height and weight” option and we will use a default value to perform these        calculations. <a href="http://agreementservice.svs.nike.com/rest/agreement?agreementType=datalearnmore&amp;uxId=nike.com&amp;country=US&amp;language=en&amp;    requestType=redirect">Learn More</a>.
          </div>
        </div>
        <div className="divider bottom attribute-divider"></div>
            <div className="divider top attribute-divider"></div>
                <div className="health-info-optin">
                  <div className="section-title nsg-font-family--platform edf-font-size--large">
                    WORKOUT INFO
                  </div>
                  <div>Let Nike use your workout info to give you features like: Running and Training plans that adapt to you, Invitations to local races, classes and events,      Gear       recommendations just for you. Nike will also combine workout info from you and others to better understand how athletes perform and to help create       new and better     products. You can change your choice anytime in Settings. <a href="http://agreementservice.svs.nike.com/rest/agreement?     agreementType=datalearnmore&amp; uxId=nike.com& amp;country=US&amp;language=en&amp;requestType=redirect">Learn More</a></div>
                  <div className="js-shareWorkout">
                    <input className="nsg-form--checkbox" type="checkbox" checked=""></input>
                    <label className="nsg-form--label left optin-label" for="shareWorkout">
                      Use My Workout Info
                    </label>
                  </div>
                </div>
            </div>
              
            <div className="divider bottom attribute-divider"></div>
        
            <div className="radio-group-container distance-container">
              <label className="nsg-form--label">Distance</label>
              <div className="input-wrapper radio-container">
                <input name="distanceUnit" className="" id="distance-mi" type="radio" value="MILES"></input>
                <label className="nsg-form--label--normal" for="distance-mi">Miles</label>
              </div>
              <div className="input-wrapper radio-container">
                <input name="distanceUnit" className="" id="distance-km" type="radio" value="KILOMETERS"></input>
                <label className="nsg-form--label--normal" for="distance-km">Kilometers</label>
              </div>
            </div>
          </div> 
        </form>
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