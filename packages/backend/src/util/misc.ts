/**
 * Miscellaneous shared functions go here.
 */

/**
 * Get a random number between 1 and 1,000,000,000,000
 */
export function getRandomInt(): number {
  return Math.floor(Math.random() * 1_000_000_000_000)
}

export function toFixed(num: number, fixed: number): string {
  var reg = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
  let matches = num.toString().match(reg)
  if (matches !== null) {
    return matches[0]
  }

  return num.toFixed(fixed)
}

/**
 * Wait for a certain number of milliseconds.
 */
export function tick(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
