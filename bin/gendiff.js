#!/usr/bin/env node --experimental-json-modules --no-warnings
import program from 'commander';
import config from '../package.json';

program
  .version(config.version)
  .description(config.description)
  .parse(process.argv);
