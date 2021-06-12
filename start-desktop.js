var servor = require("servor")

var PORT = 5000

servor({
  root: 'src/client',
  //fallback: 'index.html',
  //module: false,
  //static: false,
  reload: true,
  //inject: '',
  //credentials: null,
  port: PORT,
})

.then(() => {
  console.log(`> Running on http://localhost:${PORT}`)
})
.catch(e => console.log(e))

const {app, BrowserWindow} = require('electron')

app.commandLine.appendSwitch('enable-unsafe-webgpu')

function createWindow () {
  const mainWindow = new BrowserWindow()
  mainWindow.loadURL(`http://localhost:${PORT}`)
}

app.whenReady()
.then(createWindow)

app.on("exit", () => {
  process.exit(0)
})
