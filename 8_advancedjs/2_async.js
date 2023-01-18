const getHouses = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("houses is here");
      } else {
        reject("no houses");
      }
    }, 2000);
  });
};

getHouses()
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err));
