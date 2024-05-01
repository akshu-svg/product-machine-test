


export interface Iproduct {
    pname: string;
    pdetails: string;
    pstatus: string;
    id: string;
}

export enum ProductsStatus {
    InProgress = "InProgress",
    Dispatched = "Dispatched",
    Delievered = "Delievered"
}