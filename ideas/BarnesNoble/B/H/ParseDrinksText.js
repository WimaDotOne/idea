
export function ParseDrinksText(data) {

  const blocks = data.split("===")

  const json = []
  for(let i=0; i<blocks.length; i++) {

    const drink = parseDrinkText(blocks[i], i)
    json.push(drink)
  }

  return json
}

function parseDrinkText(data, id) {
  const lines = (data || "").split("\n").filter((line)=>(line || "").trim())
  const codeName = (lines[0] || "").split("|")
  const code = (codeName[0] || "").trim()
  const name = (codeName[1] || "").trim()
  const hot = !!(codeName[2] || "").trim()
  let steps = []
  for(let j=1; j<lines.length; j++) {
    const stepData = lines[j].split("|")
    const illustration = (stepData[0] || "").trim()
    const oneLine = (stepData[1] || "").trim()
    const optional = oneLine.includes("Optional") 
    const step = { illustration, oneLine, optional }
    steps.push(step)
  }
  return {
    id, hot,
    code, name, steps, 
  }
}