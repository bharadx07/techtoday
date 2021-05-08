const electron = require("electron"),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow;

const path = require("path"),
  isDev = require("electron-is-dev");

const { Tray, Menu } = electron;

let mainWindow;
let tray;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 480,
    height: 320,
    icon: __dirname + "/MiniHeadLogo.png",
  });

  tray = new Tray(__dirname + "/MiniHeadLogo.png");
  let contextMenu = Menu.buildFromTemplate([
    {
      label: "Open",
      click: () => {
        mainWindow.maximize();
      },
    },
    {
      label: "Quit",
      click: () => {
        app.isQuiting = true;
        app.quit();
      },
    },
  ]);
  tray.setToolTip("TechToday");
  tray.setContextMenu(contextMenu);
  tray.on("right-click", () => {
    tray.popUpContextMenu();
  });
  tray.on("click", () => {
    mainWindow.maximize();
  });

  const appUrl = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(appUrl);
  mainWindow.maximize();
  mainWindow.setFullScreen(true);
  mainWindow.on("closed", () => (mainWindow = null));
};
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  // Follow OS convention on whether to quit app when
  // all windows are closed.
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  // If the app is still open, but no windows are open,
  // create one when the app comes into focus.
  if (mainWindow === null) {
    createWindow();
  }
});
