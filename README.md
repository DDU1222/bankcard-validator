# bankcard-validator

  1、Luhn算法（模10算法）检验银行卡号正确性
  2、批量生成符合规则的银行卡号


## Install

```bash
$ npm install bankcard-validator
```

```javascript
import bcValidator from 'bankcard-validator';

bcValidator('银行卡号')
```

or 

```javascript
<script type="text/javascript" src='pathTo/bcValidator.js'></script>
<script>
  /**
   * @param {String} bankcard 
   * @return {Boolean}
   * /
   
  bcValidator('银行卡号')
</script>
```

```javascript
<script type="text/javascript" src='pathTo/bcBuilder.js'></script>
<script>
  /**
   * @param {Number} num 生成银行卡个数
   * @return {Array} 如：[['6226322493250925', '华夏银行(借记卡)']]
   * /
  
  bcBuilder(20)
</script>
```

## Tests
```bash
$ npm test
```

## 参考资料

基于Luhn算法的银行卡卡号的格式校验（https://www.jianshu.com/p/193d8b84a6a1）