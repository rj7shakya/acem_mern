//register name and group

const registerName = (name) => {
  return new Promise((resolve, reject) => {
    if (name.length > 3) {
      resolve(name);
    } else {
      reject("Name length should be greater than 3");
    }
  });
};

const registerClass = (name, group) => {
  return new Promise((resolve, reject) => {
    if (group === "react") {
      resolve(`${name} registered in ${group} group`);
    } else {
      reject("react group only available");
    }
  });
};

const check = async () => {
  // registerName("rajad")
  //   .then((res) => registerClass(res, "react"))
  //   .then((res) => console.log("res", res))
  //   .catch((err) => console.log("err", err));

  // registerName("rjshk")
  //   .then((name) => registerClass(name, "react"))
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log("err", err));
  try {
    const name = await registerName("rjshk");
    const res = await registerClass(name, "react");
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  }
};

check();
