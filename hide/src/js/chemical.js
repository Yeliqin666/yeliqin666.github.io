function chemicalChange(n){for(raw=n.split(""),h=pinyinUtil.getPinyin(n,"|",!0,!0).split("|"),ht=pinyinUtil.getPinyin(n,"|",!1,!0).split("|"),res="",i=0,len=h.length;i<len;i++)void 0!==elements[h[i]]?res+=elements[h[i]]:void 0!==elementsP[ht[i]]?res+=elementsP[ht[i]]:res+=raw[i];return res}elementsP={qing:"氢",hai:"氦",li:"𫟷",pi:"铍",peng:"硼",tan:"钽",dan:"氮",yang:"氧",fu:"氟",nai:"氖",na:"钠",mei:"镁",lv:"氯",gui:"硅",lin:"磷",liu:"硫",ya:"氩",jia:"镓",gai:"钙",kang:"钪",tai:"钛",fan:"钒",ge:"鿔",meng:"锰",tie:"铁",gu:"钴",nie:"镍",tong:"铜",xin:"锌",zhe:"锗",shen:"砷",xi:"𬭳",xiu:"溴",ke:"氪",ru:"铷",si:"锶",yi:"铱",gao:"锆",ni:"铌",mu:"钼",de:"锝",liao:"钌",lao:"铹",ba:"钯",yin:"铟",ti:"锑",di:"镝",dian:"碘",xian:"氙",se:"铯",bei:"钡",lan:"镧",shi:"铈",pu:"镤",nv:"钕",po:"钋",shan:"钐",you:"铀",ga:"钆",te:"铽",huo:"钬",er:"铒",diu:"铥",lu:"𬬻",ha:"铪",wu:"钨",lai:" 铼",e:"锇",bo:"铂",jin:"金",gong:"汞",ta:"铊",qian:"铅",bi:"铋",ai:"锿",dong:"氡",fang:"钫",lei:"镭",a:"锕",tu:"钍",bu:"钚",ju:"锔",pei:"锫",kai:"锎",fei:"镄",men:"钔",nuo:"锘",du:"𬭊",hei:"𬭶",lun:"𬬭",mo:"镆"},elements={"qīng":"氢","hài":"氦","lǐ":"锂","pī":"铍","péng":"硼","tàn":"碳","dàn":"氮","yǎng":"氧","fú":"氟","nǎi":"氖","nà":"钠","měi":"镁","lǚ":"铝","guī":"硅","lín":"磷","liú":"硫","lǜ":"氯","yà":"氩","jiǎ":"钾","gài":"钙","kàng":"钪","tài":"钛","fán":"钒","gè":"铬","měng":"锰","tiě":"铁","gǔ":"钴","niè":"镍","tóng":"铜","xīn":"锌","jiā":"镓","zhě":"锗","shēn":"砷","xī":"锡","xiù":"溴","kè":"氪","rú":"铷","sī":"锶","yǐ":"钇","gào":"锆","ní":"铌","mù":"钼","dé":"锝","liǎo":"钌","lǎo":"铑","bǎ":"钯","yín":"银","gé":"镉","yīn":"铟","tī":"锑","dì":"碲","diǎn":"碘","xiān":"氙","sè":"铯","bèi":"钡","lán":"镧","shì":"铈","pǔ":"镨","nǚ":"钕","pǒ":"钷","shān":"钐","yǒu":"铕","gá":"钆","tè":"铽","dī":"镝","huǒ":"钬","ěr":"铒","diū":"铥","yì":"镱","lǔ":"镥","hā":"铪","tǎn":"钽","wū":"钨","lái":"铼","é":"锇","yī":"铱","bó":"铂","jīn":"金","gǒng":"汞","tā":"铊","qiān":"铅","bì":"铋","pō":"钋","ài":"砹","dōng":"氡","fāng":"钫","léi":"镭","ā":"锕","tǔ":"钍","pú":"镤","yóu":"铀","ná":"镎","bù":"钚","méi":"镅","jū":"锔","péi":"锫","kāi":"锎","āi":"锿","fèi":"镄","mén":"钔","nuò":"锘","láo":"铹","lú":"𬬻","dù":"𬭊","xǐ":"𬭳","bō":"𬭛","hēi":"𬭶","mài":"鿏","dá":"𫟼","lún":"𬬭","fū":"𫓧","mò":"镆","lì":"𫟷"};