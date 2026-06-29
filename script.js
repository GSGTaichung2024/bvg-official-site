const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const logos = {
  魚饌食: "assets/client-logos/yuzhuanshi.png",
  漢來: "assets/client-logos/hilai.jpg",
  花田囍彘: "assets/client-logos/huatian.jpg",
  氣機科技: "assets/client-logos/aqive.svg",
  新肌霓: "assets/client-logos/ingeni-new.jpg",
  三風製麵: "assets/client-logos/sanfeng.png",
  老媽拌麵: "assets/client-logos/laoma.png",
  維克: "assets/client-logos/virbac.svg",
  潔淨學: "assets/client-logos/cleanology.jpg",
  飛航模飾: "assets/client-logos/flight-mode.png",
  維格餅家: "assets/client-logos/vigor-kobo.webp",
  香雞城: "assets/client-logos/chicken-house.png",
  簡單保養: "assets/client-logos/simple-skincare.webp",
  大武山雞蛋: "assets/client-logos/dawushan.webp",
  麗嬰房: "assets/client-logos/lesenphants-new.png",
  geneoX: "assets/client-logos/geneox.png",
  橘子工坊: "assets/client-logos/orange-house.png",
  歐買尬海鮮串燒: "assets/client-logos/omg-seafood.jpg",
  "BV 必維國際集團": "assets/client-logos/bureau-veritas.svg",
  綠界大數據: "assets/client-logos/ecpay.png",
  "幣託 X 全家": "assets/client-logos/bito.png",
  北歐櫥窗: "assets/client-logos/nordic.png",
  台北汎德: "assets/client-logos/bmw.png",
  麻十七: "assets/client-logos/spicy17.jpg",
  明粵火鍋: "assets/client-logos/ming-yuet.jpg",
  電商鐵軍理查: "assets/client-logos/richard.jpg",
  "ONE RULE": "assets/client-logos/one-rule.jpg",
  裕隆汽車慶通保修廠: "assets/client-logos/ching-tong.jpg",
  驊哥電腦: "assets/client-logos/hwa-pc.jpg",
  依汰抗菌專家: "assets/client-logos/aether.png",
  心茶: "assets/client-logos/xintea.webp",
  "CERALIV LUXURY": "assets/client-logos/ceraliv.jpg",
  "EM STUDIO": "assets/client-logos/em-studio.jpg",
  "小食創合｜林彤": "assets/client-logos/innolife.jpg",
  糖鼎: "assets/client-logos/tangding.webp",
  錢老爺Line娛樂城: "assets/client-logos/qianlaoye.jpg",
  大頭仔Line娛樂城: "assets/client-logos/datouzai.jpg",
  維德普: "assets/client-logos/virdep.webp",
  崴達: "assets/client-logos/virdep.webp",
  植沐: "assets/client-logos/huso.jpg",
  潔淨學長: "assets/client-logos/cleanology.jpg",
  Formosa7s: "assets/client-logos/formosa7s.png",
  勝利聯賽: "assets/client-logos/victory-league.png",
  凡登西服: "assets/client-logos/vandome.png",
  風動設計: "assets/client-logos/pneumatic.svg",
  達爾文金融: "assets/client-logos/darwin-finance.svg",
};

const wideLogos = new Set([
  "三風製麵",
  "老媽拌麵",
  "維克",
  "氣機科技",
  "新肌霓",
  "飛航模飾",
  "維格餅家",
  "geneoX",
  "歐買尬海鮮串燒",
  "幣託 X 全家",
  "北歐櫥窗",
  "裕隆汽車慶通保修廠",
  "大武山雞蛋",
  "麗嬰房",
  "心茶",
  "糖鼎",
  "維德普",
  "綠界大數據",
  "BV 必維國際集團",
  "Formosa7s",
  "凡登西服",
  "風動設計",
  "達爾文金融",
]);

const cases = [
  { category: "ecommerce", service: "電商全代操", name: "魚饌食", industry: "食品", summary: "優化官網體驗，以禮盒節慶行銷提高客單，搭配 Meta 精準投放與 KOL 開箱。", metrics: [["網站流量", "成長 150%"], ["轉換率", "提升 45%"], ["銷售表現", "成長 120%"]] },
  { category: "ecommerce", service: "電商全代操", name: "維克", industry: "寵物", summary: "強化獸醫師推薦與知識型內容，統一旗艦店定價策略，建立專業信任與品牌溫度。", metrics: [["品牌信任度", "提升 40%"], ["回購率", "提升 55%"], ["客單價", "提升 30%"]] },
  { category: "ecommerce", service: "電商全代操", serviceLabel: "電商全代操 × 短影音", name: "潔淨學", industry: "清潔用品", summary: "整合電商營運、成分透明化敘事與短影音實測，搭配訂閱機制提升新客、品牌搜尋與產品轉換。", metrics: [["新客獲取", "成長 80%"], ["品牌搜尋", "成長 60%"], ["短影音成果", "最高 20.2 萬觀看"]] },
  { category: "ecommerce", service: "電商全代操", serviceLabel: "電商全代操 × 網紅行銷", name: "老媽拌麵", industry: "食品", summary: "全代操官網並建立品牌數位資產，整合 CRM、廣告與海外網紅布局，推動會員及市場能見度成長。", metrics: [["服務範圍", "官網 × CRM"], ["海外布局", "3 個市場"], ["網紅合作", "共 35 位"]] },
  { category: "ecommerce", service: "品牌成長顧問", name: "漢來", industry: "食品", summary: "整合集團聲量與官網流量，提前布局旺季策略，強化節慶禮盒銷售。", metrics: [["線上預訂", "成長 90%"], ["三節禮盒", "連續 4 年完售"], ["會員名單", "成長 150%"]] },
  { category: "ecommerce", service: "品牌成長顧問", name: "花田囍彘", industry: "食品", summary: "以短影音建立生鮮肉品信任感，搭配影音素材投放放大品牌識別。", metrics: [["官網銷售", "成長 180%"], ["平均客單價", "提升 65%"], ["品牌搜尋", "成長 95%"]] },
  { category: "ecommerce", service: "通路代運營", name: "氣機科技", industry: "身心靈產品", summary: "建立消費者使用場景，透過通路擴展接觸不同層面的潛在消費者。", metrics: [["銷售表現", "成長 200%"], ["訂單量", "成長 180%"], ["客戶滿意度", "92%"]] },
  { category: "ecommerce", service: "通路代運營", serviceLabel: "通路代運營 × 影音製作", name: "飛航模飾", industry: "寢具", summary: "推動企業轉型，以 IP 授權爭取通路版位，並整合直播、商品攝影與使用情境內容放大品牌成長。", metrics: [["服務重點", "通路代運營"], ["資源策略", "IP × 版位"], ["內容應用", "直播 × 商品攝影"]] },
  { category: "ecommerce", service: "通路代運營", name: "新肌霓", industry: "保養品", summary: "規劃官網與平台差異化經營，以獨家組合與會員制提升回購並保護毛利。", metrics: [["運營效率", "提升 35%"], ["成本", "降低 22%"], ["決策時間", "縮短 50%"]] },
  { category: "ecommerce", service: "全代操", name: "維格餅家", industry: "食品禮盒", summary: "全代操官網與通路，以節慶禮盒策略及廣告投放強化伴手禮品牌定位。", metrics: [["服務範圍", "官網 × 通路"], ["經營重點", "節慶檔期"], ["品牌策略", "伴手禮定位"]] },
  { category: "ecommerce", service: "全代操", name: "香雞城", industry: "冷凍食品", summary: "以品牌故事與試吃內容建立冷凍食品信任，搭配節慶組合提升客單。", metrics: [["服務範圍", "電商全代操"], ["內容策略", "試吃體驗"], ["成長重點", "節慶組合"]] },
  { category: "ecommerce", service: "momo營運", serviceLabel: "momo 營運 × 短影音", name: "簡單保養", industry: "保養品", summary: "整合 momo 旗艦店、版位與組合促銷，並以街訪短影音融入產品使用場景，提升平台曝光與品牌互動。", metrics: [["服務通路", "momo"], ["短影音表現", "3 支均破萬"], ["整合策略", "通路 × 內容"]] },
  { category: "ecommerce", service: "通路營運", name: "大武山雞蛋", industry: "食品禮盒", summary: "規劃通路上架策略，以牧場溯源內容建立信任，強化優質雞蛋品牌識別。", metrics: [["服務重點", "通路上架"], ["內容策略", "牧場溯源"], ["品牌目標", "信任建立"]] },

  { category: "pr", service: "媒體公關", name: "麗嬰房", industry: "零售", summary: "以公益活動與新聞發布提升品牌價值及消費者信任感。", metrics: [["媒體報導", "83+ 篇新聞"], ["策略重點", "公益聲量"], ["成果方向", "信任提升"]] },
  { category: "pr", service: "媒體公關 × 網紅行銷", name: "三風製麵", industry: "食品", summary: "新品上市期間結合新聞發布與網紅開箱，提升品牌能見度與話題擴散。", metrics: [["媒體報導", "47+ 篇新聞"], ["網紅合作", "每支新品至少 10 位"], ["成果方向", "新品聲量提升"]] },
  { category: "pr", service: "網紅行銷", name: "geneoX", industry: "醫美", summary: "透過網紅體驗與分享，降低新醫美服務的認知門檻並觸及目標客群。", metrics: [["網紅合作", "8 位"], ["網紅總追蹤數", "超過 40 萬"], ["成果方向", "服務認知提升"]] },
  { category: "pr", service: "網紅行銷", name: "橘子工坊", industry: "清潔用品", summary: "透過公關品派發與自然分享，讓藝人及網紅在短時間內集中創造聯名新品聲量。", metrics: [["藝人網紅曝光", "53 則限動"], ["貼文曝光", "2 則貼文"], ["操作方式", "自然分享"]] },
  { category: "pr", service: "社群口碑", serviceLabel: "社群口碑 × 短影音", name: "政治人物", industry: "公共議題", summary: "整合社群全渠道營運 SOP、政見倡議與質詢影音，協助公共議題以穩定內容觸及更多年輕受眾。", metrics: [["TikTok 經營", "從 0 成長至萬粉"], ["影片企劃", "多支破 30 萬點閱"], ["成長方式", "無投廣"]] },
  { category: "pr", service: "社群口碑", name: "歐買尬海鮮串燒", industry: "餐飲", summary: "提供社群文案與素材製作服務，協助沒有社群編制的品牌穩定產出內容。", metrics: [["每月社群內容", "4 篇圖文"], ["服務內容", "文案 × 素材"], ["營運目標", "穩定產出"]] },
  { category: "pr", service: "實體活動策劃執行", name: "BV 必維國際集團", industry: "檢驗認證", summary: "規劃展場互動與新聞發布，提升智慧能源及淨零永續展期間的品牌聲量。", metrics: [["社群互動", "超過 3,000"], ["媒體報導", "每年約 50+ 篇"], ["有效問卷", "每場約 150+"]] },
  { category: "pr", service: "實體活動策劃執行", name: "幣託 X 全家", industry: "金融科技 × 零售", summary: "策劃大型合作發布記者會，讓點數兌換虛擬貨幣服務升級獲得密集曝光。", metrics: [["媒體出席", "33 家"], ["出席席次", "40 席"], ["媒體報導", "50+ 篇新聞"]] },
  { category: "pr", service: "實體活動策劃執行", name: "綠界大數據", industry: "資訊", summary: "策劃新服務上市記者會，集中媒體資源放大 CashBack 返多多上市聲量。", metrics: [["媒體出席", "37 家"], ["出席席次", "47 席"], ["媒體報導", "85+ 篇新聞"]] },

  { category: "media", service: "廣告投放", name: "錢老爺Line娛樂城", industry: "休閒遊戲", summary: "規劃廣告投放策略與數據分析，協助新產品獲取高品質用戶。", metrics: [["服務類型", "廣告投放"], ["策略重點", "數據分析"], ["成果方向", "高品質用戶"]] },
  { category: "media", service: "廣告投放", name: "大頭仔Line娛樂城", industry: "休閒遊戲", summary: "從產品初期聲量出發，透過投放策略與持續分析提升有效用戶獲取。", metrics: [["服務類型", "廣告投放"], ["操作重點", "投放優化"], ["成果方向", "有效獲客"]] },
  { category: "media", service: "廣告投放", serviceLabel: "廣告投放 × 整合行銷", name: "維德普", industry: "整合行銷", summary: "規劃廣告投放策略與投放數據分析，協助產品接觸更多種類的新客與案型，獲取高質量用戶。", metrics: [["服務類型", "廣告投放"], ["策略重點", "投放數據分析"], ["成果方向", "新客 × 案型拓展"]] },
  { category: "media", service: "網站製作", name: "Formosa7s", industry: "體育", summary: "以 WordPress 建置官網，建立可承接行銷流量與品牌資訊的數位入口。", metrics: [["建置方式", "WordPress"], ["專案任務", "官網建置"], ["成果方向", "品牌流量基礎"]] },
  { category: "media", service: "網站製作", name: "勝利聯賽", industry: "體育", summary: "從無官網狀態建立品牌數位入口，支援後續流量導入與賽事資訊整合。", metrics: [["建置方式", "WordPress"], ["專案任務", "官網建置"], ["成果方向", "賽事資訊整合"]] },
  { category: "media", service: "網站製作", name: "凡登西服", industry: "服飾", summary: "重建品牌官網，提升形象呈現與後續線上行銷承接能力。", metrics: [["建置方式", "WordPress"], ["專案任務", "官網重建"], ["成果方向", "品牌形象升級"]] },
  { category: "media", service: "網站製作", name: "風動設計", industry: "室內設計", summary: "建置品牌官網，讓設計作品與服務能被搜尋、瀏覽並承接後續行銷流量。", metrics: [["建置方式", "WordPress"], ["專案任務", "官網建置"], ["成果方向", "作品數位展示"]] },
  { category: "media", service: "網站製作", name: "達爾文金融", industry: "金融", summary: "建立金融品牌官網，作為資訊溝通、品牌信任與數位行銷的基礎。", metrics: [["建置方式", "WordPress"], ["專案任務", "官網建置"], ["成果方向", "品牌信任基礎"]] },

  { category: "video", service: "短影音", name: "北歐櫥窗", industry: "北歐經典家具", summary: "以高質感產品敘事觸及高端消費者，強化設計家具的品牌價值。", metrics: [["最高單片觀看", "31.9 萬"], ["系列表現", "3 支均破 15 萬"], ["內容形式", "Reels"]] },
  { category: "video", service: "短影音 × 直播", name: "台北汎德", industry: "BMW 汽車", summary: "以新車發表直播與日常情境短影音雙軌經營，回應車主真實痛點。", metrics: [["最高單片觀看", "5.2 萬"], ["直播表現", "場均破萬觀看"], ["內容形式", "Reels × 直播"]] },
  { category: "video", service: "短影音", name: "麻十七", industry: "港式醬料", summary: "以生活情境與娛樂內容呈現醬料的多元使用方式，建立系列化導購內容。", metrics: [["內容形式", "Reels"], ["系列策略", "3 支風格統一"], ["操作重點", "情境導購"]] },
  { category: "video", service: "短影音", name: "明粵火鍋", industry: "高檔火鍋", summary: "近距離呈現頂級食材與料理質感，強化高端餐飲品牌印象。", metrics: [["最高單片觀看", "6.9 萬"], ["系列表現", "3 支均超過 5 萬"], ["操作重點", "食材展示"]] },
  { category: "video", service: "短影音 × Podcast", name: "電商鐵軍理查", industry: "電商顧問課程", summary: "以知識型 Hook 與 Podcast 精華剪輯創造爆款，帶動課程品牌聲量。", metrics: [["最高單片觀看", "177.9 萬"], ["內容成果", "單片破百萬"], ["內容形式", "Reels × Podcast"]] },
  { category: "video", service: "短影音", name: "ONE RULE", industry: "高檔酒吧", summary: "以調酒製作過程與精品視覺語言，呈現酒吧的空間質感與品牌品味。", metrics: [["最高單片觀看", "10.19 萬"], ["系列表現", "3 支均破萬"], ["操作重點", "視覺美學"]] },
  { category: "video", service: "短影音", name: "深深愛上愛妮島", industry: "旅遊", summary: "以街訪互動格式創造旅遊內容擴散，帶動大量分享與品牌記憶點。", metrics: [["最高單片觀看", "343 萬"], ["內容形式", "Reels"], ["操作重點", "街訪互動"]] },
  { category: "video", service: "短影音", name: "裕隆汽車慶通保修廠", industry: "汽車保養", summary: "以技師解惑及入廠介紹建立專業人設，協助在地汽修服務數位轉型。", metrics: [["最高單片觀看", "20 萬"], ["入廠介紹", "14 萬觀看"], ["操作重點", "專業人設"]] },
  { category: "video", service: "短影音", name: "驊哥電腦", industry: "客製化筆電", summary: "用實測與使用教學軟化科技品牌形象，讓專業知識更容易被理解。", metrics: [["最高單片觀看", "8.35 萬"], ["實測內容", "6.56 萬觀看"], ["操作重點", "教學 × 實測"]] },
  { category: "video", service: "短影音", name: "依汰抗菌專家", industry: "寵物抗菌用品", summary: "以動物醫院院長專訪建立專業信任，透過知識內容自然連結品牌。", metrics: [["內容形式", "Reels"], ["信任來源", "醫師專業背書"], ["操作重點", "知識內容"]] },
  { category: "video", service: "商品攝影", name: "心茶", industry: "茶葉與茶點禮盒", summary: "以細膩靜物攝影呈現茶點、包裝與職人工藝，建立高質感商品素材。", metrics: [["內容形式", "短影音 × 商品攝影"], ["素材成果", "3 款商品"], ["操作重點", "職人工藝"]] },
  { category: "video", service: "短影音", name: "植沐", industry: "洗髮精與保養品", summary: "透過情緒共鳴切角與情境植入，讓洗護產品自然進入消費者日常。", metrics: [["最高單片觀看", "139 萬"], ["效果展示", "12.2 萬觀看"], ["操作重點", "情緒共鳴"]] },
  { category: "video", service: "短影音", name: "后里瘋馬戲", industry: "馬戲團與馬場景點", summary: "以景點探索與系列體驗內容，呈現馬場特色並觸及親子旅遊客群。", metrics: [["內容形式", "Reels"], ["系列內容", "3 支主題影片"], ["操作重點", "景點探索"]] },
  { category: "video", service: "短影音 × 直播剪輯", name: "OK胡總", industry: "海外房地產投資", summary: "將直播對談轉化為房產議題精華，吸引對投資與居住決策有需求的受眾。", metrics: [["最高單片觀看", "20.24 萬"], ["議題內容", "13.53 萬觀看"], ["內容形式", "直播剪輯"]] },
  { category: "video", service: "短影音", name: "OK大小媽", industry: "貸款理財教練", summary: "將理財知識轉化為易懂短影音，建立專家人設並為課程引流。", metrics: [["最高單片觀看", "19 萬"], ["人物內容", "4.81 萬觀看"], ["操作重點", "知識普及"]] },
  { category: "video", service: "短影音", name: "CERALIV LUXURY", industry: "精品鍍膜", summary: "以生活品味與精品視覺呈現鍍膜服務，觸及重視質感的高端客群。", metrics: [["最高單片觀看", "4.7 萬"], ["系列內容", "3.2 萬觀看"], ["操作重點", "精品質感"]] },
  { category: "video", service: "短影音", name: "EM STUDIO", industry: "客製化飾品", summary: "以俯拍開箱美學凸顯飾品細節，強化禮物儀式感與品牌精緻度。", metrics: [["最高單片觀看", "1.8 萬"], ["內容形式", "Reels 開箱"], ["操作重點", "俯拍美學"]] },
  { category: "video", service: "短影音", name: "胡索", industry: "身心靈與覺察指引", summary: "以深度議題與雙語字幕創造情感共鳴，延伸內容的海外觸及。", metrics: [["最高單片觀看", "11.15 萬"], ["系列內容", "10.72 萬觀看"], ["內容特色", "中英雙語"]] },
  { category: "video", service: "短影音", name: "娜姐教你穩穩貸", industry: "P2P 信貸", summary: "以媽咪街訪與生活故事軟化金融議題，讓專業內容更容易被分享。", metrics: [["最高單片觀看", "8.16 萬"], ["攻略內容", "3.59 萬觀看"], ["操作重點", "生活故事"]] },
  { category: "video", service: "音樂 MV 剪輯", name: "洪薇婷老師", industry: "音樂藝術家", summary: "以高質感演奏影像建立藝術家個人品牌，讓音樂作品具備穩定的社群呈現。", metrics: [["最高單片觀看", "1.5 萬"], ["系列表現", "多支破萬"], ["內容形式", "音樂 MV 剪輯"]] },
  { category: "video", service: "短影音", name: "糖鼎", industry: "黑糖專賣", summary: "以生活情境劇與情感共鳴自然植入產品，建立可延伸的系列內容。", metrics: [["內容形式", "Reels 情境劇"], ["系列內容", "3 支主題影片"], ["操作重點", "情感植入"]] },
  { category: "video", service: "短影音", name: "小食創合｜林彤", industry: "口袋調味包", summary: "結合美食探店與料理示範，強化調味包在日常生活中的應用場景。", metrics: [["最高單片觀看", "2.9 萬"], ["系列內容", "多支破萬"], ["操作重點", "開箱 × 料理"]] },
  { category: "video", service: "短影音", name: "營養師張語希", industry: "營養師個人品牌", summary: "將健康知識轉化為輕鬆易懂的短影音，建立營養師個人 IP。", metrics: [["最高單片觀看", "11.1 萬"], ["內容形式", "知識型 Reels"], ["操作重點", "個人品牌"]] },
];

const departmentLabels = {
  ecommerce: "電商運營部",
  pr: "公關部",
  media: "媒體部",
  video: "影音部",
};

const collaborationMap = {
  魚饌食: ["電商運營部", "媒體部", "公關部"],
  維克: ["電商運營部", "媒體部"],
  潔淨學: ["電商運營部", "影音部", "媒體部"],
  老媽拌麵: ["電商運營部", "公關部", "媒體部"],
  漢來: ["電商運營部", "媒體部", "公關部"],
  花田囍彘: ["電商運營部", "影音部", "媒體部"],
  飛航模飾: ["電商運營部", "影音部"],
  三風製麵: ["公關部", "影音部"],
  政治人物: ["公關部", "影音部"],
  麗嬰房: ["公關部", "媒體部"],
  植沐: ["影音部", "媒體部"],
  深深愛上愛妮島: ["影音部", "媒體部"],
  簡單保養: ["電商運營部", "影音部"],
};

const caseLinks = {
  魚饌食: "https://www.hamacen.tw/",
  維克: "https://tw.virbac.com/",
  潔淨學: "https://cleanologi.com/",
  老媽拌麵: "https://www.laomanoodle.com.tw/",
  漢來: "https://www.hilai-foods.com/",
  花田囍彘: "https://www.familypork.tw/",
  氣機科技: "https://aqive.app/",
  飛航模飾: "https://shopee.tw/flightmode",
  新肌霓: "https://www.ingeni.com.tw/",
  維格餅家: "https://www.vigorkobo.com/",
  香雞城: "https://www.chickenhouse.com.tw/",
  簡單保養: "https://www.simplecare.com.tw/",
  大武山雞蛋: "https://www.dawushan.com.tw/",
  麗嬰房: "https://www.lesenphants.com.tw/",
  三風製麵: "https://www.shanfeng.com.tw/",
  geneoX: "https://www.geneox-taiwan.com/",
  橘子工坊: "https://www.orangehouse.com.tw/",
  歐買尬海鮮串燒: "https://www.omgsf.com.tw/",
  "BV 必維國際集團": "https://www.bureauveritas.com.tw/",
  "幣託 X 全家": "https://www.bitopro.com/",
  綠界大數據: "https://ecpaydata.com.tw/",
  維德普: "https://virdep.com/",
  Formosa7s: "https://www.formosasevens.com.tw/",
  勝利聯賽: "https://www.victoryleague.com.tw/",
  凡登西服: "https://www.vandome.com.tw/",
  風動設計: "https://www.pneumatic-interior.com.tw/",
  達爾文金融: "https://sd-bank.com/",

  北歐櫥窗: "https://www.instagram.com/reel/C7T7t4DvS98/",
  台北汎德: "https://www.facebook.com/reel/2644016859267332",
  麻十七: "https://www.instagram.com/reel/CvzP_V3gExL/",
  明粵火鍋: "https://www.facebook.com/reel/1171168844110233",
  電商鐵軍理查: "https://www.instagram.com/reel/DHia4YMOo5C/",
  "ONE RULE": "https://www.tiktok.com/@onerule_taipei/video/7349125088580570370",
  深深愛上愛妮島: "https://www.facebook.com/reel/2477839239041444",
  裕隆汽車慶通保修廠: "https://www.facebook.com/share/r/19KcJsCGFU/",
  驊哥電腦: "https://www.instagram.com/reel/DCgw6NCvFIT/",
  依汰抗菌專家: "https://www.facebook.com/Aether.com.tw/videos/937405094651061",
  心茶: "https://www.youtube.com/shorts/P5pn3sWVGs4",
  植沐: "https://www.instagram.com/reel/DMzuMutye5R/",
  后里瘋馬戲: "https://www.instagram.com/reel/C4fm-7jxk-6/",
  OK胡總: "https://www.tiktok.com/@winnerlife_914/video/7319099228335262982",
  OK大小媽: "https://www.tiktok.com/@okbank.tw/video/7332771507309006082",
  "CERALIV LUXURY": "https://www.instagram.com/reel/CsVxPz9pZZu/",
  "EM STUDIO": "https://www.instagram.com/reel/C5S-P6aqB3Y/",
  胡索: "https://www.tiktok.com/@sourcekohtalks/video/7382496217567153416",
  娜姐教你穩穩貸: "https://www.tiktok.com/@winwinmoney88/video/7379469799971245329",
  洪薇婷老師: "https://www.instagram.com/reel/Cyf7GxChqzR/",
  糖鼎: "https://www.instagram.com/reel/C3SMzCLJBZR/",
  "小食創合｜林彤": "https://www.instagram.com/reel/C4sp-sWy5by/",
  營養師張語希: "https://www.instagram.com/reel/C5zvHQHBskP/",
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);

const renderLogo = (item) => {
  const logo = logos[item.name];
  if (!logo) {
    return `<div class="client-logo text-logo"><span>${escapeHtml(item.name)}</span></div>`;
  }
  const wideClass = wideLogos.has(item.name) ? " wide-logo" : "";
  return `<div class="client-logo${wideClass}" data-fallback="${escapeHtml(item.name)}"><img src="${escapeHtml(logo)}" alt="${escapeHtml(item.name)} logo" loading="lazy" /></div>`;
};

const renderCase = (item) => {
  const departments = collaborationMap[item.name] || [departmentLabels[item.category]];
  const link = caseLinks[item.name];
  const tagName = link ? "a" : "article";
  const linkAttributes = link ? ` href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" aria-label="查看 ${escapeHtml(item.name)} 案例"` : "";
  return `
    <${tagName} class="case-card${link ? " case-link" : ""}" data-category="${item.category}" data-service="${escapeHtml(item.service)}"${linkAttributes}>
      ${renderLogo(item)}
      <div class="case-kicker">${escapeHtml(item.serviceLabel || item.service)} · ${escapeHtml(item.industry)}</div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <dl>${item.metrics.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
      <div class="case-collab">
        <span class="case-collab-label">協作部門</span>
        <div class="case-collab-tags">${departments.map((department) => `<span>${department}</span>`).join("")}</div>
      </div>
    </${tagName}>
  `;
};

const caseGrid = document.querySelector("#case-grid");
const serviceToolbar = document.querySelector("#service-toolbar");
caseGrid.innerHTML = cases.map(renderCase).join("");

const serviceOrder = [
  "電商全代操", "品牌成長顧問", "通路代運營", "全代操", "momo營運", "通路營運",
  "媒體公關", "媒體公關 × 網紅行銷", "網紅行銷", "社群口碑", "實體活動策劃執行",
  "廣告投放", "網站製作", "短影音", "短影音 × 直播", "短影音 × Podcast",
  "商品攝影", "短影音 × 直播剪輯", "短影音 × 商品攝影", "音樂 MV 剪輯",
];

serviceToolbar.innerHTML = [
  '<button class="active" data-service-filter="all" type="button">全部服務</button>',
  ...serviceOrder.map((service) => `<button data-service-filter="${escapeHtml(service)}" type="button">${escapeHtml(service)}</button>`),
].join("");

const filters = document.querySelectorAll("[data-filter]");
const serviceFilters = document.querySelectorAll("[data-service-filter]");
const cards = document.querySelectorAll(".case-card");
let activeDepartment = "all";
let activeService = "all";

const updateCases = () => {
  cards.forEach((card) => {
    const departmentMatch = activeDepartment === "all" || card.dataset.category === activeDepartment;
    const serviceMatch = activeService === "all" || card.dataset.service === activeService;
    card.classList.toggle("hidden", !(departmentMatch && serviceMatch));
  });

  const availableServices = new Set(
    [...cards]
      .filter((card) => activeDepartment === "all" || card.dataset.category === activeDepartment)
      .map((card) => card.dataset.service)
      .filter(Boolean)
  );

  serviceFilters.forEach((button) => {
    const service = button.dataset.serviceFilter;
    button.hidden = service !== "all" && (activeDepartment === "all" || !availableServices.has(service));
  });
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeDepartment = button.dataset.filter;
    activeService = "all";
    serviceFilters.forEach((item) => item.classList.toggle("active", item.dataset.serviceFilter === "all"));
    updateCases();
  });
});

serviceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    serviceFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeService = button.dataset.serviceFilter;
    updateCases();
  });
});

document.querySelectorAll(".client-logo img").forEach((image) => {
  image.addEventListener("error", () => {
    const wrapper = image.closest(".client-logo");
    const fallback = wrapper?.dataset.fallback || image.alt.replace(/\s*logo\s*$/i, "");
    if (!wrapper) return;
    wrapper.classList.add("text-logo");
    wrapper.innerHTML = `<span>${escapeHtml(fallback)}</span>`;
  });
});

updateCases();

// Google Apps Script Web App 部署網址 (請在此替換為您的 Apps Script 網址)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqX_1ob1wnI60-XPM9bGxB8tJlmbeSflsj9pmn91jPOu9UUIHFK7XlZx1TJgrvQ_af/exec";

const form = document.getElementById("contactForm") || document.querySelector(".contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submit = form.querySelector("button[type='submit']");
  const originalText = submit.textContent;

  submit.textContent = "傳送中...";
  submit.disabled = true;

  // 收集表單欄位資料
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // 發送 POST 請求至 Google Apps Script
  // 使用 mode: 'no-cors' 以防 Apps Script 重新導向產生的 CORS 阻擋
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(data).toString()
  })
    .then(() => {
      // no-cors 模式下會返回 opaque response，我們直接視為成功並更新 UI
      submit.textContent = "已收到，我們會盡快聯繫您";
      form.reset();
    })
    .catch((error) => {
      console.error("表單提交出錯:", error);
      submit.textContent = "發送失敗，請稍後再試";
    })
    .finally(() => {
      window.setTimeout(() => {
        submit.textContent = originalText;
        submit.disabled = false;
      }, 2600);
    });
});

const toTopButton = document.querySelector(".to-top-button");
  const updateToTopButton = () => {
    if (!toTopButton) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const nearBottom = scrollable > 0 && scrollTop / scrollable > 0.72;
    toTopButton.classList.toggle("visible", scrollTop > 900 || nearBottom);
  };

  window.addEventListener("scroll", updateToTopButton, { passive: true });
  window.addEventListener("resize", updateToTopButton);
  toTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  updateToTopButton();
