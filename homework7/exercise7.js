// ===== 習題7：JavaScript 練習 10 題 =====
console.log("===== 1. 物件屬性存取 =====");
const post = { id: 1, title: "Hello World", content: "Markdown content" };
console.log("點符號：", post.title);
console.log("中括號：", post["title"]);

console.log("\n===== 2. 物件解構賦值 =====");
const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };
const { title, content } = req.body;
console.log("title:", title, "content:", content);

console.log("\n===== 3. 陣列遍歷與字串拼接 =====");
const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";
posts.forEach(p => {
  html += <div>${p.t}</div>;
});
console.log(html);

console.log("\n===== 4. 字典與動態參數 =====");
const params = {};
params.id = 99;
console.log(params);

console.log("\n===== 5. Callback 函數傳參 =====");
function fetchData(id, callback) {
  const data = { id: id, status: "success" };
  callback(null, data);
}
fetchData(123, (err, data) => {
  if (err) console.error("Error:", err);
  else console.log("Data:", data);
});

console.log("\n===== 6. JSON 處理 =====");
const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';
const obj = JSON.parse(jsonStr);
console.log("tags[1]:", obj.tags[1]);

console.log("\n===== 7. 模擬資料庫查詢 =====");
function fakeGet(sql, params, callback) {
  callback(null, { title: "Fake Title" });
}
fakeGet("SELECT * FROM posts", [], (err, row) => {
  if (err) console.error("DB Error:", err);
  else console.log("row.title:", row.title);
});

console.log("\n===== 8. 樣板字串中的邏輯運算 =====");
let user = "Guest";
const welcomeHtml = <h1>Welcome, ${user ? user : "Stranger"}</h1>;
console.log(welcomeHtml);

console.log("\n===== 9. 陣列字串切片 =====");
const contents = [
  "Very long content here",
  "Another Very long content here",
  "3rd Very long content here"
];
const summaries = contents.map(text => text.slice(0, 10) + "...");
console.log(summaries);

console.log("\n===== 10. 錯誤優先回呼模式 =====");
function checkAdmin(role, callback) {
  if (role !== "admin") callback("Access Denied");
  else callback(null, "Welcome");
}
checkAdmin("user", (err, msg) => {
  if (err) console.error("Error:", err);
  else console.log(msg);
});
checkAdmin("admin", (err, msg) => {
  if (err) console.error("Error:", err);
  else console.log(msg);
});
