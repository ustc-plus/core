export function TruncateMiddle(text: string, length: number = 5) {
  console.log(
    `TruncateMiddle: is text undefined? ${text === undefined} should we use substring? ${text?.length > length * 2 + 1}`
  )
  if (text?.length > length * 2 + 1) {
    return `${text.substring(0, length)}...${text.substring(text.length - length, text.length)}`
  }

  return text
}
