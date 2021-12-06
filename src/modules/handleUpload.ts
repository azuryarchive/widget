import { uploadLimit as globalUploadLimit, api } from '../config.json'
import error from './error'
import styles from '../styles.module.css'
import togglePopup from './togglePopup'

const handleUpload = (uploadLimit: number) => {
  try {
    const input: any = document.createElement('input')
    const popup = document.querySelector(`.${styles.popup}`)
    input.type = 'file'
    input.click()
  
    input.addEventListener('change', async () => {
      const file = input.files[0]

      if (popup) popup.innerHTML = `
        <div class=${styles.popupContentWrapper}>
          <div class=${styles.popupContent}>
            <i class="${styles.loading + ' material-icons-round'}">sync</i>
            <span>Uploading...</span>
          </div>
        </div>
        <footer>
          <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
          <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
        </footer>
      `
  
      if (file.size >= uploadLimit.valueOf() * 1024 * 1024 || file.size >= globalUploadLimit * 1024 * 1024) return error('FILE EXCEEDING UPLOAD LIMIT')
  
      let url: string
      try {
        const formData = new FormData()
        formData.append('upload', file)
        const response = await fetch(`${api}/accountless/files/new`, { method: 'POST', body: formData })
        const data = await response.json()
        url = `${api}/accountless/files/${data.id}/download`
      } catch (err: any) {
        return error('SOMETHING WENT WRONG')
      }

      if (popup) popup.innerHTML = `
        <div class=${styles.popupContentWrapper}>
          <div class=${styles.popupContent}>
            <h1>+1 File</h1>
            <div class=${styles.uploadSuccess}>
              <button class=${styles.copyButton}>Copy Link</button>
              <button class=${styles.uploadMoreButton}>Upload More</button>
            </div>
          </div>
        </div>
        <footer>
          <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
          <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
        </footer>
      `

      document.querySelector(`.${styles.icon}`)?.addEventListener('click', () => togglePopup(uploadLimit))
  
      const uploadMoreButton: any = document.querySelector(`.${styles.uploadMoreButton}`)
      uploadMoreButton.addEventListener('click', () => handleUpload(uploadLimit))
      const copyButton: any = document.querySelector(`.${styles.copyButton}`)
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(url)
        copyButton.innerHTML = 'Copied'
        copyButton.classList.add(styles.copied)
        setTimeout(() => {
          copyButton.innerHTML = 'Copy Link'
          copyButton.classList.remove(styles.copied)
        }, 1000)
      })
      setTimeout(() => copyButton.click(), 1000)
    })
  } catch (err) {
    return error('SOMETHING WENT WRONG')
  }
}

export default handleUpload