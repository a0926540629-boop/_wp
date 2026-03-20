
for (let i = 1; i <= 9; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + "×" + i + "=" + (i*j) + " ";
  }
  console.log(line);
}
