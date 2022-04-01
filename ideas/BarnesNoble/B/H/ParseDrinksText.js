
export function ParseDrinksText(data) {

  const blocks = data.split("===")

  const json = []
  for(let i=0; i<blocks.length; i++) {
    const lines = (blocks[i] || "").split("\n").filter((line)=>(line || "").trim())
    const codeName = (lines[0] || "").split("|")
    const code = (codeName[0] || "").trim()
    const name = (codeName[1] || "").trim()
    let steps = []
    for(let j=1; j<lines.length; j++) {
      const stepData = lines[j].split("|")
      const illustration = (stepData[0] || "").trim()
      const oneLine = (stepData[1] || "").trim()
      const step = { illustration, oneLine }
      steps.push(step)
    }
    json.push({
      code, name, steps
    })
  }

  return json
}