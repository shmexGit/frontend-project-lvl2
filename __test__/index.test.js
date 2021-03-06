import fs from 'fs';
import getDiff from '../src/index.js';

const extensions = ['.json'];
const formats = ['diff'];

const path = `${__dirname}/__fixtures__/`;
const getBeforeAfterFiles = (format) => [format, `${path}file1${format}`, `${path}file2${format}`];

const getExpected = (format) => fs.readFileSync(`${path}expected.${format}.txt`, 'utf-8');
const filesByExtension = extensions
  .map(getBeforeAfterFiles, []);

describe('Gendiff', () => {
  describe.each(formats)('Test %s format', (format) => {
    it.each(filesByExtension)('should work with %s extension', (_, before, after) => {
      const expected = getExpected(format);
      expect(getDiff(before, after, format)).toEqual(expected);
    });
  });
});
