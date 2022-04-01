import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseDrinksText } from "./H/ParseDrinksText.js"

async function iLoadDrinks(req, res) {
  try {

    const path = FilePath(import.meta.url, `./DB/Drinks.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const drinks = ParseDrinksText(data)
    return res.json({
      ok: true,
      drinks
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadDrinks
} 