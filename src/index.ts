// config
import { version } from '../package.json'

// modules
import togglePopup from './modules/togglePopup'
import generatePopup from './modules/generatePopup'

// styles
import './styles/dark.css'
import './styles/light.css'
import './styles/base.css'

interface Configuration {
  theme?: String,
  placement?: String,
  uploadLimit?: Number,
  zIndex?: Number
}

/**
 * **Generate the Widget**
 * 
 * Generate the Widget
 */
export default (config?: Configuration) => {
  if (!config) config = {}

  // append stylesheet
  const sheet = document.createElement('link')
  sheet.rel = 'stylesheet'
  if (window.location.hostname === '127.0.0.1') sheet.href = '../build/index.css'
  else `https://cdn.jsdelivr.net/npm/@azury/widget@${version}/build/index.css`
  document.head.appendChild(sheet)

  // append typefaces
  const poppins = document.createElement('link')
  poppins.rel = 'stylesheet'
  poppins.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
  document.head.appendChild(poppins)
  const materialIcons = document.createElement('link')
  materialIcons.rel = 'stylesheet'
  materialIcons.href = 'https://fonts.googleapis.com/css?family=Material+Icons+Outlined|Material+Icons+Round'
  document.head.appendChild(materialIcons)

  // set configuration
  const theme: String = config.theme ?? 'dark'
  , placement: String = config.placement ?? 'bottom right'
  , uploadLimit: Number = config.uploadLimit ?? 50
  , zIndex: Number = config.zIndex ?? 9999

  // create main elements
  , input: HTMLInputElement = document.createElement('input')
  , icon: HTMLDivElement = document.createElement('div')
  , popup: HTMLDivElement = document.createElement('div')

  // prepare widget container
  const container = document.createElement('div')
  container.className = `azury_widget azury_theme_${theme}`

  // prepare icon
  icon.onclick = () => togglePopup(uploadLimit)
  icon.className = 'azury_icon'
  icon.innerHTML = '<i class="material-icons-round">note_add</i>'
  container.appendChild(icon)

  // determine placement
  if (placement.split(' ')[0] === 'bottom') icon.style.bottom = '25px'
  if (placement.split(' ')[0] === 'top') icon.style.top = '25px'
  if (placement.split(' ')[1] === 'right') icon.style.right = '25px'
  if (placement.split(' ')[1] === 'left') icon.style.left = '25px'

  // customize zIndex
  icon.style.zIndex = zIndex.toString()

  // get initial icon content
  let initialIconContent = icon.innerHTML

  // display version on right click
  icon.addEventListener('auxclick', () => {
    if (icon.innerHTML === `<p>v${version}</p>`) {
      icon.innerHTML = initialIconContent
    } else {
      initialIconContent = icon.innerHTML
      icon.innerHTML = `<p>v${version}</p>`
    }
  })

  // generate popup
  container.appendChild(generatePopup({
    placement: placement,
    zIndex: zIndex.valueOf() - 1,
    uploadLimit: uploadLimit
  }))

  // append widget
  document.body.appendChild(container)
}
