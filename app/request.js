
const createSendRequest = function (type, url, data, cb) {

  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      cb(null, JSON.parse(httpRequest.responseText));
    } else if (httpRequest.readyState === 4) {
      cb(httpRequest.responseText);
    }
  };
  httpRequest.open(type.toUpperCase(), url);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(data);

};

const createGetRequest = function (url, cb) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      cb(null, JSON.parse(httpRequest.responseText));
    } else if (httpRequest.readyState === 4) {
      cb(httpRequest.responseText);
    }
  };
  httpRequest.open('GET', url);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
};

export default {
  send(type, url, data) {
    return new Promise(function (resolve, reject) {

      createSendRequest(type, url, JSON.stringify(data), function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

    });
  },
  get(url) {
    return new Promise(function (resolve, reject) {

      createGetRequest(url, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

    });
  }
};
