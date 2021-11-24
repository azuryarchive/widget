interface Configuration {
  theme?: String,
  placement?: String,
  uploadLimit?: Number,
  zIndex?: Number
}

export default (config?: Configuration) => {
  if (!config) config = {}

  const theme: String = config.theme ?? 'dark'
  , placement: String = config.placement ?? 'bottom right'
  , uploadLimit: Number = config.uploadLimit ?? 50
  , zIndex: Number = config.zIndex ?? 9999

  , input: HTMLInputElement = document.createElement('input')
  , icon: HTMLDivElement = document.createElement('div')

  , checkStatus = async () => {
    try {
      const response = await fetch('https://status.azury.gg')
      const data = await response.json()
      if (response.ok && data.services.widget === 'normal') return true
      return false
    } catch (err) {
      return false
    }
  }
  
  , showPopup = () => {
    console.log('Hello World')
  }

  , hidePopup = () => {

  }

  , upload = async (file: any) => {
    const response = await fetch('https://status.azury.gg')
    const data = await response.json()
  }

  // prepare icon
  icon.classList.add('azury-icon')
  icon.onclick = showPopup
}