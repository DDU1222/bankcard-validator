import {expect} from 'chai';
import bcValidator from '../src/bcValidator';
import bcBuilder from '../src/bcBuilder';


describe('测试银行卡生成和校验', () => {
  bcBuilder(20).forEach(bank => {
    const bankNo = bank[0]
    const bankInfo = bank[1]
    it(`${bankNo} ${bankInfo}`, function () {
      expect(bcValidator(bankNo)).to.equal(true);
    })
  })
})