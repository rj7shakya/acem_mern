const getListData = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1 === number) {
        resolve("great success!");
      } else {
        reject("ugh failed!");
      }
    }, 1000);
  });
};

getListData(1)
  .then((msg) => console.log("from reseolve", msg))
  .catch((msg) => console.log("from reject", msg));

// getListData(2)
//   .then((msg) => console.log("from reseolve", msg))
//   .catch((msg) => console.log("from reject", msg));
