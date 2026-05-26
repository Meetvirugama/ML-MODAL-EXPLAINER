// Mathematical utility helpers for the ML Explainer

/**
 * Generates a random number following a Normal (Gaussian) distribution
 * using the Box-Muller transform.
 */
export function randomNormal(mean = 0, stdDev = 1) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdDev + mean;
}

/**
 * Linear interpolation between two values
 */
export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
