import { app, session, BrowserWindow, screen } from "electron";
import fs from "fs";
import path from "path";

const [, ...args] = process.argv;

const isDev = args.includes("--dev");

if (isDev)
	process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

let w: BrowserWindow;

app.commandLine.appendSwitch("enable-unsafe-webgpu");

app.whenReady().then(async () => {

	// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	// 	callback({
	// 		responseHeaders: {
	// 			...details.responseHeaders,
	// 			'Cross-Origin-Opener-Policy': 'same-origin',
	// 			'Cross-Origin-Embedder-Policy': 'require-corp',
	// 		}
	// 	});
	// });

	w = new BrowserWindow({
		//enableLargerThanScreen: true,
		//show: true,
		//hasShadow: true,
		//paintWhenInitiallyHidden: true,
		webPreferences: {
			contextIsolation: false,
			backgroundThrottling: true,
			//devTools: isDev,
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			experimentalFeatures: true,
			spellcheck: false
		}
	});

	//w.setMenu(null);

	await w.loadFile(__dirname + "/../examples/index.html");

	if (isDev)
	{
		const displays = screen.getAllDisplays();

		const display = displays.find(s => s.internal) || displays[0];

		const [width, height] = w.getSize();
		const centerX = ((display.bounds.x - (display.bounds.width + display.bounds.x)) / 2) - (width / 2);
		const centerY = (((display.bounds.height + display.bounds.y) - display.bounds.y) / 2) - (height / 2);
		w.setPosition(centerX, centerY);
		w.maximize();
		w.webContents.openDevTools({ mode: "right" });

		fs.watch(path.resolve(__dirname, "public"), {}, () => w.webContents.reload());
	}

	w.show();
});