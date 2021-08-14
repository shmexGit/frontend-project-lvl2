# Hexlet project Gendiff

Simple CLI-tool for take difference between configuration files. Support formats: `*.json`, `*.yaml`, `*.ini`.

[Read more about this education project](https://ru.hexlet.io/professions/frontend/projects/46).

## Installation

Install all dependencies:
```sh
make install
```

Create package:
```sh
make publish
```

Install packages:
```sh
npm link
```

## Run tests

```sh
$ make test
```

## Usage

### Help

For get help run:
```sh
gendiff --help
```

### Simple run

To compare two files run:
```sh
gendiff [options] <pathToFirstFile> <pathToSecondFile>
```

### Supported output formats

To specify output format add `--format` flag and type of the output:
```sh
gendiff --format [type] <pathToFirstFile> <pathToSecondFile>
```

Supported `[type]`: __diff__(*default*), __plain__, __json__