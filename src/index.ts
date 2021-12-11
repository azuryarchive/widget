import { version } from './config.json'
import togglePopup from './modules/togglePopup'
import generatePopup from './modules/generatePopup'
import dark from './themes/dark.json'
import light from './themes/light.json'
import styles from './styles.module.css'

/**
 * ### Generate Azury's Widget
 * 
 * A function that generates Azury's widget and appends it to the DOM.
 */
export default (config?: Configuration) => {
  if (!config) config = {}

  document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap">'
  document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined|Material+Icons+Round">'

  const theme = (typeof config.theme === 'object') ? config.theme : (config.theme === 'light') ? light : dark
  , placement: string = config.placement ?? 'bottom right'
  , zIndex: number = config.zIndex ?? 9999

  , icon: HTMLDivElement = document.createElement('div')
  , container: HTMLDivElement = document.createElement('div')

  container.className = styles.widget
  for (const [key, value] of Object.entries(theme)) {
    container.style.setProperty(`--${key}`, value)
  }

  const initialContent = `<i class='material-icons-round'>note_add</i>`
  icon.className = styles.icon
  icon.innerHTML = initialContent
  icon.style.zIndex = zIndex.toString()

  if (placement.split(' ')[0] === 'bottom') icon.style.bottom = '25px'
  if (placement.split(' ')[0] === 'top') icon.style.top = '25px'
  if (placement.split(' ')[1] === 'right') icon.style.right = '25px'
  if (placement.split(' ')[1] === 'left') icon.style.left = '25px'

  container.appendChild(icon)
  container.appendChild(generatePopup({
    placement: placement,
    zIndex: zIndex
  }))

  document.body.appendChild(container)

  document.querySelector(`.${styles.icon}`)?.addEventListener('click', togglePopup)
}
