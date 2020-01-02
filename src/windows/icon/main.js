const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');


/**
 * icon 的设置
 */

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: '.\\images\\icon.ico',
    fullscreenable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  mainWindow.setIcon('.\\images\\icon.ico')
  mainWindow.isFullScreen
  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    console.log('closed')

    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  console.log('activate');
  if (mainWindow === null) createWindow()
})