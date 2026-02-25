const names = ["Laptop", "Phone", "Keyboard", "Monitor", "Mouse"];
const prices = [1200, 800, 150, 600, 50];
const stocks = [10, 5, 0, 3, 20];

const premiumProducts = names.filter((names, i) => prices[i] > 500);
const hasOutOfStock = stocks.some((stock) => stock === 0);
const priceAbove100 = prices.every((price) => price > 100);
const totalValue = prices.reduce((total, price, i) => {
  return total + price * stocks[i];
}, 0);

const decreasePrices = () => {
  prices.forEach((price, i) => {
    prices[i] = +(price * 0.9).toFixed(2);
  });
};

const findProducts = () => {
  let keywords = prompt(`Nhập từ khóa`).toLowerCase().trim();
  let result = [];

  names.forEach((name, i) => {
    if (name[i].toLowerCase().includes(keywords))
      result.push(`${name} - ${prices[i]} - ${stocks[i]}`);
  });
  return result;
};

const report = () => {
  names.forEach((name, i) => {
    let status = stocks[i] > 0 ? "Còn hàng" : "Hết hàng";
    console.log(`${name} - ${status}`);
  });
};

let choice;
do {
  choice = Number(
    prompt(`===== MENU QUẢN LÝ KHO =====
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu
3. Phân tích giá trị vốn hóa
4. Giảm giá 10%
5. Tìm kiếm sản phẩm
6. Báo cáo tồn kho
7. Thoát
Chọn chức năng:`),
  );

  switch (choice) {
    case 1:
      console.log(premiumProducts);
      break;
    case 2:
      console.log(
        hasOutOfStock ? "Có sản phẩm hết hàng" : "Không có sản phẩm hết hàng",
      );
      console.log(
        priceAbove100 ? "Tất cả giá đều trên 100" : "Có sản phẩm giá dưới 100",
      );
      break;
    case 3:
      console.log(`TỔng giá trị kho là: ${totalValue}`);
      break;
    case 4:
      decreasePrices();
      alert(`Đã giảm giá tất cả sản phẩm trong kho 10% `);
      break;
    case 5:
      findProducts();
      if (result.length === 0) alert("Không tìm thấy sản phẩm");
      else console.log(result);
      break;
    case 6:
      report();
      break;
    case 7:
      alert(`Tạm biệt`);
      break;
    default:
      alert(`Chọn nhầm`);
  }
} while (choice !== 7);
