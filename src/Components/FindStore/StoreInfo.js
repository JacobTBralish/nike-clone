import React, {PureComponent} from 'react';

export default class StoreInfo extends PureComponent {

 render() {
   const {info, address_1, address_2, postal_code, name, phone_number} = this.props;
   const displayName = `${info.name}, ${info.phone_number}, ${info.address_1}, ${info.postal_code}, ${info.address_2}`;

   return (
     <div>
       <div>
         <div className="popup_box">{displayName}
         <p>{name}</p>
         <p>{phone_number}</p>
         <p>{address_1}</p>
         <p>{address_2}</p>
         <p>{postal_code}</p>
         </div>
       </div>
     </div>
   );
 }
}