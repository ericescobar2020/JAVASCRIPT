import {suma,multiplica } from './modulos/controller.js'

import chalk from 'chalk';

const sum = suma (1,2)
console.log(sum);

const sumB= suma (4,5)
console.log(sumB);

const multiplicacionA= multiplica(sum, sumB);
console.log(multiplicacionA);

const multiplicacionb= multiplica(12,34)
console.log(chalk.green(multiplicacionb)) // color verde 

console.log(chalk.blue("hola mundo"));
