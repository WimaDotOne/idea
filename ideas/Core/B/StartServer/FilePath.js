import path, { dirname } from "path"
import { fileURLToPath } from 'url';

function FilePath(thisFileUrl, relativePath) {
  const __filename = fileURLToPath(thisFileUrl)
  const __dirname = dirname(__filename)

  // path.join resolves relative path (e.g. "../") to absolute path
  return path.join(__dirname, relativePath)
}

export {
  FilePath
}