"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  // CommonJS
  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = factory();
    // AMD / RequireJS
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    global.bcValidator = factory();
  }
})(typeof window !== "undefined" ? window : undefined, function () {
  /**
   * 
   * @param {string} bankcard
   * 支持 [14, 19] 位数字
   */
  var bcValidator = function bcValidator(bankcard) {
    if (typeof bankcard !== 'string') return false;
    if (!/^\d{14,19}$/.test(bankcard)) return false;
    var waitToValidateCode = bankcard.slice(-1);
    var verificationCode = getVerificationCode(bankcard.substring(0, bankcard.length - 1));
    return waitToValidateCode == verificationCode;
  };
  /**
   * 
   * @param {string} bankcard 
   * 
   * 校验码为银行卡号最后一位，采用LUHN算法，亦称模10算法。计算方法如下：
   * 第一步：从右边第1个数字开始每隔一位乘以2；
   * 第二步： 把在第一步中获得的乘积的各位数字相加，然后再与原号码中未乘2的各位数字相加；
   * 第三步：对于第二步求和值中个位数求10的补数，如果个位数为0则该校验码为0。
   */
  var getVerificationCode = function getVerificationCode(bankcard) {
    var reverseCardArr = bankcard.split('').reverse();
    // 偶数和
    var evenSum = reverseCardArr.filter(function (r, i) {
      return i % 2 === 1;
    }).reduce(function (c, r) {
      return +c + +r;
    });
    // 奇数*2 各个位数和
    var oddSum = reverseCardArr.filter(function (r, i) {
      return i % 2 === 0;
    }).map(function (r) {
      return r * 2;
    }).reduce(function (accumulator, currentValue) {
      return accumulator + +('' + currentValue).split('').reduce(function (a, c) {
        return +a + +c;
      });
    }, 0);
    var verificationCode = 10 - ((oddSum + evenSum) % 10 || 10);
    return verificationCode;
  };

  return bcValidator;
});