import React, {PureComponent} from 'react';

export default class StoreInfo extends PureComponent {

 render() {
   const {info, name, address_1, address_2, postal_code, phone_number} = this.props;
   const displayName = `${info.type.name}, ${info.name}, ${info.phone_number}, ${info.address_1}, ${info.postal_code}, ${info.address_2}`;

   return (
     <div>
       <div>
         <div className="popup_box">{displayName}
         {/* <p>{info.type.name}</p> */}
         {name}
         <p>{phone_number}</p>
         <br/>
         <p>{address_1}</p>
         
          <p>{address_2}</p>
          <b/>
          <p>{postal_code}</p>
         </div>
       </div>
     </div>
   );
 }
}