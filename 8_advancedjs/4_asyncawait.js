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

const show = async () => {
  try {
    const response = await getListData(2);
    console.log("response", response);
  } catch (err) {
    console.log("err", err);
  }
};

show();
console.log("smthg");
