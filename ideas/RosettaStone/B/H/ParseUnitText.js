
export function ParseUnitText(data) {
  const words = data.split("\n")
  const json = []

  for(let i=0; i<words.length; i++) {
    const w = words[i].trim()
    if(!w) continue
    const wordInfo = w.split("|")
    const word = (wordInfo[0] || "").trim()
    const translate = (wordInfo[1] || "").trim()
    const illustration = (wordInfo[2] || "").trim()
    json.push({
      word, translate, illustration
    })
  }

  return json
}