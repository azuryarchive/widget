import handleUpload from './handleUpload'
import { uploadLimit } from '../config.json'
import styles from '../styles.module.css'
import changeContent from './changeContent'

export default () => {
  changeContent(`
    <div class=${styles.popupContent}>
      <h1>Upload File</h1>
      <i class='${styles.uploadIcon} material-icons-outlined'>file_upload</i>
      <span>Max. ${uploadLimit} MB</span>
    </div>
  `)

  document.querySelector(`.${styles.widget}`)?.classList.toggle(styles.widgetActive)
  document.querySelector(`.${styles.uploadIcon}`)?.addEventListener('click', handleUpload)

  const icon = document.querySelector(`.${styles.icon}`)
  if (!document.querySelector(`.${styles.widgetActive}`)) {
    // popup is opened
    if (icon) icon.innerHTML = `<i class='material-icons-round'>note_add</i>`
  } else {
    // popup is closed
    if (icon) icon.innerHTML = `<i class='material-icons-round'>close</i>`
  }
}