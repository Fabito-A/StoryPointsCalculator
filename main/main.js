console.log("Main Process working");
const { protocol, Menu,ipcMain } = require("electron");
const electron =require("electron");
const app =electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let win;

function createWindow(){
  win= new BrowserWindow(
    {
      width:550,
      height:770,
      resizable: true,
      title: "StoryPoint Calc",
      webPreferences: {
        nodeIntegration: true,
        contextIsolation:true,
      }
    }
  );
  win.setMenu(null);
  
  win.loadURL(url.format
    ({
      pathname: path.join(__dirname,'index.html'),
      
      protocol:'file',
      slashes:true
    }));
    
   // win.webContents.openDevTools();
    
    win.on('closed',()=>
    {
       win =null;
    })

}

app.on('ready',function(){
  createWindow()
});

app.on('window-all-closed',() =>
{
  if (process.platform !=='darwin'){
    app.quit()
  }
});

app.on('activate',() =>
{
  if (win === null){
    createWindow()
  }
});