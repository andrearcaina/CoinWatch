import { Command } from 'commander';
import figlet from 'figlet';

export function ascii(program: Command) {
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
}