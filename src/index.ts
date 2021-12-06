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
  , uploadLimit: number = config.uploadLimit ?? 50
  , zIndex: number = config.zIndex ?? 9999

  , input: HTMLInputElement = document.createElement('input')
  , icon: HTMLDivElement = document.createElement('div')
  , popup: HTMLDivElement = document.createElement('div')
  , container: HTMLDivElement = document.createElement('div')

  container.className = styles.widget
  container.style.setProperty('--font', theme.font)
  container.style.setProperty('--heading', theme.heading)
  container.style.setProperty('--text', theme.text)
  container.style.setProperty('--textDark', theme.textDark)
  container.style.setProperty('--textLink', theme.textLink)
  container.style.setProperty('--surface', theme.surface)
  container.style.setProperty('--surfaceSecondary', theme.surfaceSecondary)
  container.style.setProperty('--surfaceTertiary', theme.surfaceTertiary)
  container.style.setProperty('--surfaceQuartiary', theme.surfaceQuartiary)
  container.style.setProperty('--gray', theme.gray)
  container.style.setProperty('--graySecondary', theme.graySecondary)
  container.style.setProperty('--grayTertiary', theme.grayTertiary)
  container.style.setProperty('--shadowAll', theme.shadowAll)
  container.style.setProperty('--shadowBottom', theme.shadowBottom)
  container.style.setProperty('--blurple', theme.blurple)
  container.style.setProperty('--blurpleSecondary', theme.blurpleSecondary)
  container.style.setProperty('--green', theme.green)
  container.style.setProperty('--red', theme.red)

  const initialContent = `<i class='material-icons-round'>note_add</i>`
  icon.className = `${styles.icon}`
  icon.innerHTML = initialContent
  icon.style.zIndex = zIndex.toString()

  if (placement.split(' ')[0] === 'bottom') icon.style.bottom = '25px'
  if (placement.split(' ')[0] === 'top') icon.style.top = '25px'
  if (placement.split(' ')[1] === 'right') icon.style.right = '25px'
  if (placement.split(' ')[1] === 'left') icon.style.left = '25px'

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'v' && icon.innerHTML === `<p>${version}</p>`) return icon.innerHTML = initialContent
    if (event.ctrlKey && event.key === 'v') icon.innerHTML = `<p>${version}</p>`
  })

  container.appendChild(icon)
  container.appendChild(generatePopup({
    placement: placement,
    zIndex: zIndex.valueOf() - 1,
    uploadLimit: uploadLimit
  }))

  document.body.appendChild(container)
  document.querySelector(`.${styles.icon}`)?.addEventListener('click', () => togglePopup(uploadLimit))
}
