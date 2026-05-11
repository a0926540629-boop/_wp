// ===== 習題6：JavaScript 函數與參數練習 10 題 =====
console.log("===== 1. Callback 基礎實作 =====");
function mathTool(num1, num2, action) {
  return action(num1, num2);
}
const addResult = mathTool(10, 5, (a, b) => a + b);
const subResult = mathTool(10, 5, (a, b) => a - b);
console.log(addResult, subResult); // 15 5

console.log("\n===== 2. 匿名函數與立即執行 (IIFE) =====");
(function() {
  const count = 100;
  console.log("Count is: " + count);
})();

console.log("\n===== 3. 箭頭函數與陣列轉換 =====");
const prices = [100, 200, 300, 400];
const discountedPrices = prices.map(p => p * 0.8);
console.log(discountedPrices); // [80, 160, 240, 320]

console.log("\n===== 4. 陣列參數的「破壞性修改」 =====");
function cleanData(arr) {
  arr.pop();
  arr.unshift("Start");
}
let myData = [1, 2, 3];
cleanData(myData);
console.log(myData); // ["Start", 1, 2]

console.log("\n===== 5. 函數回傳函數 =====");
function multiplier(factor) {
  return n => n * factor;
}
const double = multiplier(2);
console.log(double(10)); // 20

console.log("\n===== 6. Callback 篩選器 =====");
function myFilter(arr, callback) {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}
const numbers = [1, 5, 8, 12];
const filtered = myFilter(numbers, num => num > 7);
console.log(filtered); // [8, 12]

console.log("\n===== 7. 箭頭函數處理物件 =====");
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 17}];
const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers); // [{ name: 'Alice', age: 25 }]

console.log("\n===== 8. 參數傳址陷阱 =====");
let listA = [1, 2];
let listB = [3, 4];
function process(a, b) {
  a.push(99);
  b = [100];
}
process(listA, listB);
console.log("listA:", listA); // [1, 2, 99]
console.log("listB:", listB); // [3, 4]

console.log("\n===== 9. 延遲執行的 Callback =====");
setTimeout(() => {
  const arr = ["Task", "Completed"];
  console.log(arr.join(" "));
}, 2000);

console.log("\n===== 10. 綜合應用：計算總價 =====");
function calculateTotal(cart, discountFunc) {
  const total = cart.reduce((sum, price) => sum + price, 0);
  return discountFunc(total);
}
const cart = [100, 200, 300];
const finalPrice = calculateTotal(cart, total => total - 50);
console.log(finalPrice); // 550
