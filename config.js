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

  // 部門（假資料，之後可改）。color 是賽道顏色
  departments: [
    { id: "sales",  zh: "業務部",   en: "Sales",       vi: "Kinh doanh",         color: "#ff5a5f" },
    { id: "prod",   zh: "生產部",   en: "Production",  vi: "Sản xuất",           color: "#ffb400" },
    { id: "qc",     zh: "品管部",   en: "Quality",     vi: "Quản lý chất lượng", color: "#00a699" },
    { id: "rd",     zh: "研發部",   en: "R&D",         vi: "Nghiên cứu & PT",    color: "#4a90e2" },
    { id: "admin",  zh: "管理部",   en: "Admin",       vi: "Hành chính",         color: "#9b59b6" },
    { id: "wh",     zh: "倉儲物流", en: "Logistics",   vi: "Kho vận",            color: "#7cb342" }
  ]
};
