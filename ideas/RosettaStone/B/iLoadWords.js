import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseUnitText } from "./H/ParseUnitText.js"

async function iLoadWords(req, res) {
  try {
    const unit = req.body.unit
    const lang = req.body.lang

    let language = ""
    switch(lang) {
      case "fr-FR": 
        language="French"
        break
      case "de-DE":
        language="German"
        break
      default:
    }

    if(!language || !unit) {
      return res.json({ ok:false, error: "Invalid language or unit"})
    }
    const path = FilePath(import.meta.url, `./DB/${language}/Unit${unit}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const pages = ParseUnitText(data)
    return res.json({
      ok: true,
      pages
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadWords
} 