const path = require('path');
const root = path.join(__dirname, '../')
const PATHS = {
  root,
  src: path.join(root, 'src'),
  node_modules: path.join(root, 'node_modules'),
  entry: path.join(root, 'src/main.ts'),
  public: path.join(root, 'public'),
  dist: path.join(root, 'dist'),
}

module.exports = { PATHS };