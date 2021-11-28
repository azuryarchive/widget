export default () => {
  try {
    const response = await fetch('https://azury.dev/status/services/widget')
    const data = await response.json()

    if (response.ok && data.services.widget === 'normal') return true

    return false
  } catch (err) {
    return false
  }
}