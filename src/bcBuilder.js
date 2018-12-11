const bankConfig = [
  ["435745","深圳发展银行","沃尔玛百分卡","16","贷记卡"],
  ["436718","建设银行","龙卡贷记卡公司卡金卡VISA","16","贷记卡"],
  ["436728","建设银行","龙卡普通卡VISA","16","准贷记卡"],
  ["436738","建设银行","龙卡贷记卡公司卡普通卡VISA","16","贷记卡"],
  ["436742","建设银行","龙卡储蓄卡","19","储蓄卡"],
  ["436745","建设银行","龙卡国际普通卡VISA","16","贷记卡"],
  ["436748","建设银行","龙卡国际金卡VISA","16","贷记卡"],
  ["436768","广东发展银行","广发信用卡","16","信用卡"],
  ["438088","中国银行","中银奥运信用卡个人卡","16","贷记卡"],
  ["438125","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["438126","中国工商银行","牡丹VISA白金卡","16","信用卡"],
  ["438588","兴业银行","兴业智能卡","18","借记卡"],
  ["438589","兴业银行","兴业智能卡","18","借记卡"],
  ["438600","上海银行","上海申卡IC","16","借记卡"],
  ["439188","招商银行","招商银行银行信用卡","16","信用卡"],
  ["439225","招商银行","VISA信用卡","16","信用卡"],
  ["439227","招商银行","VISA商务信用卡","16","信用卡"],
  ["442729","中信实业银行","中信国际借记卡","16","借记卡"],
  ["442730","中信实业银行","中信国际借记卡","16","借记卡"],
  ["451289","兴业银行","VISA信用卡","16","贷记卡"],
  ["451291","中国银行","长城国际卡(欧元卡)-个人金卡","16","贷记卡"],
  ["451804","工商银行","牡丹贷记卡","16","信用卡"],
  ["451804","工商银行","牡丹贷记卡","16","信用卡"],
  ["451810","工商银行","牡丹贷记卡","16","信用卡"],
  ["451810","工商银行","牡丹贷记卡","16","信用卡"],
  ["453242","建设银行","VISA准贷记卡","16","准贷记卡"],
  ["456351","中国银行","长城电子借记卡","19","借记卡"],
  ["456418","上海浦东发展银行","浦发银行VISA年青卡","16","贷记卡"],
  ["458060","工商银行","牡丹信用卡","16","信用卡"],
  ["458060","工商银行","牡丹信用卡","16","信用卡"],
  ["458071","工商银行","牡丹贷记卡","16","信用卡"],
  ["458071","工商银行","牡丹贷记卡","16","信用卡"],
  ["458123","交通银行","太平洋双币贷记卡VISA","16","贷记卡"],
  ["458124","交通银行","太平洋双币贷记卡VISA","16","贷记卡"],
  ["468203","招商银行","招商银行银行国际卡","16","借记卡"],
  ["472067","民生银行","民生国际卡","16","借记卡"],
  ["472068","民生银行","民生国际卡","16","借记卡"],
  ["479228","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["479229","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["481699","中国光大银行","阳光白金信用卡","16","贷记卡"],
  ["486466","上海银行","申卡贷记卡","16","贷记卡"],
  ["486493","兴业银行","VISA商务普卡","16","贷记卡"],
  ["486494","兴业银行","VISA商务金卡","16","贷记卡"],
  ["486497","中国光大银行","阳光商旅信用卡","16","贷记卡"],
  ["487013","广东发展银行","广发VISA信用卡","16","信用卡"],
  ["489592","中国建设银行","VISA白金/钻石信用卡","16","贷记卡"],
  ["489734","中国工商银行","牡丹欧元卡","16","贷记卡"],
  ["489735","中国工商银行","牡丹欧元卡","16","贷记卡"],
  ["489736","中国工商银行","牡丹欧元卡","16","贷记卡"],
  ["491020","农业银行","金穗信用卡","16","准贷记卡"],
  ["491020","农业银行","金穗信用卡","16","准贷记卡"],
  ["491031","建设银行","VISA准贷记金卡","16","准贷记卡"],
  ["491032","广东发展银行","广发信用卡","16","信用卡"],
  ["491040","交通银行","太平洋信用卡","16","信用卡"],
  ["493427","广东发展银行","广发信用卡","16","信用卡"],
  ["493878","中国银行","长城国际卡(港币卡)-个人金卡","16","贷记卡"],
  ["498451","上海浦东发展银行","上海浦东发展银行信用卡VISA白金卡","16","贷记卡"],
  ["504923","常州商业银行","月季卡","16","借记卡"],
  ["510529","工商银行","牡丹万事达国际借记卡","16","信用卡"],
  ["512315","中国银行","中银万事达信用卡员工普卡","16","贷记卡"],
  ["512316","中国银行","中银万事达信用卡个人普卡","16","贷记卡"],
  ["512411","中国银行","中银万事达信用卡员工金卡","16","贷记卡"],
  ["512412","中国银行","中银万事达信用卡个人金卡","16","贷记卡"],
  ["512425","招商银行","招商银行银行国际卡","16","借记卡"],
  ["512431","宁波市商业银行","汇通国际卡","16","贷记卡"],
  ["512466","民生银行","民生贷记卡","16","贷记卡"],
  ["512695","中国银行","长城国际卡(英镑卡)-个人普卡","16","贷记卡"],
  ["512732","中国银行","长城国际卡(英镑卡)-个人金卡","16","贷记卡"],
  ["514906","中信实业银行","中信贷记卡","16","贷记卡"],
  ["514957","中国银行","中银万事达信用卡员工白金卡","16","贷记卡"],
  ["514958","中国银行","中银万事达信用卡个人白金卡","16","贷记卡"],
  ["517636","民生银行","民生贷记卡","16","贷记卡"],
  ["518212","中信实业银行","中信贷记卡","16","贷记卡"],
  ["518364","广东发展银行","广发信用卡","16","信用卡"],
  ["518378","中国银行","长城人民币信用卡-个人金卡","16","准贷记卡"],
  ["518379","中国银行","长城人民币信用卡-员工金卡","16","准贷记卡"],
  ["518474","中国银行","长城人民币信用卡-专用卡普卡","16","准贷记卡"],
  ["518475","中国银行","长城人民币信用卡-员工普卡","16","准贷记卡"],
  ["518476","中国银行","长城人民币信用卡-个人普卡","16","准贷记卡"],
  ["518710","招商银行","MASTER信用卡","16","信用卡"],
  ["518718","招商银行","MASTER信用金卡","16","信用卡"],
  ["519412","农业银行","金穗贷记卡","16","信用卡"],
  ["519498","上海银行","双币种申卡贷记卡普通卡","16","贷记卡"],
  ["520082","农业银行","金穗贷记卡","16","信用卡"],
  ["520108","中信实业银行","中信贷记卡","16","贷记卡"],
  ["520131","上海银行","双币种申卡贷记卡金卡","16","贷记卡"],
  ["520152","广东发展银行","广发万事达信用卡","16","信用卡"],
  ["520169","交通银行","太平洋双币贷记卡MasterCard","16","贷记卡"],
  ["520194","宁波市商业银行","汇通国际卡","16","贷记卡"],
  ["520382","广东发展银行","广发万事达信用卡","16","信用卡"],
  ["521899","交通银行","太平洋双币贷记卡MasterCard","16","贷记卡"],
  ["522153","中国银行","长城国际卡(欧元卡)-个人普卡","16","贷记卡"],
  ["523036","兴业银行","万事达信用卡","16","贷记卡"],
  ["524011","招商银行","招商银行银行国际卡","16","借记卡"],
  ["524047","工商银行","牡丹万事达白金卡","16","信用卡"],
  ["524070","兴业银行","万事达信用卡","16","贷记卡"],
  ["524091","中国工商银行","牡丹海航信用卡个人金卡","16","信用卡"],
  ["524094","建设银行","乐当家金卡MASTER","16","借记卡"],
  ["524864","中国银行","长城信用卡","16","准贷记卡"],
  ["524865","中国银行","长城信用卡","16","准贷记卡"],
  ["525498","中国工商银行","牡丹海航信用卡个人普卡","16","信用卡"],
  ["525745","中国银行","长城信用卡","16","准贷记卡"],
  ["525746","中国银行","长城信用卡","16","准贷记卡"],
  ["526410","建设银行","乐当家银卡MASTER","16","借记卡"],
  ["526855","深圳市商业银行","深圳市商业银行信用卡","16","贷记卡"],
  ["527414","兴业银行","加菲猫信用卡","16","贷记卡"],
  ["528020","深圳市商业银行","深圳市商业银行信用卡","16","贷记卡"],
  ["528931","广东发展银行","广发万事达信用卡","16","信用卡"],
  ["528948","民生银行","民生贷记卡","16","贷记卡"],
  ["530970","工商银行","牡丹万事达信用卡","16","信用卡"],
  ["530980","工商银行","牡丹信用卡","16","信用卡"],
  ["530980","工商银行","牡丹信用卡","16","信用卡"],
  ["530990","工商银行","牡丹万事达信用卡","16","信用卡"],
  ["532420","建设银行","MASTER准贷记卡","16","准贷记卡"],
  ["532430","建设银行","龙卡普通卡MASTER","16","准贷记卡"],
  ["532450","建设银行","龙卡国际普通卡MASTER","16","贷记卡"],
  ["532458","建设银行","龙卡国际金卡MASTER","16","贷记卡"],
  ["535910","农业银行","金穗信用卡","16","准贷记卡"],
  ["535910","农业银行","金穗信用卡","16","准贷记卡"],
  ["535918","农业银行","金穗信用卡","16","准贷记卡"],
  ["537830","交通银行","太平洋信用卡","16","信用卡"],
  ["540297","中国银行","长城国际卡(港币卡)-个人普卡","16","贷记卡"],
  ["540838","中国银行","长城国际卡(美元卡)-个人普卡","16","贷记卡"],
  ["541068","中国银行","长城国际卡(美元卡)-个人金卡","16","贷记卡"],
  ["541709","广东发展银行","广发信用卡","16","信用卡"],
  ["543159","中国光大银行","第十八届世界足球锦标赛纪念卡","16","贷记卡"],
  ["544033","建设银行","MASTER准贷记金卡","16","准贷记卡"],
  ["545619","招商银行","万事达信用卡","16","信用卡"],
  ["545623","招商银行","万事达信用卡","16","信用卡"],
  ["545947","招商银行","万事达信用卡","16","信用卡"],
  ["547628","中国银行","长城国际卡(美元卡)-商务普卡","16","贷记卡"],
  ["547648","中国银行","长城国际卡(港币卡)-商务普卡","16","贷记卡"],
  ["547766","中国银行","长城人民币信用卡-单位普卡","16","准贷记卡"],
  ["547766","中国银行","长城万事达信用卡单位普卡","16","准贷记卡"],
  ["548259","工商银行","国际借记卡","16","信用卡"],
  ["548844","广东发展银行","广发信用卡","16","信用卡"],
  ["552245","建设银行","乐当家白金卡MASTER","16","借记卡"],
  ["552288","民生银行","民生贷记卡","16","贷记卡"],
  ["552534","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["552587","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["552599","农业银行","金穗贷记卡","16","信用卡"],
  ["552742","中国银行","长城公务卡","16","双币贷"],
  ["552794","广东发展银行","广发万事达信用卡","16","信用卡"],
  ["552801","建设银行","龙卡贷记卡公司卡普通卡MASTER","16","贷记卡"],
  ["552853","交通银行","太平洋双币贷记卡MasterCard","16","贷记卡"],
  ["553131","中国银行","长城公务卡","16","双币贷卡"],
  ["553242","建设银行","龙卡信用卡","18","信用卡"],
  ["556610","民生银行","民生贷记卡","16","贷记卡"],
  ["556617","中信实业银行","中信MASTERCARD人民币+美金双币贷记卡","16","贷记卡"],
  ["558360","工商银行","牡丹万事达信用卡","16","信用卡"],
  ["558730","农业银行","金穗贷记卡","16","信用卡"],
  ["558808","中国银行","长城国际卡(港币卡)-商务金卡","16","贷记卡"],
  ["558809","中国银行","长城国际卡(美元卡)-商务金卡","16","贷记卡"],
  ["558868","中国银行","长城人民币信用卡-单位金卡","16","准贷记卡"],
  ["558868","中国银行","中银万事达信用卡单位金卡","16","准贷记卡"],
  ["558894","广东发展银行","广发万事达信用卡","16","信用卡"],
  ["622491","星展银行","银联银行卡","16","借记卡"],
  ["622492","星展银行","银联港币银行卡","17","借记卡"],
  ["622492","星展银行","银联银行卡","16","借记卡"],
  ["622127","福建省农村信用社联合社","万通","19","借记卡"],
  ["622211","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622212","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622213","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622214","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622215","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622220","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622225","中国工商银行","准贷记卡","16","准贷记卡"],
  ["622230","中国工商银行","贷记卡","16","贷记卡"],
  ["622235","中国工商银行","贷记卡","16","贷记卡"],
  ["622240","中国工商银行","贷记卡","16","贷记卡"],
  ["622245","中国工商银行","贷记卡","16","贷记卡"],
  ["622250","交行太平洋卡中心","太平洋人民币贷记卡","16","贷记卡"],
  ["622251","交行太平洋卡中心","太平洋人民币贷记卡","16","贷记卡"],
  ["622252","交行太平洋卡中心","太平洋人民币贷记卡","16","贷记卡"],
  ["622253","交行太平洋卡中心","太平洋人民币贷记卡","16","贷记卡"],
  ["622254","交通银行","太平洋人民币准贷记卡","16","准贷记卡"],
  ["622258","交通银行","太平洋人民币借记卡","17","借记卡"],
  ["622259","交通银行","太平洋人民币借记卡","17","借记卡"],
  ["622260","交通银行","太平洋人民币借记卡","19","借记卡"],
  ["622261","交通银行","太平洋人民币借记卡","19","借记卡"],
  ["622280","建设银行","622280银联储蓄卡","19","借记卡"],
  ["622291","柳州市商业银行","龙城卡","18","借记卡"],
  ["622292","柳州市商业银行","龙城卡","18","借记卡"],
  ["622301","湖州市商业银行","百合卡","19","借记卡"],
  ["622302","佛山市禅城区农村信用联社","信通卡","16","借记卡"],
  ["622303","南京市商业银行","梅花贷记卡","16","贷记卡"],
  ["622305","南京市商业银行","梅花借记卡","16","借记卡"],
  ["622307","九江市商业银行","庐山卡","19","借记卡"],
  ["622308","昆明商业银行","春城卡","17","借记卡"],
  ["622310","西宁市商业银行","三江银行卡","17","借记卡"],
  ["622311","淄博市商业银行","金达借记卡","17","借记卡"],
  ["622312","徐州市郊农村信用合作联社","信通卡","16","借记卡"],
  ["622316","宁波市商业银行","汇通卡","16","借记卡"],
  ["622318","宁波市商业银行","汇通卡","16","贷记卡"],
  ["622319","山东农村信用联合社","信通卡","16","借记卡"],
  ["622321","台州市商业银行","大唐贷记卡","16","贷记卡"],
  ["622322","顺德农信社","恒通卡","16","借记卡"],
  ["622323","常熟农村商业银行","粒金借记卡","19","借记卡"],
  ["622324","江苏农信","圆鼎卡","19","借记卡"],
  ["622325","武汉市商业银行","九通卡","16","借记卡"],
  ["622327","徽商银行马鞍山分行","黄山卡","17","借记卡"],
  ["622328","东莞农村信用合作社","信通卡","19","借记卡"],
  ["622329","天津市农村信用社","信通借记卡","19","借记卡"],
  ["622331","天津市商业银行","津卡","18","借记卡"],
  ["622332","张家港市农村商业银行","一卡通","17","借记卡"],
  ["622333","东莞市商业银行","万顺通卡","16","借记卡"],
  ["622335","南宁市商业银行","桂花卡","16","借记卡"],
  ["622336","包头市商业银行","雄鹰卡","17","借记卡"],
  ["622337","连云港市商业银行","金猴神通借记卡","16","借记卡"],
  ["622338","焦作市商业银行","月季借记卡","19","借记卡"],
  ["622339","鄞州农村合作银行","蜜蜂借记卡","16","借记卡"],
  ["622340","徽商银行淮北分行","黄山卡","17","借记卡"],
  ["622341","江阴农村商业银行","合作借记卡","16","借记卡"],
  ["622342","攀枝花市商业银行","攀枝花卡","19","借记卡"],
  ["622343","佛山市三水区农村信用合作社","信通卡","19","借记卡"],
  ["622345","成都农信社","天府借记卡","19","借记卡"],
  ["622346","中国银行","人民币信用卡金卡","16","信用卡"],
  ["622347","中国银行","人民币信用卡普通卡","16","信用卡"],
  ["622348","中国银行","中银卡","16","借记卡"],
  ["622349","南洋商业银行","人民币信用卡金卡","16","信用卡"],
  ["622350","南洋商业银行","人民币信用卡普通卡","16","信用卡"],
  ["102033","广东发展银行","广发理财通","18",""],
  ["103000","农业银行","金穗借记卡","19","借记卡"],
  ["185720","昆明农联社","金碧卡","16","借记卡"],
  ["303781","中国光大银行","阳光爱心卡","16","贷记卡"],
  ["356888","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["356889","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["356890","招商银行","招商银行银行信用卡","16","贷记卡"],
  ["400360","中信实业银行","中信贷记卡","16","贷记卡"],
  ["400937","中国银行","长城国际卡(美元卡)-商务普卡","16","贷记卡"],
  ["400938","中国银行","长城国际卡(美元卡)-商务金卡","16","贷记卡"],
  ["400939","中国银行","长城国际卡(港币卡)-商务普卡","16","贷记卡"],
  ["400940","中国银行","长城国际卡(港币卡)-商务金卡","16","贷记卡"],
  ["400941","中国银行","长城国际卡(美元卡)-个人普卡","16","贷记卡"],
  ["400942","中国银行","长城国际卡(美元卡)-个人金卡","16","贷记卡"],
  ["402658","招商银行","两地一卡通","16","借记卡"],
  ["402673","上海银行","申卡贷记卡","16","贷记卡"],
  ["402791","工商银行","国际借记卡","16","信用卡"],
  ["403361","农业银行","金穗贷记卡","16","信用卡"],
  ["403391","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404117","农业银行","金穗贷记卡","16","信用卡"],
  ["404157","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404171","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404172","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404173","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404174","中信实业银行","中信贷记卡","16","贷记卡"],
  ["404738","上海浦东发展银行","上海浦东发展银行信用卡VISA普通卡","16","贷记卡"],
  ["404739","上海浦东发展银行","上海浦东发展银行信用卡VISA金卡","16","贷记卡"],
  ["405512","交通银行","太平洋互连卡","17","借记卡"],
  ["405512","交通银行","太平洋互连卡","17","借记卡"],
  ["406252","中国光大银行","阳光信用卡","16","贷记卡"],
  ["406254","中国光大银行","阳光信用卡","16","贷记卡"],
  ["406365","广东发展银行","广发VISA信用卡","16","信用卡"],
  ["407405","民生银行","民生贷记卡","16","贷记卡"],
  ["409665","中国银行","中银威士信用卡员工普卡","16","贷记卡"],
  ["409666","中国银行","中银威士信用卡个人普卡","16","贷记卡"],
  ["424109","中国银行","长城人民币信用卡-员工普卡","16","准贷记卡"],
  ["424110","中国银行","长城人民币信用卡-单位普卡","16","准贷记卡"],
  ["424111","中国银行","长城人民币信用卡-单位金卡","16","准贷记卡"],
  ["424902","中国银行","长城国际卡(美元卡)-白金卡","16","贷记卡"],
  ["425862","中国光大银行","阳光商旅信用卡","16","贷记卡"],
  ["427010","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427018","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427019","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427020","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427028","工商银行","国际借记卡","16","信用卡"],
  ["427029","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427038","工商银行","国际借记卡","16","信用卡"],
  ["427039","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427062","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427064","工商银行","牡丹VISA信用卡","16","信用卡"],
  ["427570","中国民生银行","民生国际借记卡","16","借(双币)"],
  ["427571","中国民生银行","民生国际借记卡","16","借(双币)"],
  ["428911","广东发展银行","广发信用卡","16","信用卡"],
  ["431502","华夏","华夏卡","16","借记卡"],
  ["431502","华夏","华夏卡","16","借记卡"],
  ["433666","中信实业银行","中信贷记卡","16","贷记卡"],
  ["433670","中信实业银行","中信借记卡","16","借记卡"],
  ["433680","中信实业银行","中信借记卡","16","借记卡"],
  ["434061","建设银行","乐当家金卡VISA","16","借记卡"],
  ["434062","建设银行","乐当家白金卡VISA","16","借记卡"],
  ["435744","深圳发展银行","沃尔玛百分卡","16","贷记卡"],
  ["622498","石家庄市商业银行","如意借记卡","19","借记卡"],
  ["622499","石家庄市商业银行","如意借记卡","19","借记卡"],
  ["622500","上海浦东发展银行","东方卡","16","信用卡"],
  ["622506","陕西省农村信用社联合社","陕西信合富泰卡","19","借记卡"],
  ["622509","高要市农村信用合作社联社","信通白金卡","19","借记卡"],
  ["622510","高要市农村信用合作社联社","信通金卡","19","借记卡"],
  ["622516","上海浦东发展银行","东方-轻松理财卡白金卡","16","贷记卡"],
  ["622517","上海浦东发展银行","东方-轻松理财卡普卡","16","贷记卡"],
  ["622518","上海浦东发展银行","东方-轻松理财卡钻石卡","16","贷记卡"],
  ["622519","上海浦东发展银行","东方-新标准准贷记卡","16","准贷记卡"],
  ["622579","招商银行银行","招商银行银行信用卡","16","贷记卡"],
  ["622580","招商银行银行","一卡通","16","借记卡"],
  ["622581","招商银行银行","招商银行银行信用卡","16","贷记卡"],
  ["622582","招商银行银行","招商银行银行信用卡","16","贷记卡"],
  ["622588","招商银行银行","一卡通","16","借记卡"],
  ["622598","招商银行银行","公司卡","16","借记卡"],
  ["622600","民生银行","民生信用卡","16","贷记卡"],
  ["622601","民生银行","民生信用卡","16","贷记卡"],
  ["622602","中国民生银行","民生银联白金信用卡","16","贷记卡"],
  ["622603","中国民生银行","民生银联商务信用卡","16","贷记卡"],
  ["622615","民生银行","民生借记卡","16","借记卡"],
  ["622617","中国民生银行","民生借记卡","16","借记卡"],
  ["622619","中国民生银行","民生借记卡","16","借记卡"],
  ["622622","中国民生银行","民生借记卡","16","借记卡"],
  ["622630","华夏银行","华夏卡","16","借记卡"],
  ["622631","华夏银行","华夏至尊金卡","16","借记卡"],
  ["622632","华夏银行","华夏丽人卡","16","借记卡"],
  ["622633","华夏银行","华夏万通卡","16","借记卡"],
  ["622650","中国光大银行","炎黄卡普卡","16","贷记卡"],
  ["622655","中国光大银行","炎黄卡白金卡","16","贷记卡"],
  ["622658","中国光大银行","炎黄卡金卡","16","贷记卡"],
  ["622660","光大银行","阳光卡","16","借记卡"],
  ["622678","中信实业银行信用卡中心","中信银联标准贷记卡","16","贷记卡"],
  ["622679","中信实业银行信用卡中心","中信银联标准贷记卡","16","贷记卡"],
  ["622680","中信实业银行信用卡中心","中信银联标准贷记卡","16","贷记卡"],
  ["622681","江西省农村信用社联合社","百福卡","19","借记卡"],
  ["622682","江西省农村信用社联合社","百福卡","19","借记卡"],
  ["622684","渤海银行","渤海银行公司借记卡","16","借记卡"],
  ["622688","中信实业银行信用卡中心","中信银联标准贷记卡","16","贷记卡"],
  ["622689","中信实业银行信用卡中心","中信银联标准贷记卡","16","贷记卡"],
  ["622690","中信实业银行","中信借记卡","16","借记卡"],
  ["622691","中信实业银行","中信借记卡","16","借记卡"],
  ["622692","中信实业银行","中信贵宾卡","16","借记卡"],
  ["622696","中信银行","中信理财宝金卡","16","借记卡"],
  ["622698","中信银行","中信理财宝白金卡","16","借记卡"],
  ["622700","建设银行","龙卡储蓄卡","19","借记卡"],
  ["622725","中国建设银行","龙卡准贷记卡","16","准贷记卡"],
  ["622728","中国建设银行","龙卡准贷记卡金卡","16","准贷记卡"],
  ["622750","中国银行澳门分行","人民币信用卡","16","信用卡"],
  ["622751","中国银行澳门分行","人民币信用卡","16","信用卡"],
  ["870100","浦东发展银行","东方卡","16","借记卡"],
  ["870300","浦东发展银行","东方卡","16","借记卡"],
  ["870400","浦东发展银行","东方卡","16","借记卡"],
  ["870500","浦东发展银行","东方卡","16","借记卡"],
  ["888000","贵阳市商业银行","甲秀卡","16","借记卡"],
  ["940056","郑州市商业银行","世纪一卡通","17","借记卡"],
  ["955880","工商银行","牡丹银联灵通卡-个人普卡","16","借记卡"],
  ["955881","工商银行","牡丹银联灵通卡-个人普卡","16","借记卡"],
  ["955882","工商银行","牡丹银联灵通卡-个人金卡","16","借记卡"],
  ["955888","工商银行","牡丹银联理财金卡","16","借记卡"],
  ["984301","上海浦东发展银行","东方卡","16","借记卡"],
  ["998800","深圳发展银行","发展卡","16","借记卡"],
  ["68580","广东发展银行","广发VISA信用卡","16","信用卡"]
];

((global, factory) => {
  // CommonJS
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory()
  // AMD / RequireJS
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    global.bcBuilder = factory()
  }
})(typeof window !== "undefined" ? window : this, () => {
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
  
  /**
   * 
   * @param {number} num 生成银行卡个数
   */
  const bcBuilder = (num) => {
    return Array.apply(null, {length: num}).map(bank => {
      const bankInfo = bankConfig[random(bankConfig.length)]
      let cardNo = bankInfo[0] +  Array.apply(null, {length: bankInfo[3] - bankInfo[0].length - 1}).map(() => random(10)).join('')
      cardNo = cardNo + getVerificationCode(cardNo)
      return [cardNo, bankInfo[1]+ '(' + bankInfo[4] +')']
    })
  }
  /**
   * 
   * @param {number} l 
   */
  const random = l => Math.floor(Math.random() * l)
  
  
  return bcBuilder
})
