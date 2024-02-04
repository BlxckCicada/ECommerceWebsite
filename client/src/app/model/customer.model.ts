
export interface Customer{
    id:string;
    firstname:string;
    lastname:string;
    email:string;
    phone:string;
    address:Address;
}
export interface Address{
    street:string;
    city:string;
    province:string;
    zipCode:string;
}