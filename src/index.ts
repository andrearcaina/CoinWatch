#!/usr/bin/env node

import { Command } from 'commander';
import dotenv from 'dotenv';
import { fetchPrice } from './commands/fetchprice';
import { ascii } from './commands/ascii';

dotenv.config();

const program = new Command();

// this is the main program that will be executed when the user runs the command 
program
    .version('0.0.1')
    .description('A CLI tool to track cryptocurrency prices')
    
fetchPrice(program);
ascii(program);

// parse the arguments 
program
    .parse(process.argv);