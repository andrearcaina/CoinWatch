import { Command } from 'commander';
import { fetchCryptoPrice } from '../api/cryptoPrices';

export function fetchPrice(program: Command): undefined {
    program
        .command('fetchprice')
        .alias('fp')
        .description('Fetches the current price of the cryptocurrency')
        .requiredOption('--coin <type>', 'The cryptocurrency symbol')
        .requiredOption('--curr <type>', 'The currency symbol')
        .action((options) => {
            if (options.coin && options.curr) {
                fetchCryptoPrice(options.coin, [options.curr])
                    .then((data) => {
                        if (data) {
                            console.log(data);
                        } else {
                            console.log('Error fetching data');
                        }
                    });
            } else {
                console.log('Please provide the coin and currency.');
                console.log('Sample usage: cw fp --coin BTC --curr USD');
            }
        });
}
