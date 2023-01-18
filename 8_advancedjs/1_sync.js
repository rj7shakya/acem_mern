console.log("first one ");

setTimeout(() => {
  console.log("timeout one");
}, 0);

console.log("third one");

// promise example

// const promiseFunction = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 10) {
//         resolve("success ,greater than 10");
//       } else {
//         reject("error,less than 10");
//       }
//     }, 2000);
//   });
// };

// promiseFunction(1)
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

const getListData = (number) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (1 === number) {
      resolve("great success!");
    } else {
      reject("ugh failed!");
    }
    // }, 1000);
  });
};

// getListData(10)
//   .then((res) => console.log("res", res))
//   .catch((err) => console.log("err", err));

//async await

const display = async () => {
  try {
    const response = await getListData(11);
    console.log("response ", response);
  } catch (err) {
    console.log("err", err);
  }
};

display();
