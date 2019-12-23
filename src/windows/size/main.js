/**
 * 全屏 
 * fullscreen: true;
 */
// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  /**
   *  窗口的尺寸和位置
   * width：  窗口宽度
   * height： 窗口高度
   * minWidth:窗口允许的最小宽度
   * minHieght：窗口允许的最小高度
   * maxWidth:窗口允许的最大宽度
   * maxHieght：窗口允许的最大高度
   * x:指定窗口横坐标
   * y:指定窗口纵坐标
   * */

   mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHieght: 200,
    minWidth: 200,
    maxHeight: 1000,
    maxWidth: 1000,
    x: 10,
    y: 10,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  // mainWindow = new BrowserWindow({
  //   fullscreen: true,
  //   webPreferences: {
  //     preload: path.join(__dirname, 'preload.js'),
  //     nodeIntegration: true
  //   }
  // })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  //打开开发者工具
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    console.log('closed')
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  console.log('activate');

  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.