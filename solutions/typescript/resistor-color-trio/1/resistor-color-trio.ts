export const decodedResistorValue = ([color1, color2, color3]: string[]) =>{
  let numbers = (COLOR.indexOf(color1) * 10 + COLOR.indexOf(color2))/10
  let zeros = COLOR.indexOf(color3)
  let units = numbers * 10 ** ((zeros +1) %3)
  return (`${units} ${UNIT[((zeros+1)/3)| 0]}` )
}
export const COLOR = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white",
]

export const UNIT = [
  "ohms",
  "kiloohms",
  "megaohms",
  "gigaohms",
]