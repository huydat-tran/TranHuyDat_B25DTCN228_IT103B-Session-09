let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn Hàng E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

console.log(`Có đơn hàng âm không: ${revenues.some((p) => p < 0)}`);
console.log(`Tất cả trên 500: ${revenues.every((p) => p > 500)}`);

const netProfits = revenues.map((p) => p * 0.9);

console.log(netProfits);
