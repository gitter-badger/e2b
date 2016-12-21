module.exports = (data, index, length) => {
  let value = '';
  for (let i = 0; i < length; i++) {
    value += String.fromCharCode(data[index + i]);
  }
  return value;
};