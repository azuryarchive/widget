import handleUpload from './handleUpload'
import styles from '../styles.module.css'

export default (uploadLimit: number) => {
  const popup = document.querySelector(`.${styles.popup}`)
  const icon = document.querySelector(`.${styles.icon}`)
  const uploadIcon = document.querySelector(`.${styles.uploadIcon}`)

  if (!popup || !icon || !uploadIcon) return
  
  if (window.getComputedStyle(popup).display === 'none') {
    icon.innerHTML = '<i class=\'material-icons-round\'>close</i>'
    uploadIcon.addEventListener('click', () => handleUpload(uploadLimit))
  } else {
    if (popup) popup.innerHTML = `
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
    icon.innerHTML = '<i class=\'material-icons-round\'>note_add</i>'
  }
  
  popup.classList.toggle(styles.popupActive)
  icon.classList.toggle(styles.iconActive)
}