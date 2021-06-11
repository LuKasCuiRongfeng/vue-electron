import { join } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import dotenv from 'dotenv'
import { createWin as _createWin, WinOpts } from './window'

dotenv.config({ path: join(__dirname, '../../.env') })

let win: BrowserWindow

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: join(__dirname, '../../src/preload/index.js'),
    },
  })

  const URL = app.isPackaged
    ? `file://${join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址
    : `http://localhost:${process.env.PORT}` // vite 启动的服务器地址

  win?.loadURL(URL)
  global.win["main"] = win
  console.log(222, global.win)
}

app.whenReady().then(createWin)

ipcMain.on("openWin", (e, arg) => {
  _createWin(arg.key, arg.winOpts)
})