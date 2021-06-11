import { ipcRenderer } from 'electron'
import { WinOpts } from '../../main/window'


function createWin(key: string, winOpts?: WinOpts) {
    ipcRenderer.send("openWin", { key, winOpts })
}

export {
    createWin
}