# Hexlet project Gendiff

CLI-tool for take difference between two files.

## Installation

Install all dependencies:
```sh
make install
```

Install packages:
```sh
npm link
```

## Tests

```sh
$ make test
```

## Usage

### Help

For get help run:
```sh
gendiff --help
```
```sh
gendiff -h
```

### Simple run

Support formats: `*.json`, `*.yaml`, `*.ini`.
To compare two files run:
```sh
gendiff [options] <filePath1> <filePath2>
```

### Output formats

Support types: __diff__(*default*), __plain__, __json__.
Add `--format` or `-f` flag and type of the output:
```sh
gendiff --format [type] <filePath1> <filePath2>
```
```sh
gendiff -f [type] <filePath1> <filePath2>
```

### Examples

#### Diff type format

[![asciicast](https://asciinema.org/a/FfM16iH8K4jdywrCNbrhiW3qx.svg)](https://asciinema.org/a/FfM16iH8K4jdywrCNbrhiW3qx)

[Read more in hexlet](https://ru.hexlet.io/professions/frontend/projects/46).