function widget(config) {
  if (typeof config !== 'object') return

  // attributes
  const theme = config.theme ?? 'dark'
  const placement = config.placement ?? 'bottom right'
  const uploadLimit = config.uploadLimit ?? 20
  const zIndex = config.zIndex ?? 9999
}