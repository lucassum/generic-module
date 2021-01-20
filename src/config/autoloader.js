const path = require('path')
const fs = require('fs')

const loadAll = (app, ...pathToModulesFolder) => {
    fs.readdirSync(path.resolve(...pathToModulesFolder), { withFileTypes: true })
        .filter(dir => dir.isDirectory() && dir.name.charAt(0) !== '_')
        .forEach(mod => app.use(`/${mod.name}`, require(path.resolve(...pathToModulesFolder, mod.name))))
}

const AutoLoader = { loadAll }

module.exports = AutoLoader