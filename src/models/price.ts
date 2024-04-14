// like a struct in C or a class in Python
/**
 * Represents the cryptocurrency price.
 * @interface CryptoPrice
 */
export interface CryptoPrice {
    /**
     * Dynamic key-value pair.
     * Allows for example an input of: [USD, GBP, EUR] or an input of [USD, EUR].
     * @property {string} key - The currency code.
     * @property {number} value - The currency value.
     */
    [key: string]: number;
}