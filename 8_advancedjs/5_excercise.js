let result = (score) => {
  return new Promise((resolve, reject) => {
    console.log("Gathering results...");

    if (score > 50) resolve("Congratulations! You have Passed");
    else reject("You have failed");
  });
};

const show = async () => {
  try {
    const res = await result(40);
    console.log(res);
  } catch (error) {
    console.log("err", error);
  }
};

show();
