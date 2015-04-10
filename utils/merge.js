module.exports = function (a, b) {
  for (key in b) {
    a[key] = b[key];
  }
  return a;
};
