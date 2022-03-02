import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseUnitText } from "./H/ParseUnitText.js"

async function iLoadWords(req, res) {
  try {
    const unit = req.body.unit || 1
    const lang = req.body.lang || "de-DE"

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

    const path = FilePath(import.meta.url, `./DB/${language}/Unit${unit}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
    const words = ParseUnitText(data)
    return res.json({
      ok: true,
      words
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadWords
} 