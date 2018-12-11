((global, factory) => {
  // CommonJS
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory()
  // AMD / RequireJS
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    global.bcValidator = factory()
  }
})(typeof window !== "undefined" ? window : this, () => {
  /**
   * 
   * @param {string} bankcard
   * 支持 [14, 19] 位数字
   */
  const bcValidator = (bankcard) => {
    if (typeof bankcard !== 'string') return false
    if (bankcard.length < 14 || bankcard.length > 19) return false
    const waitToValidateCode = bankcard.slice(-1)
    const verificationCode = getVerificationCode(bankcard.substring(0, bankcard.length-1))
    return waitToValidateCode == verificationCode
  }
  /**
   * 
   * @param {string} bankcard 
   * 
   * 校验码为银行卡号最后一位，采用LUHN算法，亦称模10算法。计算方法如下：
   * 第一步：从右边第1个数字开始每隔一位乘以2；
   * 第二步： 把在第一步中获得的乘积的各位数字相加，然后再与原号码中未乘2的各位数字相加；
   * 第三步：对于第二步求和值中个位数求10的补数，如果个位数为0则该校验码为0。
   */
  const getVerificationCode = (bankcard) => {
    let reverseCardArr = bankcard.split('').reverse()
    // 偶数和
    const evenSum = reverseCardArr.filter((r, i) => i % 2 === 1).reduce((c, r) => +c + +r)
    // 奇数*2 各个位数和
    const oddSum = reverseCardArr.filter((r, i) => i % 2 === 0).map(r => r * 2).reduce((accumulator, currentValue) => accumulator +  +('' + currentValue).split('').reduce((a, c) => +a + +c ), 0)
    const verificationCode = 10 - ((oddSum + evenSum) % 10 || 10)
    return verificationCode
  }

  
  
  return bcValidator
})
