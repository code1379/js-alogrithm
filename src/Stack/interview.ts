// 十进制转二进制
// 如何将 二进制 转换为 十进制？
// 举例，十进制 10 转换为 二进制
// 10 / 2 = 5 余 0
// 5  / 2 = 2 余 1
// 2  / 2 = 1 余 0
// 1  / 2 = 0 余 1

import { ArrayStack } from "./ArrayStack";
/**
  十进制：Decimal
  二进制：Binary
  余数：Remainder
 * @param val 
 */
function Dec2Bin(val: number) {
  let rawVal = val;
  const stack = new ArrayStack<number>();
  while (val > 0) {
    const remainder = val % 2;
    stack.push(remainder);
    val = Math.floor(val / 2);
  }
  let result = 0;
  while (!stack.isEmpty()) {
    const val = stack.pop()!;
    // 这里先pop了，所以size会变小 1，但是得到了正确的结果 hhhh
    result += val * Math.pow(10, stack.size);
  }
  return result;
}

// console.log("Dec2Bin(10)", Dec2Bin(10));
// console.log("Dec2Bin(35)", Dec2Bin(35));

// 有效的括号
// https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
// 解题思路：
// 遇到左括号，向栈内push右括号
// 遇到右括号，从栈内出栈，判断是否相等
// 判断栈中是否还有元素
function isValid(s: string): boolean {
  const stack = new ArrayStack();

  // 遍历 s 中所有的括号

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  if (!stack.isEmpty()) return false;

  return true;
}

console.log('isValid("()")', isValid("()"));
console.log('isValid("()[]{}")', isValid("()[]{}"));
console.log('isValid("(]")', isValid("(]"));
console.log('isValid("([])")', isValid("([])"));
console.log('isValid("()[]{}{")', isValid("()[]{}{"));
