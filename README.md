# 🚀

This is a starter project for building modern desktop applications
with [Electron](https://github.com/atom/electron).


## Project Structure

* `/build/` - Destination directory for builds
* `/dist/` - Destination directory for distributable builds
* `/resources/` - Static assets for distributable builds
* `/src/` - Project source code
* `/src/main.js` - Entry point for Electron's browser
* `/src/index.html` - Entry point for Electron's renderer
  This file is loaded by `main.js` into a `BrowserWindow`.


## npm Scripts

See `package.json` for list of scripts. All scripts are run with `npm run <script>`.


* `clean` -- Remove all files in the build and dist destinations
* `build` -- Build the source files
* `lint` -- Lint the source tree
* `start` -- Start the Electron app
* `test` -- Run the testing suite
