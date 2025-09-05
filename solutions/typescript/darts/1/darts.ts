export function score(x: number, y: number): number {
  const landingDistance = Math.sqrt(x * x + y * y)

  if (landingDistance <= 1) return 10     
  if (landingDistance <= 5) return 5       
  if (landingDistance <= 10) return 1      
  return 0                           
}
