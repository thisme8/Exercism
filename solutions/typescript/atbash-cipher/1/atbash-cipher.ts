function atbashChar(c: string): string {
  if (c >= 'a' && c <= 'z') {
    return String.fromCharCode('a'.charCodeAt(0) + ('z'.charCodeAt(0) - c.charCodeAt(0)))
  }
  return c
}

export function encode(plainText: string): string {
  const cleaned = plainText.toLowerCase().replace(/[^a-z0-9]/g, '')
  let encoded = ''
  
  for (const char of cleaned) {
    encoded += atbashChar(char)
  }

  return encoded.replace(/(.{5})/g, '$1 ').trim()
}

export function decode(cipherText: string): string {
  const cleaned = cipherText.replace(/\s+/g, '')
  let decoded = ''
  
  for (const char of cleaned) {
    decoded += atbashChar(char)
  }

  return decoded
}
