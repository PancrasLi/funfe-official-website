export function createPlayground(codes: {
  html?: string
  css?: string
  js?: string
}) {
  return JSON.stringify(codes)
} 