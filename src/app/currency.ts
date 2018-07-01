export interface Currency{
    currencyName: string;
    id: string;
}
export interface Country{
    alpha3: string;
    currencyId: string;
    currencyName: string;
    currencySymbol: string;
    id: string;
    name: string;
}
export interface Conversion{
    from : string;
    to : string;
}
export interface Results{
    results: Object;
}