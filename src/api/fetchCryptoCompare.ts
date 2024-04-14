import { CryptoPrice } from '../models/price';

// constants 
const crypto_key: string | undefined = process.env.CRYPTO_API_KEY;
const baseURL: string = `https://min-api.cryptocompare.com/data/price`;

// fetches the data from the CryptoCompare API
const fetchCryptoData = async (symbol: string, tsyms: Array<string>): Promise<CryptoPrice | undefined> => {
    try {
        const response = await fetch(baseURL+`?fsym=${symbol}&tsyms=${tsyms.join(",")}&api_key=${crypto_key}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data: CryptoPrice = await response.json() as CryptoPrice;
        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export { fetchCryptoData };
