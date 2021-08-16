const parser = {
  json: JSON.parse,
};

export default (format) => parser[format];
