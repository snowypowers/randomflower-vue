const locale = 'zh'

const col = /[:：]/

const heroClasses = {
    '萨满': 8,
    '术士': 9,
    '潜行者': 7,
    '法师': 4,
    '圣骑士': 5,
    '德鲁伊': 2,
    '战士': 10,
    '牧师': 6,
    '猎人': 3,
    '中立': 12
}

const heroNumLookup = {
    '8': '萨满',
    '9': '术士',
    '7': '潜行者',
    '4': '法师',
    '5': '圣骑士',
    '2': '德鲁伊',
    '10': '战士',
    '6': '牧师',
    '3': '猎人',
    '12': '中立'
}

const prebuilts = [
    ["战士：快攻龙战",
        "2 蹩脚海盗",
        "1 海盗帕奇斯",
        "2 恩佐斯的副官",
        "2 阿莱克丝塔萨的勇士",
        "2 虚空幽龙史学家",
        "2 精灵龙",
        "2 炽炎战斧",
        "2 暴乱狂战士",
        "1 布莱恩·铜须",
        "2 血帆教徒",
        "2 库卡隆精英卫士",
        "2 暮光守护者",
        "2 奥金斧",
        "2 黑翼腐蚀者",
        "2 碧蓝幼龙",
        "2 龙人打击者"].join("\n")
    ,
    ["萨满：快攻萨满 0",
        "2 闪电箭",
        "1 海盗帕奇斯",
        "1 芬利·莫格顿爵士",
        "2 蹩脚海盗",
        "2 南海船工",
        "2 幽灵之爪",
        "2 坑道穴居人",
        "1 血法师萨尔诺斯",
        "2 火舌图腾",
        "2 青玉之爪",
        "1 大漩涡传送门",
        "2 图腾魔像",
        "2 野性狼魂",
        "2 熔岩爆裂",
        "2 投火无面者",
        "2 青玉闪电",
        "1 碧蓝幼龙",
        "1 艾雅·黑掌"].join("\n")
    ,
    ["战士：海盗战 1",
        "2 恩佐斯的副官",
        "2 升级！",
        "2 炽炎战斧",
        "2 英勇打击",
        "2 血帆教徒",
        "2 暴乱狂战士",
        "2 库卡隆精英卫士",
        "2 致死打击",
        "2 奥金斧",
        "1 芬利·莫格顿爵士",
        "1 海盗帕奇斯",
        "2 蹩脚海盗",
        "2 南海船工",
        "1 酸性沼泽软泥怪",
        "2 血帆袭击者",
        "2 恐怖海盗",
        "1 火车王里诺艾"].join("\n")
    ,
    ["萨满：中速青玉萨满",
        "1 海盗帕奇斯",
        "2 蹩脚海盗",
        "1 南海船工",
        "2 幽灵之爪",
        "1 血法师萨尔诺斯",
        "2 火舌图腾",
        "2 青玉之爪",
        "2 大漩涡传送门",
        "2 妖术",
        "2 法力之潮图腾",
        "2 青玉闪电",
        "2 青玉之灵",
        "2 锦鱼人水语者",
        "2 碧蓝幼龙",
        "1 艾雅·黑掌",
        "2 深渊魔物",
        "2 青玉酋长"].join("\n")
    ,
    ["潜行者：奇迹贼",
        "2 背刺",
        "2 伪造的幸运币",
        "2 伺机待发",
        "2 冷血",
        "2 隐藏",
        "1 海盗帕奇斯",
        "2 蹩脚海盗",
        "1 吹嘘海盗",
        "2 刺骨",
        "1 闷棍",
        "1 艾德温·范克里夫",
        "2 刀扇",
        "2 深渊探险",
        "1 暗影打击",
        "2 盗墓匪贼",
        "2 碧蓝幼龙",
        "1 火车王里诺艾",
        "2 加基森拍卖师"].join("\n")
    ,
    ["战士：海盗战 2",
        "2 升级！",
        "2 南海船工",
        "2 恩佐斯的副官",
        "1 芬利·莫格顿爵士",
        "2 蹩脚海盗",
        "2 炽炎战斧",
        "2 英勇打击",
        "2 血帆袭击者",
        "2 南海船长",
        "1 暴乱狂战士",
        "2 血帆教徒",
        "2 库卡隆精英卫士",
        "2 恐怖海盗",
        "2 致死打击",
        "2 奥金斧",
        "1 火车王里诺艾",
        "1 海盗帕奇斯"].join("\n")
    ,
    ["圣骑士：中速圣骑士",
        "1 芬利·莫格顿爵士",
        "2 风驰电掣",
        "2 狼人渗透者",
        "1 白银之枪",
        "2 火焰杂耍者",
        "2 污手街供货商",
        "2 苦痛侍僧",
        "2 奥尔多卫士",
        "2 银色骑手",
        "1 燃鬃·自走炮",
        "2 森金持盾卫士",
        "2 真银圣剑",
        "2 污手街惩罚者",
        "1 闹闹机器人",
        "2 二流打手",
        "2 银色指挥官",
        "1 唐·汉古",
        "1 提里奥·弗丁"].join("\n")
]

const cardnames = {"2":["野蛮咆哮","刃牙德鲁伊","战争古树","禁忌古树","荒野骑士","魔法乌鸦","青玉绽放","回收","激活","腐根","艾维娜","野蛮之击","遗忘之王库恩","治疗之触","自然之力","新月视界","埃隆巴克保护者","剧毒之种","妙手空空","达纳苏斯豹骑士","天神唤梦者","知识古树","玛洛恩","火山邪木","上古之神的小精灵","电镀机械熊仔","横扫","愤怒","荒野行者","利爪德鲁伊","林地树妖","骑乘迅猛龙","尖牙德鲁伊","月火术","范达尔·鹿盔","生命之树","野性之怒","星界沟通","自然印记","兔妖教头","野性之力","星火术","自然平衡","青玉护符","塞纳留斯","月光林地传送门","丛林守护者","泥潭守护者","烈焰德鲁伊","滋养","机械野兽","卡拉克西织珀者","亚煞极印记","狂野争斗者","乌鸦神像","野性印记","野性成长","撕咬","腐化灰熊","丛林枭兽","活体根须","青玉巨兽","爪击","黑暗私语","玉莲印记","星辰坠落","丛林之魂","展览馆守卫","黑暗鸦人"],"3":["角斗士的长弓","探险帽","酸喉","召唤宠物","眼镜蛇射击","快速射击","狂野怒火","寄生恶狼","误导","暴龙王克鲁什","驯兽师","慈祥的外婆","金手指卡努克","走私货物","结网蛛","雄斑虎","腐肉虫","长鬃草原狮","驮运科多兽","爆炸陷阱","狼人追猎者","食腐土狼","百兽之王","子弹上膛","饥饿的秃鹫","金刚刃牙兽","搜寻猎物","毒蛇陷阱","神秘女猎手","强风射击","穴居人驯兽师","鹰角弓","奥术射击","猎人印记","哈霍兰公主","天降蛛群","森林狼","爆炸射击","炽炎蝙蝠","豺狼人土枪手","多重射击","恐鳞","重型刃弩","暴躁的牧羊人","动物伙伴","狙击","巨型沙虫","毒镖陷阱","豹子戏法","寄生感染","兽群呼唤","追踪术","致命射击","关门放狗","假死","大漠沙驼","加兹瑞拉","皇家雷象","捕熊陷阱","神勇弓箭手","瘟疫鼠群","苔原犀牛","杀戮命令","熔火怒犬","热砂港狙击手","冰冻陷阱","照明弹","食人鱼喷枪","军备宝箱","兽栏大师"],"4":["冰锥术","考达拉幼龙","麦迪文的残影","冰冻药水","罗宁","火山药水","碎雪机器人","肯瑞托法师","虚灵巫师","地精炎术师","冰霜新星","凛风巫师","炎爆术","龙息术","狂热铸魂者","老旧的火把","蒸发","邪教女巫","变形术","巫师学徒","英雄之魂","炎枪术","奥术冲击","嗜法者","墨水大师索莉娅","暮光烈焰召唤者","烈焰轰击","寒冰护体","法力浮龙","镜像实体","火球术","轮回","火妖","尤格-萨隆的仆从","小个子扰咒师","虚灵奥术师","癫狂的唤冰者","寒冰屏障","暗金教水晶侍女","变形药水","麦迪文的男仆","烈焰巨兽","冰爆","变形术：野猪","禁忌烈焰","奥术智慧","镜像","暴风雪","复活的铠甲","阿诺玛鲁斯","火焰之地传送门","强能奥术飞弹","魔爆术","寒冰箭","水元素","奥术飞弹","大法师安东尼达斯","扰咒术","法术反制","达拉然铁骑士","无面召唤者","冰枪术","呓语魔典","不稳定的传送门","暗金教侍从","煤烟喷吐装置","复制","烈焰风暴","秘法宝典"],"5":["污手街守护者","提里奥·弗丁","军需官","禁忌治疗","邪鳍审判者","神圣之力","愤怒之锤","审判","伯瓦尔·弗塔根","海象人龟骑士","鱼人骑士","精英对决","齿轮光锤","崇高牺牲","奥达曼守护者","受祝福的勇士","风驰电掣","救赎","作战动员","王者祝福","污鳞劫掠者","污手街供货商","银月城传送门","力量祝福","光明圣印","纯洁者耶德瑞克","圣光的正义","血色净化者","以眼还眼","生而平等","严正警戒","英勇圣印","白银之枪","钴制卫士","圣光术","真银圣剑","黑暗曙光","神恩术","海象人执法官","燃鬃·自走炮","夜魇骑士","战术撤离","列王守卫","护盾机器人","争强好胜","奉献","神秘挑战者","谦逊","复仇之怒","复仇","光耀之主拉格纳罗斯","神圣愤怒","战马训练师","亡者归来","龙王配偶","圣疗术","公正之剑","智慧祝福","保护之手","象牙骑士","集结之刃","三教九流","银色保卫者","污手街惩罚者","无私的英雄","惩黑除恶","忏悔","夜色镇执法官","奥尔多卫士"],"6":["控心术","暗言术：痛","快速治疗","埋葬","龙息药水","光明之泉","精神控制","宴会牧师","暗影形态","暗影投弹手","银色神官帕尔崔丝","沃金","真言术：耀","光耀之子","神圣勇士","先知维伦","真言术：盾","神圣惩击","暗影打击装甲","强效治疗药水","策反","博物馆馆长","极恶之咒","心灵震爆","禁忌畸变","龙眠教官","龙人侦测者","心灵之火","暮光雏龙","暮光暗愈者","缩小药水","暗金教鸦人祭司","暗言术：灭","秘教暗影祭司","高级修理机器人","暗影狂乱","暗影之握","暗言术：骇","传令官沃拉兹","群体驱散","神圣新星","暗影魔","缩小射线工程师","神圣之灵","思维窃取","净化","疯狂药水","暗影子嗣","黑暗教徒","法力晶簇","暗金教窃歌者","治疗之环","迷乱","圣殿执行者","圣光炸弹","北郡牧师","神圣之火","奥金尼灵魂祭司","真言术：触","缚链者拉兹","玛瑙主教","复活术","变幻之影","沉默","兜帽侍僧","维伦的恩泽","夜色镇炼金师","纳鲁之光","心灵视界"],"7":["幽暗城商贩","玉莲帮刺客","克苏恩之刃","虚灵商人","迪菲亚头目","夜幕奇袭","伪造的幸运币","暗影步","深渊探险","暗影打击","暗影大师","耐心的刺客","齿轮大师的扳手","走私商贩","艾德温·范克里夫","隐藏","伺机待发","青玉游荡者","阿努巴拉克","食人魔忍者","暗中破坏","幽暗城勇士","独眼欺诈者","钢铁武道家","刺客之刃","冷血","刀扇","毁灭之刃","影踪骁骑兵","背叛","伪装大师","深渊巨蟒","南海畸变船长","地精自动理发装置","石化迅猛龙","锈水海盗","阿努巴尔伏击者","剑刃乱舞","吹嘘海盗","闷棍","菊花茶","军情七处特工","背刺","青玉飞镖","黑铁潜藏者","致命餐叉","刺骨","土地精海盗","淬毒利刃","消失","窃贼","毒心者夏克里尔","加里维克斯","毒刃","影袭","劫持者","修补匠的磨刀油","剽窃","加基森摆渡人","裂颅之击","危机四伏","暗影施法者","暗影狂怒者","疾跑","刺杀","致命药膏","盗墓匪贼","收集者沙库尔","执刃教徒"],"8":["冰霜震击","升腾者海纳泽尔","白眼大侠","锦鱼人水语者","先祖召唤","顽石元素","活力图腾","雷霆崖勇士","坑道穴居人","玉莲帮幻术师","神奇四鱼","转生","先祖治疗","沙鳞灵魂行者","风怒","自动漩涡打击装置","元素毁灭","唤雾者伊戈瓦尔","大地震击","青玉闪电","火舌图腾","砂槌萨满祭司","永恒哨卫","投火无面者","雷铸战斧","退化","妖术","海象人图腾师","鱼人恩典","石化武器","熔岩震击","风语者","进化","灌魔之锤","进化之主","毁灭之锤","先到先得","野性狼魂","风领主奥拉基尔","治疗波","大漩涡传送门","动力战锤","视界术","叉状闪电","青玉之爪","法力之潮图腾","无羁元素","深渊魔物","原始融合","先祖知识","幽灵之爪","闪电箭","图腾之力","火元素","雷暴术","闪电风暴","火焰驱逐者","邪恶的巫医","嗜血","青玉酋长","暮光神锤","尘魔","图腾魔像","德莱尼图腾师","耐普图隆","连环爆裂","土元素","先祖之魂","熔岩爆裂"],"9":["深渊领主","夜色镇议员","恶魔之火","虚空碾压者","召唤传送门","弃暗投明","禁忌仪式","恶魔融合","爆晶药水","邪能火炮","恐怖末日守卫","附灵术","狂乱传染","着魔村民","虚空恐魔","灵魂虹吸","无证药剂师","恐惧战马","海魔钉刺者","恶魔之心","小鬼爆破","末日降临","地狱烈焰","腐蚀术","遗物搜寻者","吸取生命","黑市摊贩","心能魔像","邪火药水","漂浮观察者","暗影箭","黑暗契约","魔瘾结晶者","威尔弗雷德·菲兹班","愤怒卫士","恶魔之怒","灵魂之火","魅魔","力量的代价","血怒药水","空灵召唤者","鲜血小鬼","小鬼骑士","牺牲契约","暗影烈焰","拉法姆的诅咒","痛苦女王","加拉克苏斯之拳","扭曲虚空","感知恶魔","玛尔加尼斯","加拉克苏斯大王","虚空行者","古加尔","唤魔者克鲁尔","小鬼首领","恐惧地狱火","渡魂者","暗色炸弹","渊狱惩击者","暗金教恶魔商贩","烈焰小鬼","玛克扎尔的小鬼","镀银魔像","夜色镇图书管理员","末日灾祸","恶魔卫士","末日守卫","死亡缠绕"],"10":["废旧螺栓机甲","污手玩具商","钢铁战蝎","狂暴","严酷的监工","库卡隆精英卫士","冲锋","炽炎战斧","战斗怒火","公辩律师","上古之神护卫","凶暴猿猴","命令怒吼","铁炉堡传送门","污手街典当师","诅咒之刃","愚者之灾","血吼","复仇打击","钢铁触须","斩杀","血蹄勇士","猛击","战歌指挥官","瓦里安·乌瑞恩","格罗玛什·地狱咆哮","血帆教徒","猛犸人头领","掷斧者","失窃物资","重型攻城战车","化血为脓","国王护卫者","格斗陪练师","怒火中烧","怒袭","阿拉希武器匠","黄铜指虎","马尔考罗克","顺劈斩","战斗机器人","升级！","铸甲师","兽人铸甲师","保卫国王","霍巴特·钩锤","鱼死网破","弹射之刃","黑曜石毁灭者","阿莱克丝塔萨的勇士","死亡之咬","盾牌猛击","食人魔战槌","破海者","盾牌格挡","致死打击","绝命乱斗","旋风斩","恩佐斯的副官","盛气凌人","暴乱狂战士","加固","英勇打击","苦战傀儡","暴虐食尸鬼","奥金斧","奥格瑞玛狼骑士","盾甲侍女","重碾"],"12":["鱼人招潮者","微型战斗机甲","机械幼龙技工","奥术巨人","日怒保卫者","银月城卫兵","施法者克星X-21","蜘蛛坦克","精灵龙","酸性沼泽软泥怪","人气选手","大富翁比尔杜","奥秘吞噬者","角斗场主管","宝石甲虫","负伤剑圣","霜狼步兵","山谷之王穆克拉","银色指挥官","梦魇之龙","狂野炎术师","野猪骑士蕾瑟兰","圣光护卫者","后街男巫","A3型机械金刚","索瑞森大帝","霜狼督军","女警萨莉","砰砰博士","鬼灵爬行者","白银之手骑士","惊骇恐魔","征募官","淡水鳄","活动假人","暮光守护者","血帆袭击者","郭雅夫人","迦顿男爵","畸变狂战士","沉默的骑士","食人魔法师","低阶侍从","诺兹多姆","克洛玛古斯","斯尼德的伐木机","瑟玛普拉格","阿莱克丝塔萨","暴怒的狼人","雷德·黑手","异种群居蝎","白银之手教官","火车王里诺艾","奥术畸体","紫罗兰教师","冰喉","黑翼腐蚀者","发条巨人","龙蛋","玛里苟斯","重装佣兵","野猪骑士斯派克","加基森名媛","任务达人","牛头人战士","小鬼召唤师","绿洲钳嘴龟","玛克扎尔王子","机械动物管理员","格尔宾·梅卡托克","疯狂投弹者","飞行器","魔古山守望者","鱼人杀手蟹","费尔根","碧蓝幼龙","哈里森·琼斯","黑水海盗","尼鲁巴蛛网领主","狂奔科多兽","鸟禽守护者","恩佐斯","恩佐斯的触须","火焰杂耍者","冰霜暴怒者","诡异的雕像","愤怒的小鸡","死亡之翼","纳迦海巫","克苏恩","馆长","街头调查员","瑞文戴尔男爵","巨型蟾蜍","裂地触须","发条骑士","亚煞极","莫罗斯","畸变的龙鹰","亡灵药剂师","赛场医师","恐怖的奴隶主","丛林猎豹","血法师萨尔诺斯","俘获的冰虫","青玉之灵","机械跃迁者","肉用僵尸","血骑士","上古看守者","明光祭司","海地精猎手","无面操纵者","污手街情报员","魅影歹徒","远古暗影","圣光勇士","勇敢的记者","毒性污水软泥怪","米尔豪斯·法力风暴","狗头人地卜师","集合石","尤格-萨隆","憎恶","庆典司仪","小个子驱魔者","纳克萨玛斯之影","格鲁尔","零食商贩","蹒跚的食尸鬼","疯狂的科学家","龙人打击者","科多兽骑手","石牙野猪","麦迪文","火山幼龙","回收机器人","熔核巨人","破法者","赫米特·奈辛瓦里","奥能铁匠","大师级枪骑士","战利品贮藏者","魔能机甲","暗金教炼金师","烈日行者","海盗帕奇斯","玉莲帮密探","帝王眼镜蛇","鲁莽火箭兵","冰霜巨人","沟渠潜伏者","船载火炮","布林顿3000型","暮光尊者","阿努比萨斯哨兵","虚灵大盗拉法姆","分裂软泥怪","年轻的酒仙","侏儒发明家","克瓦迪尔劫掠者","厄运召唤者","藏宝海湾保镖","暮光幼龙","阴暗渔夫纳特","杂耍吞法者","化学怪人","巨型独眼怪","墓穴蜘蛛","狂热的新兵","团队领袖","哀嚎的灵魂","重甲战马","十字军统领","展览馆法师","卡扎库斯","作战傀儡","精灵弓箭手","巴内斯","绿皮船长","游学者周卓","萨尔玛先知","冰风雪人","穆克拉","托什雷","穆戈尔的勇士","榴弹投手","暗鳞治愈者","深渊滑行者索苟斯","鱼人领军","维克洛尔大帝","报警机器人","蛛魔先知","小个子法师","大法师","芬利·莫格顿爵士","管理者埃克索图斯","波戈蒙斯塔","虚灵勇士萨兰德","龙人巫师","魔瘾者","风险投资公司雇佣兵","死神4000型","发条侏儒","持盾卫士","暮光召唤师","猢狲医者","巫医","奈法利安","纳特·帕格","银背族长","碎石穴居人","恶毒铁匠","野猪骑士塔纳利","铸剑师","黑龙领主死亡之翼","艾雅·黑掌","霍格","送葬者","奥妮克希亚","进化的狗头人","侏儒实验技师","雷诺·杰克逊","阿古斯防御者","海巨人","闪金镇步兵","橱柜蜘蛛","剃刀猎手","克苏恩的侍从","伊利丹·怒风","腐肉食尸鬼","诺格弗格市长","狼人欺诈者","怒鳍猎潮者","伊莉斯·逐星","飞刀杂耍者","诺莫瑞根步兵","二流打手","猩红法力浮龙","吹箭鱼人","斯克拉姆狂热者","雷矛特种兵","上古之神先驱","岩肤石像鬼","地精工兵","邪灵拷问者","博尔夫·碎盾","石腭穴居人壮汉","毒沼爬行者","西风灯神","精神控制技师","食人魔勇士穆戈尔","冰霜元素","腐化先知","功夫大师","破碎残阳祭司","老式治疗机器人","比斯巨兽","南海船工","邪兽人噬魂魔","克尔苏加德","王牌猎人","饥饿的巨龙","强化机器人","黑骑士","蓝腮战士","颤地者特罗格佐尔","老瞎眼","持枪侍从","龙鹰骑士","侏儒变形师","杂耍小鬼","鱼人袭击者","艾露恩的女祭司","冰吼","石化魔暴龙","百变泽鲁斯","铁炉堡火枪手","攻城车","载人收割机","狼骑兵","希尔瓦娜斯·风行者","后院保镖","自负的演员","鼬鼠挖掘工","虚空幽龙史学家","疯狂爆破者","苦痛侍僧","船长的鹦鹉","齿轮大师","雪地狗头人","穿刺者戈莫克","受伤的克瓦迪尔","血帆海盗","赛场观众","鱼人宝宝","摇摆的俾格米","斯塔拉格","山岭巨人","破坏者","米米尔隆的头部","飞火流星·芬杰","黑翼技师","无面巨兽","寒光先知","鱼人猎潮者","基维斯","闹闹机器人","森金持盾卫士","石拳食人魔","银色侍从","血沼迅猛龙","要塞指挥官","迪菲亚清道夫","蹩脚海盗","湖之仙女","艾尔文灾星霍格","暗鳞先知","邪灵召唤师","天空上尉库拉格","远古造物之血","暮光地卜师","年迈的酒仙","沼泽爬行者","爆破小队","淤泥喷射者","布莱恩·铜须","熔火恶犬","白骨卫士军官","末日预言者","岩浆暴怒者","午夜噩龙","载人飞天魔像","蛛魔之卵","死亡领主","光明邪使菲奥拉","幼龙鹰","克苏恩的信徒","银色骑手","竞技场主宰","凯恩·血蹄","恩佐斯的子嗣","小个子召唤师","科赞秘术师","拉文霍德刺客","淤泥践踏者","洛欧塞布","热心的酒保","犯罪高手","炎魔之王拉格纳罗斯","拉希奥","古拉巴什狂暴者","击剑教头","卑劣的脏鼠","疯狂的炼金师","法力怨魂","黑铁矮人","年迈的法师","加兹鲁维","“鲨鱼”加佐","工匠镇技师","加基森拍卖师","纳迦海盗","末日践行者","银色警卫","疯狂的信徒","扭曲的狼人","远古之树","书卷之龙","寒光智者","鬼灵骑士","唐·汉古","奥秘守护者","裁决者图哈特","伊瑟拉","竞技推广员","血色十字军战士","恐怖海盗","怨影狂怒者","黑暗邪使艾蒂丝","被感染的贮藏者","骷髅骑士","大胖","阿曼尼狂战士","达拉然法师","北海海怪","符文蛋","污手街走私者","工程师学徒","暮色野猪","诅咒教派领袖","铁鬃灰熊","叫嚣的中士","暴风城骑士","麦田傀儡","吵吵机器人","风怒鹰身人","狼人渗透者","黑暗低语者","迷失的陆行鸟","恐狼前锋","舞动之剑","精英牛头人酋长","暗金教信使","工匠大师欧沃斯巴克","腐化治疗机器人","迈克斯纳","大地之环先知","夜刃刺客","无面蹒跚者","铁喙猫头鹰","机械雪人","荆棘谷猛虎","穆克拉的勇士","年轻的女祭司","格斗士","被感染的牛头人","南海船长","黑金大亨","小精灵","自爆绵羊","熟练的水手","强袭坦克","暴风城勇士","发条强盗机器人","加基森枪骑士","邪教药剂师","紫罗兰法师","麻风侏儒","穴居人强盗","食人魔步兵","奥术傀儡"]}

const ngaLookup = {
    "2433": "猛击",
    "3471": "游学者周卓",
    "19078": "血沼迅猛龙",
    "29444": "背刺",
    "42673": "铁喙猫头鹰",
    "47048": "黑暗鸦人",
    "65460": "深渊魔物",
    "83623": "兔妖教头",
    "85802": "纳克萨玛斯之影",
    "96468": "腐化先知",
    "99356": "集结之刃",
    "118699": "龙鹰骑士",
    "119854": "雷矛特种兵",
    "121769": "基维斯",
    "137536": "上古之神先驱",
    "140789": "阿古斯防御者",
    "154564": "毒性污水软泥怪",
    "159995": "狂乱传染",
    "178596": "克洛玛古斯",
    "180683": "烈日行者",
    "202413": "博尔夫·碎盾",
    "204875": "魔能机甲",
    "205250": "颤地者特罗格佐尔",
    "206687": "元素毁灭",
    "210977": "零食商贩",
    "238325": "魔瘾结晶者",
    "251638": "上古看守者",
    "259349": "火元素",
    "287601": "严正警戒",
    "297149": "激活",
    "298020": "冰冻陷阱",
    "305348": "水元素",
    "307801": "利爪德鲁伊",
    "331564": "鱼人猎潮者",
    "336917": "致命药膏",
    "338805": "禁忌古树",
    "345111": "任务达人",
    "347502": "苦战傀儡",
    "347829": "吵吵机器人",
    "361600": "虚灵勇士萨兰德",
    "365883": "暗影烈焰",
    "373248": "真言术：触",
    "377977": "碎石穴居人",
    "379070": "瑟玛普拉格",
    "397955": "天神唤梦者",
    "422508": "智慧祝福",
    "422559": "走私货物",
    "430055": "唐·汉古",
    "433604": "年迈的酒仙",
    "436913": "热砂港狙击手",
    "441717": "飞火流星·芬杰",
    "450655": "高级修理机器人",
    "465516": "青玉之灵",
    "466839": "战争古树",
    "473096": "狂野炎术师",
    "506338": "上古之神的小精灵",
    "527961": "老瞎眼",
    "554200": "烈焰小鬼",
    "595531": "格罗玛什·地狱咆哮",
    "604417": "刃牙德鲁伊",
    "612283": "齿轮光锤",
    "616329": "小鬼召唤师",
    "620908": "疯狂爆破者",
    "633494": "穆戈尔的勇士",
    "645582": "街头调查员",
    "649163": "俘获的冰虫",
    "652783": "荆棘谷猛虎",
    "653492": "藏宝海湾保镖",
    "657641": "怒袭",
    "659774": "纳鲁之光",
    "673425": "黑暗契约",
    "682096": "竞技推广员",
    "700685": "烈焰轰击",
    "706566": "光耀之子",
    "719825": "送葬者",
    "730203": "阿莱克丝塔萨",
    "740609": "要塞指挥官",
    "764983": "卡扎库斯",
    "775844": "妙手空空",
    "778696": "窃贼",
    "779873": "团队领袖",
    "783189": "龙人侦测者",
    "799344": "奈法利安",
    "809994": "神圣之火",
    "824323": "管理者埃克索图斯",
    "841121": "熟练的水手",
    "847331": "极恶之咒",
    "855041": "暮光地卜师",
    "859287": "丛林守护者",
    "872294": "风驰电掣",
    "883689": "剽窃",
    "885383": "三教九流",
    "902095": "神秘女猎手",
    "907217": "暗影打击装甲",
    "908499": "着魔村民",
    "909896": "炽炎蝙蝠",
    "917396": "龙王配偶",
    "918958": "闷棍",
    "923563": "痛苦女王",
    "923800": "破海者",
    "926279": "小鬼首领",
    "928791": "工匠镇技师",
    "938796": "先祖之魂",
    "940231": "冰爆",
    "946598": "心灵之火",
    "961649": "神圣之力",
    "964509": "沙鳞灵魂行者",
    "964907": "功夫大师",
    "967621": "变形药水",
    "971799": "镀银魔像",
    "986401": "石化迅猛龙",
    "997616": "钴制卫士",
    "1009486": "火焰驱逐者",
    "1013949": "载人收割机",
    "1014946": "亚煞极",
    "1016227": "活体根须",
    "1016271": "快速射击",
    "1017805": "工匠大师欧沃斯巴克",
    "1017861": "象牙骑士",
    "1030620": "雷霆崖勇士",
    "1044034": "伊莉斯·逐星",
    "1071276": "食腐土狼",
    "1071877": "恶魔卫士",
    "1077107": "黑骑士",
    "1113269": "驮运科多兽",
    "1114237": "黑曜石毁灭者",
    "1125308": "吹箭鱼人",
    "1126330": "肯瑞托法师",
    "1145778": "石化魔暴龙",
    "1181988": "青玉巨兽",
    "1183821": "进化",
    "1208632": "犯罪高手",
    "1217577": "魔爆术",
    "1218800": "恶魔之心",
    "1235158": "误导",
    "1237913": "剑刃乱舞",
    "1257362": "黑暗低语者",
    "1281948": "永恒哨卫",
    "1290391": "兽人铸甲师",
    "1296706": "绿洲钳嘴龟",
    "1297159": "圣光的正义",
    "1319474": "土地精海盗",
    "1323871": "伪造的幸运币",
    "1330785": "岩浆暴怒者",
    "1337587": "消失",
    "1345870": "麦迪文",
    "1348272": "勇敢的记者",
    "1363726": "锈水海盗",
    "1382094": "伊利丹·怒风",
    "1390380": "深渊巨蟒",
    "1391268": "鬼灵爬行者",
    "1411877": "宴会牧师",
    "1412855": "绿皮船长",
    "1428709": "北海海怪",
    "1429823": "兜帽侍僧",
    "1435496": "南海船长",
    "1442453": "野蛮咆哮",
    "1444865": "雷诺·杰克逊",
    "1460078": "瓦里安·乌瑞恩",
    "1472056": "加兹鲁维",
    "1474914": "机械雪人",
    "1486896": "闪金镇步兵",
    "1496845": "郭雅夫人",
    "1508232": "机械野兽",
    "1521626": "阿努比萨斯哨兵",
    "1530547": "血怒药水",
    "1541670": "蒸发",
    "1544660": "虚灵奥术师",
    "1548872": "扭曲虚空",
    "1549257": "耐普图隆",
    "1550961": "幽灵之爪",
    "1565954": "腐化治疗机器人",
    "1569569": "砂槌萨满祭司",
    "1569955": "明光祭司",
    "1575490": "大师级枪骑士",
    "1578652": "银色指挥官",
    "1582915": "强化机器人",
    "1595151": "黑金大亨",
    "1598176": "闹闹机器人",
    "1599775": "叉状闪电",
    "1602593": "裁决者图哈特",
    "1614429": "唤魔者克鲁尔",
    "1614995": "污手街典当师",
    "1615615": "重装佣兵",
    "1629319": "血帆教徒",
    "1649577": "缩小药水",
    "1665585": "暗言术：灭",
    "1673713": "生而平等",
    "1687199": "心能魔像",
    "1693214": "风怒鹰身人",
    "1705042": "钢铁触须",
    "1707974": "食人魔法师",
    "1708356": "怒火中烧",
    "1709931": "兽群呼唤",
    "1737547": "诅咒之刃",
    "1743271": "大法师",
    "1750165": "哈里森·琼斯",
    "1751121": "燃鬃·自走炮",
    "1776889": "寒冰屏障",
    "1777691": "战斗机器人",
    "1785610": "侏儒发明家",
    "1786310": "罗宁",
    "1799003": "狂野争斗者",
    "1813606": "战术撤离",
    "1816761": "缩小射线工程师",
    "1821712": "冷血",
    "1831047": "自动漩涡打击装置",
    "1853550": "虚空恐魔",
    "1864407": "暗影狂怒者",
    "1876776": "死亡之翼",
    "1880669": "铸剑师",
    "1886948": "鱼死网破",
    "1925571": "豹子戏法",
    "1926142": "污手街走私者",
    "1929032": "劫持者",
    "1933703": "冰霜巨人",
    "1944890": "疯狂投弹者",
    "1945237": "深渊滑行者索苟斯",
    "1952434": "末日降临",
    "1969406": "塞纳留斯",
    "1978783": "心灵震爆",
    "2000391": "暗金教炼金师",
    "2002005": "英勇打击",
    "2039376": "血色十字军战士",
    "2045385": "火焰之地传送门",
    "2047851": "执刃教徒",
    "2049532": "达纳苏斯豹骑士",
    "2058489": "赛场观众",
    "2059735": "斯塔拉格",
    "2060970": "海象人龟骑士",
    "2061446": "阴暗渔夫纳特",
    "2065646": "退化",
    "2068092": "野猪骑士斯派克",
    "2107199": "星火术",
    "2124616": "大富翁比尔杜",
    "2148314": "剃刀猎手",
    "2173951": "恐怖末日守卫",
    "2182814": "圣光术",
    "2230613": "铁炉堡传送门",
    "2242990": "受祝福的勇士",
    "2251015": "无私的英雄",
    "2256072": "阿拉希武器匠",
    "2257715": "影袭",
    "2260756": "神秘挑战者",
    "2271719": "收集者沙库尔",
    "2287428": "争强好胜",
    "2298409": "裂地触须",
    "2304352": "夜刃刺客",
    "2307289": "玉莲帮刺客",
    "2308875": "埋葬",
    "2322789": "上古之神护卫",
    "2332169": "被感染的贮藏者",
    "2337073": "骑乘迅猛龙",
    "2346493": "赛场医师",
    "2348126": "卑劣的脏鼠",
    "2356075": "恶魔之怒",
    "2373539": "科赞秘术师",
    "2406442": "滋养",
    "2432041": "禁忌畸变",
    "2436757": "死神4000型",
    "2437585": "精神控制",
    "2437774": "青玉酋长",
    "2452878": "知识古树",
    "2453024": "迪菲亚头目",
    "2453522": "杀戮命令",
    "2465186": "青玉之爪",
    "2472634": "夜色镇炼金师",
    "2480212": "污手街惩罚者",
    "2487140": "变幻之影",
    "2489378": "英雄之魂",
    "2489763": "埃隆巴克保护者",
    "2490121": "邪灵拷问者",
    "2490493": "加拉克苏斯大王",
    "2493015": "暮光烈焰召唤者",
    "2496490": "海象人图腾师",
    "2524020": "雪地狗头人",
    "2561745": "火车王里诺艾",
    "2565500": "盾牌格挡",
    "2578080": "范达尔·鹿盔",
    "2578153": "机械幼龙技工",
    "2580980": "墓穴蜘蛛",
    "2593171": "大法师安东尼达斯",
    "2614370": "摇摆的俾格米",
    "2628612": "分裂软泥怪",
    "2629759": "冰霜震击",
    "2639375": "橱柜蜘蛛",
    "2641778": "邪兽人噬魂魔",
    "2651922": "加里维克斯",
    "2655797": "不稳定的传送门",
    "2661457": "拉文霍德刺客",
    "2661834": "扭曲的狼人",
    "2673564": "火舌图腾",
    "2680961": "无证药剂师",
    "2695536": "炎枪术",
    "2702259": "圣疗术",
    "2709466": "刺客之刃",
    "2724438": "毒蛇陷阱",
    "2724663": "鸟禽守护者",
    "2726866": "地精工兵",
    "2734696": "克苏恩",
    "2740897": "山岭巨人",
    "2751054": "疯狂的炼金师",
    "2759868": "光明之泉",
    "2762501": "大胖",
    "2776542": "威尔弗雷德·菲兹班",
    "2780579": "山谷之王穆克拉",
    "2828612": "穴居人驯兽师",
    "2858558": "野性成长",
    "2859758": "腐肉食尸鬼",
    "2886863": "年轻的女祭司",
    "2911180": "治疗之环",
    "2923232": "唤雾者伊戈瓦尔",
    "2923407": "A3型机械金刚",
    "2924878": "追踪术",
    "2939783": "竞技场主宰",
    "2948608": "青玉护符",
    "2949809": "星界沟通",
    "2983267": "庆典司仪",
    "2996514": "煤烟喷吐装置",
    "2998393": "丛林猎豹",
    "3014917": "尖牙德鲁伊",
    "3020676": "作战傀儡",
    "3024209": "魔古山守望者",
    "3051193": "地精自动理发装置",
    "3056203": "黄铜指虎",
    "3060468": "青玉游荡者",
    "3086109": "百变泽鲁斯",
    "3090513": "自然印记",
    "3105651": "林地树妖",
    "3106227": "虚空行者",
    "3114137": "魔法乌鸦",
    "3120107": "饥饿的巨龙",
    "3128259": "畸变狂战士",
    "3185883": "穿刺者戈莫克",
    "3202211": "冰枪术",
    "3218667": "暗影之握",
    "3221612": "爆炸射击",
    "3225556": "奥术巨人",
    "3229217": "哀嚎的灵魂",
    "3264464": "火山药水",
    "3270233": "憎恶",
    "3280618": "闪电箭",
    "3280902": "黑铁矮人",
    "3282149": "冰霜新星",
    "3293401": "顺劈斩",
    "3314238": "神勇弓箭手",
    "3314554": "地狱烈焰",
    "3317042": "麦田傀儡",
    "3322759": "无面操纵者",
    "3323113": "玛瑙主教",
    "3325268": "负伤剑圣",
    "3350034": "龙眠教官",
    "3354640": "暮光暗愈者",
    "3360143": "狂热铸魂者",
    "3361103": "白银之手教官",
    "3384746": "精灵龙",
    "3393696": "暮光守护者",
    "3399089": "动物伙伴",
    "3421407": "漂浮观察者",
    "3436375": "诺格弗格市长",
    "3451973": "恩佐斯",
    "3455333": "诅咒教派领袖",
    "3462175": "银色骑手",
    "3463546": "人气选手",
    "3476863": "致死打击",
    "3479028": "惩黑除恶",
    "3482616": "火山幼龙",
    "3488332": "破坏者",
    "3494379": "缚链者拉兹",
    "3510116": "冰风雪人",
    "3516428": "回收机器人",
    "3559466": "法力浮龙",
    "3573579": "后街男巫",
    "3590327": "狂野怒火",
    "3603417": "夜色镇执法官",
    "3612347": "破碎残阳祭司",
    "3616388": "博物馆馆长",
    "3632874": "狼人渗透者",
    "3649801": "伯瓦尔·弗塔根",
    "3650042": "饥饿的秃鹫",
    "3660270": "穆克拉的勇士",
    "3663306": "银月城传送门",
    "3679156": "空灵召唤者",
    "3680581": "泥潭守护者",
    "3721707": "魅魔",
    "3733635": "沉默",
    "3734952": "狼骑兵",
    "3760005": "圣光勇士",
    "3780633": "复仇之怒",
    "3783318": "老旧的火把",
    "3790090": "剧毒之种",
    "3791570": "死亡缠绕",
    "3812777": "真言术：盾",
    "3853414": "蹩脚海盗",
    "3868348": "小个子扰咒师",
    "3871714": "结网蛛",
    "3886490": "尤格-萨隆",
    "3892866": "愤怒",
    "3894814": "原始融合",
    "3898275": "船载火炮",
    "3918515": "邪灵召唤师",
    "3942824": "暗色炸弹",
    "3948255": "黑暗曙光",
    "3972338": "暴龙王克鲁什",
    "3981902": "火球术",
    "3991224": "狼人欺诈者",
    "3998814": "侏儒实验技师",
    "4017053": "真银圣剑",
    "4025998": "血吼",
    "4026591": "艾维娜",
    "4031097": "圣光炸弹",
    "4041383": "艾雅·黑掌",
    "4043334": "禁忌仪式",
    "4075729": "符文蛋",
    "4077391": "军需官",
    "4081479": "银色侍从",
    "4087112": "巨型蟾蜍",
    "4087580": "列王守卫",
    "4089603": "热心的酒保",
    "4102529": "击剑教头",
    "4103026": "克尔苏加德",
    "4107594": "污鳞劫掠者",
    "4144614": "镜像",
    "4144889": "战歌指挥官",
    "4170316": "净化",
    "4173891": "狂奔科多兽",
    "4176709": "魅影歹徒",
    "4191736": "黑暗教徒",
    "4195503": "真言术：耀",
    "4203090": "侏儒变形师",
    "4210022": "战马训练师",
    "4221724": "毒心者夏克里尔",
    "4228274": "探险帽",
    "4243641": "保卫国王",
    "4245631": "黑暗私语",
    "4272628": "假死",
    "4276807": "法力怨魂",
    "4287923": "南海船工",
    "4290839": "雷铸战斧",
    "4302672": "土元素",
    "4305953": "厄运召唤者",
    "4337593": "食人鱼喷枪",
    "4344475": "光明圣印",
    "4346786": "奥术冲击",
    "4346880": "北郡牧师",
    "4348083": "古加尔",
    "4354569": "神奇四鱼",
    "4363167": "力量的代价",
    "4367269": "王者祝福",
    "4384848": "危机四伏",
    "4387482": "冰锥术",
    "4394871": "乌鸦神像",
    "4399217": "百兽之王",
    "4402195": "暗金教窃歌者",
    "4402324": "迪菲亚清道夫",
    "4411265": "奥秘吞噬者",
    "4413111": "呓语魔典",
    "4426550": "载人飞天魔像",
    "4458527": "驯兽师",
    "4467115": "女警萨莉",
    "4472998": "愤怒卫士",
    "4504188": "海巨人",
    "4526284": "先祖知识",
    "4531842": "图腾魔像",
    "4537927": "坑道穴居人",
    "4538161": "暮光尊者",
    "4551640": "寒冰护体",
    "4556590": "小个子法师",
    "4570684": "霍格",
    "4571490": "变形术：野猪",
    "4583139": "海地精猎手",
    "4598221": "炎魔之王拉格纳罗斯",
    "4632727": "鼬鼠挖掘工",
    "4636879": "策反",
    "4642182": "奥金尼灵魂祭司",
    "4647968": "阿努巴拉克",
    "4659259": "微型战斗机甲",
    "4667425": "冲锋",
    "4680306": "克苏恩的侍从",
    "4692493": "怒鳍猎潮者",
    "4719087": "库卡隆精英卫士",
    "4719660": "进化的狗头人",
    "4732879": "作战动员",
    "4734575": "狂暴",
    "4760511": "银色神官帕尔崔丝",
    "4770698": "崇高牺牲",
    "4775312": "盗墓匪贼",
    "4782344": "顽石元素",
    "4784592": "斩杀",
    "4800869": "尼鲁巴蛛网领主",
    "4804981": "复仇打击",
    "4809515": "战斗怒火",
    "4855578": "斯尼德的伐木机",
    "4858122": "船长的鹦鹉",
    "4860175": "暮光幼龙",
    "4870001": "布莱恩·铜须",
    "4884542": "亡者归来",
    "4894912": "暴风城骑士",
    "4907038": "龙人巫师",
    "4910906": "发条巨人",
    "4917567": "视界术",
    "4918752": "石拳食人魔",
    "4923054": "新月视界",
    "4923233": "捕熊陷阱",
    "4928134": "恩佐斯的触须",
    "4931530": "奥能铁匠",
    "4940428": "吸取生命",
    "4950921": "火妖",
    "4953570": "暗影魔",
    "4962729": "忏悔",
    "4967515": "小鬼骑士",
    "4972492": "镜像实体",
    "4983068": "攻城车",
    "4992840": "黑暗邪使艾蒂丝",
    "5019187": "尤格- 萨隆的仆从",
    "5060900": "灵魂之火",
    "5063603": "熔核巨人",
    "5075115": "污手街情报员",
    "5080723": "谦逊",
    "5087120": "魔瘾者",
    "5123833": "召唤传送门",
    "5132544": "豺狼人土枪手",
    "5144244": "龙息药水",
    "5152966": "背叛",
    "5163728": "酸喉",
    "5169777": "幼龙鹰",
    "5178094": "加拉克苏斯之拳",
    "5184119": "帝王眼镜蛇",
    "5191391": "夜色镇图书管理员",
    "5208010": "玛克扎尔王子",
    "5209824": "格斗士",
    "5211191": "恐鳞",
    "5222618": "幽暗城商贩",
    "5222934": "灵魂虹吸",
    "5230551": "巴内斯",
    "5242999": "变形术",
    "5257193": "狂热的新兵",
    "5305782": "阿莱克丝塔萨的勇士",
    "5306911": "雷德·黑手",
    "5317184": "寄生恶狼",
    "5332449": "馆长",
    "5332736": "思维窃取",
    "5337594": "走私商贩",
    "5364493": "穆克拉",
    "5387459": "地精炎术师",
    "5396385": "附灵术",
    "5400045": "格斗陪练师",
    "5417329": "暗鳞先知",
    "5420552": "遗忘之王库恩",
    "5449065": "狼人追猎者",
    "5451201": "尘魔",
    "5452162": "雷暴术",
    "5454136": "暗影步",
    "5465910": "迷乱",
    "5467358": "暗影箭",
    "5479953": "野性印记",
    "5485876": "紫罗兰法师",
    "5486948": "审判",
    "5501202": "骷髅骑士",
    "5502258": "巫师学徒",
    "5508872": "工程师学徒",
    "5511862": "暮光召唤师",
    "5515793": "复活术",
    "5516571": "碧蓝幼龙",
    "5529302": "血色净化者",
    "5541288": "轮回",
    "5551277": "恶魔之火",
    "5554118": "癫狂的唤冰者",
    "5562265": "嗜法者",
    "5568702": "麦迪文的男仆",
    "5590568": "无面巨兽",
    "5598705": "梦魇之龙",
    "5611905": "治疗波",
    "5641848": "吹嘘海盗",
    "5702254": "暗影子嗣",
    "5704899": "畸变的龙鹰",
    "5726215": "蛛魔之卵",
    "5753085": "毁灭之刃",
    "5753694": "维克洛尔大帝",
    "5765322": "熔火恶犬",
    "5796224": "秘教暗影祭司",
    "5799450": "鬼灵骑士",
    "5820131": "淤泥践踏者",
    "5845477": "瑞文戴尔男爵",
    "5861340": "邪教女巫",
    "5864963": "邪恶的巫医",
    "5873184": "苦痛侍僧",
    "5903984": "蜘蛛坦克",
    "5907602": "芬利·莫格顿爵士",
    "5924946": "巨型沙虫",
    "5942963": "无面召唤者",
    "5976712": "暗鳞治愈者",
    "5987269": "爆晶药水",
    "5995745": "海盗帕奇斯",
    "6012858": "天空上尉库拉格",
    "6021866": "希尔瓦娜斯·风行者",
    "6022748": "野猪骑士蕾瑟兰",
    "6026196": "邪鳍审判者",
    "6027188": "西风灯神",
    "6027842": "先知维伦",
    "6034952": "年轻的酒仙",
    "6039774": "苔原犀牛",
    "6067965": "感知恶魔",
    "6085321": "“鲨鱼”加佐",
    "6085970": "血蹄勇士",
    "6089675": "愤怒的小鸡",
    "6095260": "蓝腮战士",
    "6096235": "艾露恩的女祭司",
    "6097780": "灌魔之锤",
    "6098574": "龙蛋",
    "6112729": "暗影形态",
    "6122138": "进化之主",
    "6123378": "暗中破坏",
    "6124690": "纳特·帕格",
    "6130256": "白眼大侠",
    "6142290": "夜魇骑士",
    "6154765": "旋风斩",
    "6179870": "自然平衡",
    "6180894": "寒光先知",
    "6188451": "海象人执法官",
    "6204184": "玉莲帮幻术师",
    "6207375": "妖术",
    "6208005": "布林顿3000型",
    "6208607": "恐狼前锋",
    "6221148": "熔岩爆裂",
    "6248716": "修补匠的磨刀油",
    "6258365": "末日预言者",
    "6264814": "碎雪机器人",
    "6300427": "重型刃弩",
    "6309820": "远古暗影",
    "6318000": "墨水大师索莉娅",
    "6324793": "恐惧地狱火",
    "6341877": "科多兽骑手",
    "6367523": "克苏恩之刃",
    "6379418": "青玉飞镖",
    "6390982": "复制",
    "6391228": "腐蚀术",
    "6396944": "深渊领主",
    "6398339": "淬毒利刃",
    "6398547": "复活的铠甲",
    "6403132": "牛头人战士",
    "6411584": "霜狼步兵",
    "6418516": "白银之手骑士",
    "6427867": "金刚刃牙兽",
    "6433266": "波戈蒙斯塔",
    "6434446": "鱼人杀手蟹",
    "6440318": "沼泽爬行者",
    "6442607": "肉用僵尸",
    "6444729": "比斯巨兽",
    "6445888": "爆炸陷阱",
    "6446545": "救赎",
    "6452813": "腐根",
    "6462108": "迈克斯纳",
    "6463402": "黑翼腐蚀者",
    "6478396": "舞动之剑",
    "6494026": "食人魔战槌",
    "6496787": "古拉巴什狂暴者",
    "6502200": "菊花茶",
    "6505097": "杂耍吞法者",
    "6513155": "纯洁者耶德瑞克",
    "6513589": "白银之枪",
    "6518195": "神圣新星",
    "6530011": "慈祥的外婆",
    "6540388": "虚灵商人",
    "6552959": "小鬼爆破",
    "6554133": "奥术智慧",
    "6561449": "小个子召唤师",
    "6579230": "凶暴猿猴",
    "6584210": "沟渠潜伏者",
    "6587479": "自负的演员",
    "6589137": "亡灵药剂师",
    "6590862": "渊狱惩击者",
    "6615262": "提里奥·弗丁",
    "6618501": "升级！",
    "6634540": "闪电风暴",
    "6663497": "圣殿执行者",
    "6663866": "亚煞极印记",
    "6672908": "恐惧战马",
    "6684331": "考达拉幼龙",
    "6687198": "惊骇恐魔",
    "6694260": "格鲁尔",
    "6694270": "风险投资公司雇佣兵",
    "6715797": "横扫",
    "6719686": "锦鱼人水语者",
    "6729644": "暴躁的牧羊人",
    "6741458": "圣光护卫者",
    "6747047": "克瓦迪尔劫掠者",
    "6766745": "飞刀杂耍者",
    "6771573": "斯克拉姆狂热者",
    "6776379": "霜狼督军",
    "6776875": "黑铁潜藏者",
    "6780033": "破法者",
    "6782502": "诺莫瑞根步兵",
    "6802702": "投火无面者",
    "6802854": "自爆绵羊",
    "6805086": "暗影狂乱",
    "6810225": "暴乱狂战士",
    "6817738": "加基森名媛",
    "6822166": "召唤宠物",
    "6829753": "鱼人宝宝",
    "6830268": "怨影狂怒者",
    "6843731": "洛欧塞布",
    "6869651": "阿努巴尔伏击者",
    "6885598": "报警机器人",
    "6895135": "遗物搜寻者",
    "6896011": "烈焰风暴",
    "6897317": "腐肉虫",
    "6936872": "鱼人招潮者",
    "6944138": "鱼人领军",
    "6947722": "纳迦海巫",
    "6952419": "末日守卫",
    "6963290": "爪击",
    "6978100": "刀扇",
    "6982016": "维伦的恩泽",
    "6987663": "生命之树",
    "6988171": "英勇圣印",
    "6995430": "照明弹",
    "7002755": "索瑞森大帝",
    "7009776": "黑市摊贩",
    "7027011": "夜色镇议员",
    "7030643": "暗影施法者",
    "7057762": "兽栏大师",
    "7061851": "先祖召唤",
    "7073014": "鱼人恩典",
    "7078352": "隐藏",
    "7079753": "弹射之刃",
    "7093202": "荒野骑士",
    "7106023": "加基森摆渡人",
    "7127330": "法力之潮图腾",
    "7145562": "巨型独眼怪",
    "7162862": "夜幕奇袭",
    "7195615": "搜寻猎物",
    "7198171": "拉法姆的诅咒",
    "7205526": "萨尔玛先知",
    "7218433": "铁鬃灰熊",
    "7229005": "末日践行者",
    "7233721": "神圣惩击",
    "7239079": "重型攻城战车",
    "7248044": "风怒",
    "7283033": "龙人打击者",
    "7292323": "眼镜蛇射击",
    "7302048": "叫嚣的中士",
    "7302973": "神恩术",
    "7315106": "达拉然铁骑士",
    "7317619": "青玉闪电",
    "7320072": "化学怪人",
    "7323363": "独眼欺诈者",
    "7327345": "小个子驱魔者",
    "7329396": "沉默的骑士",
    "7334844": "升腾者海纳泽尔",
    "7379122": "暴怒的狼人",
    "7381346": "多重射击",
    "7392942": "刺骨",
    "7417368": "奥金斧",
    "7428402": "榴弹投手",
    "7435881": "军备宝箱",
    "7443410": "麦迪文的残影",
    "7452460": "玛克扎尔的小鬼",
    "7463373": "强风射击",
    "7481525": "格尔宾·梅卡托克",
    "7487552": "凛风巫师",
    "7487906": "猎人印记",
    "7489536": "酸性沼泽软泥怪",
    "7490674": "野性之怒",
    "7492860": "血帆海盗",
    "7495047": "小精灵",
    "7496086": "快速治疗",
    "7498241": "食人魔勇士穆戈尔",
    "7504043": "疯狂的科学家",
    "7504775": "恩佐斯的副官",
    "7519314": "自然之力",
    "7542192": "迦顿男爵",
    "7546520": "食人魔步兵",
    "7549320": "致命餐叉",
    "7555831": "巫医",
    "7558591": "龙息术",
    "7564273": "耐心的刺客",
    "7565953": "赫米特·奈辛瓦里",
    "7572422": "冰霜暴怒者",
    "7574048": "淤泥喷射者",
    "7586559": "奥术射击",
    "7588577": "暮光雏龙",
    "7589249": "护盾机器人",
    "7598941": "鲁莽火箭兵",
    "7606494": "黑龙领主死亡之翼",
    "7625712": "黑翼技师",
    "7626820": "克苏恩的信徒",
    "7656880": "玛尔加尼斯",
    "7663111": "猛犸人头领",
    "7665237": "鱼人袭击者",
    "7667699": "杂耍小鬼",
    "7700871": "星辰坠落",
    "7701363": "大地震击",
    "7709703": "拉希奥",
    "7720025": "月光林地传送门",
    "7725245": "猩红法力浮龙",
    "7760692": "死亡领主",
    "7763875": "强袭坦克",
    "7772291": "暗影投弹手",
    "7774650": "军情七处特工",
    "7792172": "莫罗斯",
    "7805565": "虚空幽龙史学家",
    "7809086": "加兹瑞拉",
    "7818870": "牺牲契约",
    "7823020": "展览馆法师",
    "7825114": "疯狂的信徒",
    "7828785": "书卷之龙",
    "7832348": "石腭穴居人壮汉",
    "7833046": "疯狂药水",
    "7835440": "扰咒术",
    "7835897": "心灵视界",
    "7853061": "荒野行者",
    "7861350": "施法者克星X- 21",
    "7862023": "毒刃",
    "7862533": "钢铁战蝎",
    "7865634": "末日灾祸",
    "7879933": "恐怖的奴隶主",
    "7883351": "大地之环先知",
    "7890858": "血法师萨尔诺斯",
    "7890933": "动力战锤",
    "7895850": "集合石",
    "7899297": "飞行器",
    "7901402": "疾跑",
    "7913351": "毒沼爬行者",
    "7926384": "猢狲医者",
    "7944145": "食人魔忍者",
    "7971673": "奉献",
    "7979121": "污手玩具商",
    "7989188": "暗金教侍从",
    "8003450": "奥妮克希亚",
    "8014892": "钢铁武道家",
    "8014938": "发条侏儒",
    "8015979": "嗜血",
    "8026786": "奥术畸体",
    "8026921": "毁灭之锤",
    "8035073": "青玉绽放",
    "8035741": "强效治疗药水",
    "8043501": "渡魂者",
    "8054825": "活力图腾",
    "8056563": "虚空碾压者",
    "8064966": "废旧螺栓机甲",
    "8098773": "电镀机械熊仔",
    "8104663": "持枪侍从",
    "8106757": "恩佐斯的子嗣",
    "8121674": "暗言术：骇",
    "8131094": "加基森拍卖师",
    "8134301": "南海畸变船长",
    "8162323": "无面蹒跚者",
    "8171156": "深渊探险",
    "8172137": "发条强盗机器人",
    "8174294": "禁忌治疗",
    "8174364": "污手街守护者",
    "8175387": "伊瑟拉",
    "8175787": "湖之仙女",
    "8187541": "暗言术：痛",
    "8195960": "淡水鳄",
    "8208355": "玛里苟斯",
    "8215589": "精神控制技师",
    "8216322": "公正之剑",
    "8222736": "力量祝福",
    "8233046": "重甲战马",
    "8234214": "炽炎战斧",
    "8253047": "狙击",
    "8253438": "虚灵大盗拉法姆",
    "8260634": "纳迦海盗",
    "8309676": "冰喉",
    "8313977": "保护之手",
    "8328060": "月火术",
    "8329060": "海魔钉刺者",
    "8332245": "黑水海盗",
    "8350209": "风语者",
    "8362139": "穴居人强盗",
    "8363698": "幽暗城勇士",
    "8376870": "德莱尼图腾师",
    "8387284": "丛林之魂",
    "8403689": "恶毒铁匠",
    "8412603": "暴风城勇士",
    "8436937": "铁炉堡火枪手",
    "8440900": "化血为脓",
    "8444171": "受伤的克瓦迪尔",
    "8447782": "托什雷",
    "8461727": "以眼还眼",
    "8463627": "熔火怒犬",
    "8465901": "盾牌猛击",
    "8469073": "森林狼",
    "8471716": "米米尔隆的头部",
    "8483814": "阿曼尼狂战士",
    "8489463": "被感染的牛头人",
    "8496450": "奥秘守护者",
    "8508663": "麻风侏儒",
    "8516303": "战利品贮藏者",
    "8532959": "盾甲侍女",
    "8541342": "远古造物之血",
    "8551033": "炎爆术",
    "8565219": "愚者之灾",
    "8583254": "野蛮之击",
    "8598456": "恶魔融合",
    "8600875": "玉莲帮密探",
    "8604571": "银色警卫",
    "8605410": "法术反制",
    "8619779": "大漠沙驼",
    "8622977": "岩肤石像鬼",
    "8629421": "野性狼魂",
    "8630093": "血骑士",
    "8636616": "法力晶簇",
    "8645067": "铸甲师",
    "8670262": "国王护卫者",
    "8679401": "齿轮大师的扳手",
    "8704958": "长鬃草原狮",
    "8706508": "银背族长",
    "8710562": "奥达曼守护者",
    "8711165": "二流打手",
    "8712151": "精灵弓箭手",
    "8714497": "强能奥术飞弹",
    "8720527": "关门放狗",
    "8740006": "费尔根",
    "8742192": "神圣勇士",
    "8748463": "砰砰博士",
    "8750809": "影踪骁骑兵",
    "8756825": "银色保卫者",
    "8760802": "后院保镖",
    "8763683": "转生",
    "8771365": "雄斑虎",
    "8787190": "卡拉克西织珀者",
    "8792961": "毒镖陷阱",
    "8795312": "先到先得",
    "8810290": "紫罗兰教师",
    "8813978": "风领主奥拉基尔",
    "8817017": "严酷的监工",
    "8824568": "暗影打击",
    "8829627": "暮光神锤",
    "8849713": "冰冻药水",
    "8852261": "连环爆裂",
    "8854585": "光明邪使菲奥拉",
    "8859003": "爆破小队",
    "8877280": "伺机待发",
    "8880392": "火焰杂耍者",
    "8882871": "命令怒吼",
    "8893533": "沃金",
    "8894578": "回收",
    "8907570": "白骨卫士军官",
    "8923006": "瘟疫鼠群",
    "8923844": "角斗场主管",
    "8929564": "午夜噩龙",
    "8936783": "暗金教水晶侍女",
    "8938816": "哈霍兰公主",
    "8943917": "火山邪木",
    "8949646": "艾德温·范克里夫",
    "8956921": "森金持盾卫士",
    "8958508": "失窃物资",
    "8965951": "寒冰箭",
    "8968365": "无羁元素",
    "8968370": "丛林枭兽",
    "8979719": "控心术",
    "8980421": "公辩律师",
    "8987198": "十字军统领",
    "9021945": "阿诺玛鲁斯",
    "9033448": "奥尔多卫士",
    "9035970": "角斗士的长弓",
    "9057426": "发条骑士",
    "9082493": "石化武器",
    "9101181": "愤怒之锤",
    "9139408": "低阶侍从",
    "9145360": "皇家雷象",
    "9160035": "虚灵巫师",
    "9163300": "恐怖海盗",
    "9165141": "冰吼",
    "9168341": "王牌猎人",
    "9177578": "蛛魔先知",
    "9191728": "烈焰德鲁伊",
    "9198384": "神圣之灵",
    "9198738": "玛洛恩",
    "9212009": "蹒跚的食尸鬼",
    "9217295": "冰霜元素",
    "9226204": "刺杀",
    "9227009": "禁忌烈焰",
    "9239664": "机械跃迁者",
    "9245630": "玉莲印记",
    "9245816": "图腾之力",
    "9252115": "天降蛛群",
    "9256639": "日怒保卫者",
    "9257097": "暗金教信使",
    "9258779": "大漩涡传送门",
    "9275285": "达拉然法师",
    "9277108": "死亡之咬",
    "9277529": "子弹上膛",
    "9293698": "迷失的陆行鸟",
    "9293755": "诺兹多姆",
    "9295064": "暴风雪",
    "9298643": "盛气凌人",
    "9305946": "艾尔文灾星霍格",
    "9308169": "伪装大师",
    "9322382": "加固",
    "9329320": "鲜血小鬼",
    "9337651": "征募官",
    "9343158": "持盾卫士",
    "9343519": "老式治疗机器人",
    "9348301": "石牙野猪",
    "9351208": "加基森枪骑士",
    "9372488": "诡异的雕像",
    "9399777": "邪能火炮",
    "9407996": "宝石甲虫",
    "9411297": "暮色野猪",
    "9413873": "机械动物管理员",
    "9429085": "邪火药水",
    "9452814": "金手指卡努克",
    "9489474": "远古之树",
    "9489593": "银月城卫兵",
    "9517404": "光耀之主拉格纳罗斯",
    "9528921": "秘法宝典",
    "9556847": "暴虐食尸鬼",
    "9560200": "野猪骑士塔纳利",
    "9564407": "展览馆守卫",
    "9573977": "传令官沃拉兹",
    "9574080": "污手街供货商",
    "9575503": "治疗之触",
    "9581352": "奥术傀儡",
    "9582391": "掷斧者",
    "9588873": "暗影大师",
    "9592818": "霍巴特·钩锤",
    "9594812": "狗头人地卜师",
    "9612835": "精英对决",
    "9612911": "腐化灰熊",
    "9613746": "重碾",
    "9626635": "寒光智者",
    "9632531": "暗金教鸦人祭司",
    "9650916": "暗金教恶魔商贩",
    "9662130": "马尔考罗克",
    "9664449": "异种群居蝎",
    "9666004": "齿轮大师",
    "9667952": "年迈的法师",
    "9683107": "野性之力",
    "9683891": "活动假人",
    "9697041": "弃暗投明",
    "9704496": "熔岩震击",
    "9722795": "烈焰巨兽",
    "9732123": "群体驱散",
    "9738263": "凯恩·血蹄",
    "9745418": "血帆袭击者",
    "9756038": "裂颅之击",
    "9766544": "米尔豪斯·法力风暴",
    "9792142": "邪教药剂师",
    "9825954": "绝命乱斗",
    "9876359": "奥术飞弹",
    "9876553": "撕咬",
    "9903649": "鱼人骑士",
    "9911880": "奥格瑞玛狼骑士",
    "9920186": "神圣愤怒",
    "9926765": "复仇",
    "9947243": "先祖治疗",
    "9951059": "致命射击",
    "9970388": "鹰角弓",
    "9996365": "寄生感染"
}

const legendaries = ["奥妮克希亚", "波戈蒙斯塔", "伊瑟拉", "古加尔", "莫罗斯", "布莱恩·铜须", "大富翁比尔杜", "沃金", "血法师萨尔诺斯", "骷髅骑士", "伊利丹·怒风", "布林顿3000型", "雷德·黑手", "艾尔文灾星霍格", "诺兹多姆", "缚链者拉兹", "死亡之翼", "白眼大侠", "唤魔者克鲁尔", "哈霍兰公主", "洛欧塞布", "耐普图隆", "穆克拉", "天空上尉库拉格", "遗忘之王库恩", "唐·汉古", "格罗玛什·地狱咆哮", "唤雾者伊戈瓦尔", "收集者沙库尔", "先知维伦", "大法师安东尼达斯", "冰吼", "裁决者图哈特", "阿莱克丝塔萨", "黑龙领主死亡之翼", "火车王里诺艾", "瓦里安·乌瑞恩", "霍格", "阴暗渔夫纳特", "哈里森·琼斯", "玛克扎尔王子", "酸喉", "山谷之王穆克拉", "恩佐斯", "加拉克苏斯大王", "罗宁", "虚灵大盗拉法姆", "范达尔·鹿盔", "光耀之主拉格纳罗斯", "克尔苏加德", "卡扎库斯", "加里维克斯", "米尔豪斯·法力风暴", "虚灵勇士萨兰德", "钢铁战蝎", "墨水大师索莉娅", "塞纳留斯", "赫米特·奈辛瓦里", "纳特·帕格", "玛尔加尼斯", "“鲨鱼”加佐", "馆长", "伯瓦尔·弗塔根", "米米尔隆的头部", "纯洁者耶德瑞克", "艾雅·黑掌", "提里奥·弗丁", "毒心者夏克里尔", "迈克斯纳", "巴内斯", "艾德温·范克里夫", "凯恩·血蹄", "燃鬃·自走炮", "食人魔勇士穆戈尔", "银色神官帕尔崔丝", "颤地者特罗格佐尔", "死神4000型", "费尔根", "希尔瓦娜斯·风行者", "百变泽鲁斯", "拉希奥", "斯塔拉格", "诺格弗格市长", "马尔考罗克", "博尔夫·碎盾", "玛里苟斯", "砰砰博士", "尤格-萨隆", "加兹鲁维", "炎魔之王拉格纳罗斯", "亚煞极", "工匠大师欧沃斯巴克", "阿诺玛鲁斯", "金手指卡努克", "瑞文戴尔男爵", "传令官沃拉兹", "斯尼德的伐木机", "格鲁尔", "玛洛恩", "芬利·莫格顿爵士", "加兹瑞拉", "深渊滑行者索苟斯", "郭雅夫人", "游学者周卓", "维克洛尔大帝", "阿努巴拉克", "克苏恩", "麦迪文", "光明邪使菲奥拉", "升腾者海纳泽尔", "穿刺者戈莫克", "霍巴特·钩锤", "伊莉斯·逐星", "恐鳞", "瑟玛普拉格", "格尔宾·梅卡托克", "烈焰巨兽", "艾维娜", "暴龙王克鲁什", "女警萨莉", "老瞎眼", "管理者埃克索图斯", "风领主奥拉基尔", "冰喉", "托什雷", "绿皮船长", "威尔弗雷德·菲兹班", "比斯巨兽", "克洛玛古斯", "黑暗邪使艾蒂丝", "海盗帕奇斯", "奈法利安", "迦顿男爵", "索瑞森大帝", "黑骑士", "雷诺·杰克逊", "精英牛头人酋长", "飞火流星·芬杰"]

const heroAdjs = [
    "优美的",
    "胜利者",
    "荣耀的",
    "不朽的",
    "无敌的",
    "天真的",
    "骄傲的",
    "智慧的",
    "无聊的",
    "敏捷的",
    "奇怪的",
    "神秘的",
    "强壮的",
    "机智的",
    "神奇的",
    "惆怅的",
    "活泼的",
    "主动的",
    "内向的",
    "害羞的",
    "潇洒的",
    "英俊的",
    "谦虚的",
    "有心机的",
    "热情的",
    "可笑的",
    "谨慎的",
    "认真的",
    "懒惰的",
    "悲观的",
    "乐观的",
    "粗鲁的",
    "有礼貌的",
    "阴险的",
    "幽默的",
    "可爱的",
    "瘦弱的",
    "独立的",
    "杰出的",
    "凶残的",
    "贪婪的",
    "勇敢的",
    "机灵的",
    "急躁的",
    "倔强的",
    "体贴的",
    "温柔的",
    "孤傲的",
    "令人惊讶的",
    "和谐的"
]

const supportedImports = [
    ["去旅法师营地", "http://www.iyingdi.com/deck/hs/index.html"],
    ["NGA", "http://db.178.com/hs/deck/"]
]

const i18n_d = {
    "initial_deck_text": [
        "卡组职业: 卡组名",
        "#按照上面的格式输入，例如：潜行者: 奇迹贼",
        "1 伺机待发",
        "#用数字和卡牌名添加卡牌",
        "#可以先试下左边的那些初始卡组！",
        "#用上面红色的“+”按钮来添加新的卡组！"
    ].join('\n'),
    "Class: ": "卡组职业: ",
    "new_deckname": "新卡组 ",
    "-- Provide a unique deck name!": "-- 请提供一个不同的卡组名！",
    'No deck selected': '没有卡组被选中',
    "Passed in non digit decknum": "输入了一个非数字的卡组序号",
    "Invalid Hero Class: ": "卡组职业不正确：",
    "Invalid Row: Start with 1 or 2!": "无效的行：请用1或者2开始！",
    "Invalid Card: ": "无效的卡牌：",
    "Invalid Decksize: ": "Invalid Decksize: ",
    "Legendary Count Error: ": "Legendary Count Error: ",
    "Error in deck: ": "卡组里有错误： ",
    'Please enter a valid email!': '请输入一个有效的电子邮件地址！',
    'Please submit some matchups!': '请至少提交一些对局！',
    'Please keep within 1000 games!': 'Please keep within 1000 games!',
    "-- Saved!": "-- 已保存！",
    ' cards ': ' 张卡 ',
    'remove': '移除',
    "Success!": "提交成功！",
    "Please input number of games larger than 0": "Please input number of games larger than 0",
    "Import": "导入",
    "Importing": "导入中。。。",
    "Import Failed. Please retry": "导入失败。。请重新导入。。。",
    "Site not supported. Please input a supported link": "Site not supported. Please input a supported link"
}

export {locale, col, heroClasses, heroNumLookup, prebuilts, cardnames, legendaries, heroAdjs, supportedImports, i18n_d}