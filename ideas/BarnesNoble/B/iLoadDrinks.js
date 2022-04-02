import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseDrinksText } from "./H/ParseDrinksText.js"

async function iLoadDrinks(req, res) {
  try {

    const hotPath = FilePath(import.meta.url, `./DB/HotDrinks.txt`)
    const coldPath = FilePath(import.meta.url, `./DB/ColdDrinks.txt`)
    const hotData = await fsPromises.readFile(
      hotPath, { encoding: "utf8" }
    )
    const coldData = await fsPromises.readFile(
      coldPath, { encoding: "utf8" }
    )

    const hotDrinks = ParseDrinksText(hotData)
    const coldDrinks = ParseDrinksText(coldData)
    return res.json({
      ok: true,
      hotDrinks,
      coldDrinks
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadDrinks
} 