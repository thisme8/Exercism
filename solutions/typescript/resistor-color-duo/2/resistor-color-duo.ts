export const decodedValue = ([color1,color2]: string[]) : number => {
  return (COLOR.indexOf(color1) * 10 + COLOR.indexOf(color2))
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