export interface ExhangeRatesResponse {
    rates:{
        [key: string]: number
    },
    base: string,
    date: string

}
