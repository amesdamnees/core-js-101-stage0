/**
 * Returns the 'Fizz','Buzz' or original number
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

/**
 * Factorial n!
 */
function getFactorial(n) {
  return n <= 1 ? 1 : n * getFactorial(n - 1);
}

/**
 * Sum between n1 and n2 inclusive
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) sum += i;
  return sum;
}

/**
 * Triangle existence by triangle inequality
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Rectangles overlap (canvas coords)
 */
function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.left + rect1.width <= rect2.left ||
    rect2.left + rect2.width <= rect1.left ||
    rect1.top + rect1.height <= rect2.top ||
    rect2.top + rect2.height <= rect1.top
  );
}

/**
 * Point inside circle
 */
function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

/**
 * First non-repeated char
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

/**
 * Interval string
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return `${start}${min}, ${max}${end}`;
}

/**
 * Reverse string
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse integer
 */
function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}

/**
 * Luhn algorithm for credit card
 */
function isCreditCardNumber(ccn) {
  const digits = String(ccn).split('').map(Number);
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i];
    if (double) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
}

/**
 * Digital root
 */
function getDigitalRoot(num) {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((s, d) => s + Number(d), 0);
  }
  return num;
}

/**
 * Balanced brackets
 */
function isBracketsBalanced(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{', '>': '<' };
  for (const ch of str) {
    if ('([{<'.includes(ch)) {
      stack.push(ch);
    } else if (')]}>' .includes(ch)) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

/**
 * Convert to n-ary string
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Common directory path
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';
  const splitPaths = pathes.map(p => p.split('/'));
  let common = [];
  for (let i = 0; i < splitPaths[0].length; i++) {
    const part = splitPaths[0][i];
    if (splitPaths.every(p => p[i] === part)) {
      common.push(part);
    } else break;
  }
  return common.length ? common.join('/') + '/' : '';
}

/**
 * Matrix multiplication
 */
function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  const inner = m2.length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let k = 0; k < inner; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

/**
 * Tic-tac-toe evaluator
 */
function evaluateTicTacToePosition(position) {
  const lines = [
    // rows
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    // cols
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    // diagonals
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];
  for (const [a, b, c] of lines) {
    if (a && a === b && a === c) return a;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
