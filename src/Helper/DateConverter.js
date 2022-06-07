const DateConverter = (str) => {
  let dateDic = str.slice(-1)?.toLowerCase();

  let dateDicNum = str.match(/\d/g).join("");

  switch (true) {
    case dateDic === "m":
      return `${dateDicNum} oy`;
    case dateDic === "y":
      return `${dateDicNum} yil`;
    case dateDic === "d":
      return `${dateDicNum} kun`;
    default:
      return dateDicNum;
  }
};

export default DateConverter;
