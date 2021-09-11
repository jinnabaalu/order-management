export const characterAttributesMapping = {
    CustomerId: 'ID',
    name: 'Name',
    address: 'Address',
    district: 'District',
    state: 'State',
    pincode: 'Pincode',
    phone: 'Phone',
    whatsapp: 'Whatsapp'
  };
  
  export interface Character {
    CustomerId: string;
    name: string;
    address: string;
    district: string;
    state: string;
    pincode: string;
    phone:string;
    whatsapp: string;
  }
  