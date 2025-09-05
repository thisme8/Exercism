const completeOrbit = 31557600  as number ;
type PlanetName = keyof typeof Planet;

export function age(planet: PlanetName, seconds: number): number {
  const earthAge = seconds / completeOrbit / Planet[planet];
  return parseFloat(earthAge.toFixed(2));
}

interface Age {
  [key : string] : number
}

export const Planet: Age ={
mercury : 0.2408467,   
venus : 0.61519726,      
earth:1.0,
mars:1.8808158,  
jupiter :11.862615,
saturn:29.447498,
uranus:84.016846, 
neptune:164.79132 ,
}



