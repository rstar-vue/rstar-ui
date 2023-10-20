export function getProperty(
  obj: Record<string, Record<string, string> | string | undefined>,
  key?: string,
  gap = '.'
) {
  const keys = key?.split(gap)
  for (const i in keys) {
    obj = obj?.[keys[i]] as Record<string, string>
  }
  return obj as unknown as string | undefined
}
