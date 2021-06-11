import { BrowserWindow, app } from 'electron'
import { join } from 'path'

interface WinOpts {
    height: number,
    width: number
}

const defaultOpts = {
    height: 1024,
    width: 766,
    webPreference: {
        nodeIntergration: true
    }
}

function createWin(key: string, winOpts?: WinOpts) {
    let win: BrowserWindow
    win = new BrowserWindow({ ...defaultOpts, ...winOpts })
    let url = app.isPackaged
        ? `file://${join(__dirname, '../render/index.html#/' + key)}`
        : `http://localhost:${process.env.PORT}/${key}`
    win.loadURL(url)
    global.win[key] = win
}

export {
    createWin,
    WinOpts
}