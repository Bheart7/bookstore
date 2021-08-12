export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
};

export const currencyConv = (currency) => {
  // array of strings
  let arr = currency
    .toString()
    .split("")
    .filter((string) => string !== "$");
  let cur = Number(arr.join("")) * 118;
  return moneyFormatter(cur);
};

export const getNumber = (price) => {
  let tempCur = price.toString().replace("Rs.", "");
  let cur = Number(tempCur.replaceAll(",", ""));
  return cur;
};

export const moneyFormatter = (cur) => {
  let formattedMoney = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(cur);
  let nepali_cur = formattedMoney.toString().replace("₹", "Rs.");
  return nepali_cur;
};
