module.exports = (data, value) => {
  for (let i = 0; i < value.length; i++) {
    data.push(
      value.charCodeAt(i)
    );
  }
};