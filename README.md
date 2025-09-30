# 網址:

https://webprojectforintroduce.pages.dev/

# 環境安裝指令

npm install
npm install bootstrap

# 執行 package.json 指令

測試: npm run start
ex: npm run build

# ============================================

# 1. 刪除所有 node 模組

rm node_modules

# 2. 刪除鎖定檔 (lock file)，讓 NPM 重新計算所有相依性

del package-lock.json

# 環境:

v18.19.0
bootstrap: 5.3.8

angular.json configurations 設定環境

# 無法使用 ng 指令

npm install -g @angular/cli

# ============================================

# 筆記 tsconfig.json

"resolveJsonModule": true //允許從 .json 檔直接 import

# 筆記 angular.json

"optimization": false, // 關閉壓縮，方便開發
"outputHashing": "none", // 不在檔名加 hash
"extractLicenses": false, // 不抽出 license 檔
"sourceMap": true, // 開啟 source map，方便除錯
"tsConfig": "tsconfig.dev.json" // 使用開發專用 tsconfig

# 筆記 build 過程

            開始 ng build / ng serve
                        │
                        ▼
         讀取 angular.json 配置 (build, serve, configurations)
                        │
                        ▼
      確認指定的 --configuration (ex: development, test, production)
                        │
                        ▼
      檢查該 configuration 是否有 fileReplacements 設定？
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
    有 (替換檔案)             沒有 (用預設檔案)

ex: environment.ts → environment.prod.ts
│
▼
編譯 TypeScript / 打包資源 (Webpack)
│
▼
輸出 Dist (最終成品)

ng build --configuration=development
→ 匯入 environment.ts

ng build --configuration=test
→ 匯入 environment.test.ts

ng build --configuration=production
→ 匯入 environment.prod.ts

ng serve --configuration=production
→ 執行 environment.prod.ts
