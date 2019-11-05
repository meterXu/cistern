const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 360,
        height: 600,
        useContentSize: true,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            preload: path.join(__dirname, '/preload.js')
        }
    })
    //mainWindow.loadFile('index.html')
    if (isDev) {
        mainWindow.loadURL('http://localhost:3000/')
    } else {
        mainWindow.loadFile(path.join(__dirname, '/../build/index.html'))
    }
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})