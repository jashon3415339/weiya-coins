// ============================================================
//  尾牙全場手機賽馬 — 設定檔（只需要改這個檔案）
// ============================================================
//
//  1) 把 Firebase 主控台給你的設定貼到下面 firebase 區塊。
//     還沒貼之前（apiKey 仍是 "PASTE_..."），遊戲會自動進入
//     「單機試玩模式」：用同一台電腦開兩個分頁就能玩。
//  2) 部門清單可以自由增減，id 只能用英文小寫、數字、底線。
//
window.GAME_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAONdwzgIzxjFT0-eDIoKekToNUh4bMcC0",
    authDomain: "weiya-2026-15529.firebaseapp.com",
    databaseURL: "https://weiya-2026-15529-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weiya-2026-15529",
    appId: "1:925908014479:web:6218bf40ad3ee80162e7fa"
  },

  // 大螢幕主題："coins" = 財神撒金幣（金幣堆高）、"horse" = 賽馬
  theme: "coins",

  // 主持人登入用的 Email（要跟 Firebase Authentication 裡建立的帳號、
  // 以及 database.rules.json 裡的 Email 一模一樣）
  hostEmail: "host@weiya2026.com",

  // 比賽秒數
  durationSec: 60,

  // 按「開始」後的 3-2-1 倒數秒數
  countdownSec: 5,

  // 防作弊：單支手機每秒最多算幾下（超過的點擊不計）
  maxTapsPerSec: 15,

  // 手機入口網址。留空 = 自動用大螢幕所在的網址（同一個資料夾的 index.html）
  joinUrl: "",

  // 分組：以「桌」為單位（目前 14 桌，不夠或太多就增減這裡的行數）
  // id 只能用英文小寫、數字、底線；short 是大螢幕金幣柱下方的短名稱；color 是顏色
  departments: [
    { id: "t01", zh: "第1桌", short: "1桌", en: "Table 1", vi: "Bàn 1", color: "#E23636" },
    { id: "t02", zh: "第2桌", short: "2桌", en: "Table 2", vi: "Bàn 2", color: "#E27F36" },
    { id: "t03", zh: "第3桌", short: "3桌", en: "Table 3", vi: "Bàn 3", color: "#E2C936" },
    { id: "t04", zh: "第4桌", short: "4桌", en: "Table 4", vi: "Bàn 4", color: "#B1E236" },
    { id: "t05", zh: "第5桌", short: "5桌", en: "Table 5", vi: "Bàn 5", color: "#67E236" },
    { id: "t06", zh: "第6桌", short: "6桌", en: "Table 6", vi: "Bàn 6", color: "#36E24E" },
    { id: "t07", zh: "第7桌", short: "7桌", en: "Table 7", vi: "Bàn 7", color: "#36E298" },
    { id: "t08", zh: "第8桌", short: "8桌", en: "Table 8", vi: "Bàn 8", color: "#36E2E2" },
    { id: "t09", zh: "第9桌", short: "9桌", en: "Table 9", vi: "Bàn 9", color: "#3698E2" },
    { id: "t10", zh: "第10桌", short: "10桌", en: "Table 10", vi: "Bàn 10", color: "#364EE2" },
    { id: "t11", zh: "第11桌", short: "11桌", en: "Table 11", vi: "Bàn 11", color: "#6736E2" },
    { id: "t12", zh: "第12桌", short: "12桌", en: "Table 12", vi: "Bàn 12", color: "#B136E2" },
    { id: "t13", zh: "第13桌", short: "13桌", en: "Table 13", vi: "Bàn 13", color: "#E236C9" },
    { id: "t14", zh: "第14桌", short: "14桌", en: "Table 14", vi: "Bàn 14", color: "#E2367F" }
  ]
};
