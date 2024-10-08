// Function to encode a password
export function encodePassword(password: string) {
  return btoa(password)
}

// Function to decode a password
export function decodePassword(encodedPassword: string) {
  return atob(encodedPassword)
}
