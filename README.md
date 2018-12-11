# bankcard-validator

  1、Luhn算法（模10算法）检验银行卡号正确性
  2、批量生成符合规则的银行卡号


## 安装

```bash
npm install bankcard-validator
```

```javascript
import * as vaildator from 'bankcard-validator';
```

or 

```javascript
<script type="text/javascript" src='pathTo/bcValidator.js'></script>
<script>
  /**
   * @param {string} bankcard 
   * /
  bcValidator('银行卡号') // => boolean
</script>
```

```javascript
<script type="text/javascript" src='pathTo/bcBuilder.js'></script>
<script>
  /**
   * @param {number} num 生成银行卡个数
   * /
  bcBuilder(20) // => [['6226322493250925', '华夏银行(借记卡)']]
</script>
```

## 参考资料

基于Luhn算法的银行卡卡号的格式校验（https://www.jianshu.com/p/193d8b84a6a1）