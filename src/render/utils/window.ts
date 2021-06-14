import { ipcRenderer } from 'electron'
// const { ipcRenderer } = window.require('electron')
import { WinOpts } from '../../main/window'


function createWin(key: string, winOpts?: WinOpts) {
    ipcRenderer.send("openWin", { key, winOpts })
}

export {
    createWin
}