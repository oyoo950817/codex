# 蔡齡萱個人品牌網站

這是一個以 React 與 Vite 建立的個人品牌網站前端專案。

## 開啟網站前的準備

請先在電腦安裝 Node.js。建議下載並安裝 **LTS（長期支援）版本**：

<https://nodejs.org/>

安裝完成後，請重新開啟 VS Code 的終端機，輸入以下指令確認是否安裝成功：

```bash
node -v
npm -v
```

畫面出現版本號（例如 `v22.x.x`）即代表準備完成。

## 從零開始啟動網站

1. 使用 VS Code 開啟此專案資料夾 `codex`。
2. 在 VS Code 上方選單選擇「終端機」→「新增終端機」。
3. 在終端機輸入以下指令，進入前端專案資料夾：

```bash
cd frontend
```

4. 第一次啟動時，安裝網站需要的套件：

```bash
npm install
```

5. 啟動本機開發伺服器：

```bash
npm run dev
```

6. 終端機會顯示類似以下內容：

```text
Local: http://localhost:5173/
```

按住 `Ctrl` 並點擊這個網址，或將網址複製到瀏覽器開啟，即可看到網站。

## 日後再次開啟網站

套件安裝完成後，日後通常只需要執行：

```bash
cd frontend
npm run dev
```

## 停止網站

在正在執行網站的終端機按下：

```text
Ctrl + C
```

## PowerShell 出現 npm 指令碼政策錯誤時

若 PowerShell 顯示「系統上已停用指令碼執行」之類的錯誤，請將指令中的 `npm` 改成 `npm.cmd`：

```bash
cd frontend
npm.cmd install
npm.cmd run dev
```

## 圖片放置位置

請將商品圖片與經歷圖片放在以下位置，並使用對應檔名：

```text
frontend/
├── 商品圖片/
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── product-3.jpg
└── 經歷圖片/
    ├── experience-1.jpg
    ├── experience-2.jpg
    └── experience-3.jpg
```

尚未放入圖片時，網站會顯示預設的漸層圖片佔位樣式。

## 常用指令

```bash
# 啟動開發網站
npm run dev

# 建立可部署的正式版本
npm run build
```
