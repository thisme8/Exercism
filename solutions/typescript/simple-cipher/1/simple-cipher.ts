function shiftChar(c: string, shift: number): string {
  const base = 'a'.charCodeAt(0)
  const code = ((c.charCodeAt(0) - base + shift + 26) % 26) + base
  return String.fromCharCode(code)
}

function generateRandomKey(length: number = 100): string {
  let key = ''
  for (let i = 0; i < length; i++) {
    key += String.fromCharCode(97 + Math.floor(Math.random() * 26))
  }
  return key
}

export class SimpleCipher {
  private key: string

  constructor(key?: string) {
    if (key) {
      if (!/^[a-z]+$/.test(key)) throw new Error('Key must be lowercase letters only')
      this.key = key
    } else {
      this.key = generateRandomKey()
    }
  }

  encode(plainText: string): string {
    let encoded = ''
    for (let i = 0; i < plainText.length; i++) {
      const c = plainText[i]
      const shift = this.key[i % this.key.length].charCodeAt(0) - 'a'.charCodeAt(0)
      encoded += shiftChar(c, shift)
    }
    return encoded
  }

  decode(cipherText: string): string {
    let decoded = ''
    for (let i = 0; i < cipherText.length; i++) {
      const c = cipherText[i]
      const shift = this.key[i % this.key.length].charCodeAt(0) - 'a'.charCodeAt(0)
      decoded += shiftChar(c, -shift)
    }
    return decoded
  }

  getKey(): string {
    return this.key
  }
}
