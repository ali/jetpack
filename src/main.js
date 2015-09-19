import app from 'app';
import path from 'path';
import BrowserWindow from 'browser-window';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'use-content-size': true
  });
  const index = path.resolve(__dirname, 'build/index.html');
  mainWindow.loadUrl('file://' + index);
  mainWindow.on('closed', () => { mainWindow = null });
});
