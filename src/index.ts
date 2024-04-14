#!/usr/bin/env node

import { fetchCryptoData } from './api/fetchCryptoCompare';
import { Command } from 'commander';
import figlet from 'figlet';
import dotenv from 'dotenv';

dotenv.config();

const program = new Command();

// this is the main program that will be executed when the user runs the command 
program
    .version('0.0.1')
    .description('A CLI tool to track cryptocurrency prices')
    
// fetchprice command to fetch the current price of the cryptocurrency
program
    .command('fetchprice')
    .alias('fp')
    .description('Fetches the current price of the cryptocurrency')
    .requiredOption('--coin <type>', 'The cryptocurrency symbol')
    .requiredOption('--curr <type>', 'The currency symbol')
    .action((options) => {
        if (options.coin && options.curr) {
            fetchCryptoData(options.coin, [options.curr])
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

// ascii command to print the ASCII representation of CoinWatch
program
    .command('ascii')
    .alias('a')
    .description('Prints ASCII Art of CoinWatch')
    .action(() => {
        figlet('CoinWatch', (err, data) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log('A CLI tool to track cryptocurrency prices');
            console.log('Version: 0.0.1');
            console.log('Utilizes CryptoCompare API!');
        });
    });

// parse the arguments 
program
    .parse(process.argv);