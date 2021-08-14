#!/usr/bin/env node --experimental-json-modules --no-warnings
import program from 'commander';
import config from '../package.json';

program
  .version(config.version)
  .description(config.description)
  .option('-f, --format [type]', 'output format', 'diff')
  .arguments('<filepath1> <filepath2>')
  .parse(process.argv);
