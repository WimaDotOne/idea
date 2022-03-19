import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseDvdListText } from "./H/ParseDvdListText.js"

async function iLoadDvdList(req, res) {
  try {
    const path = FilePath(import.meta.url, `./DB/dvdList.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const pages = ParseDvdListText(data)
    return res.json({
      ok: true,
      pages
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadDvdList
} 