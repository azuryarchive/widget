import styles from '../styles.module.css'
import { uploadLimit } from '../config.json'

export default (config?: any) => {
  const popup = document.createElement('div')
  popup.className = styles.popup

  if (config.placement.split(' ')[0] === 'bottom') popup.style.bottom = '40px'
  if (config.placement.split(' ')[0] === 'top') popup.style.top = '40px'
  if (config.placement.split(' ')[1] === 'right') popup.style.right = '40px'
  if (config.placement.split(' ')[1] === 'left') popup.style.left = '40px'
  popup.style.zIndex = (config.zIndex - 1).toString()

  popup.innerHTML = `
    <div class=${styles.popupContentWrapper}>
      <div class=${styles.popupContent}>
        <h1>Upload File</h1>
        <i class="${styles.uploadIcon + ' material-icons-outlined'}">file_upload</i>
        <span>Max. ${uploadLimit} MB</span>
      </div>
    </div>
    <footer>
      <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
      <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
    </footer>
  `

  return popup
}