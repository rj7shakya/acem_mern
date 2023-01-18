// no need

// let list = [1, 2, 3, 4];

// // list.map((val) => {
// //   console.log("val", val);
// // });

// const newlist = list.map((val) => {
//   return <li>val</li>;
// });

// console.log("newlist", newlist);

// console.log("module", module);

// const logFunction = () => {
//   console.log("log fxn");
// };

// module.exports.logFunction = logFunction;

// const arr = [1, 2, -1, -2, -3];

// const arr2 = arr.map((i) => (i > 0 ? "pos" : "neg"));

// console.log(arr2);

let movies = [
  {
    id: 1,
    name: "avatar",
    imdb: 8,
  },
  {
    id: 2,
    name: "rrr",
    imdb: 7.5,
  },
  {
    id: 3,
    name: "kgf",
    imdb: 5,
  },
];

const newM = movies.map((i) => {
  return i?.name === "kgf"
    ? {
        ...i,
        imdb: 6,
      }
    : i;
});

console.log(newM);
