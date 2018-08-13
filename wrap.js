const wrap = (line, maxLen) => {
  const arrOfLines = [];
  for (let i = 0; i < line.length; i += maxLen) {
    arrOfLines.push(line.slice(i, i + maxLen));
  }
  console.log(arrOfLines);
  return arrOfLines.join('\n');
};

module.exports = wrap;
