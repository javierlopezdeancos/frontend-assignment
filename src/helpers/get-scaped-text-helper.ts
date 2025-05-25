function getScapedTextHelper(text: string) {
  return text.replace(/[\u{0080}-\u{FFFF}]/gu,"")
}

export default getScapedTextHelper
