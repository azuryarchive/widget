import { uploadLimit, api } from '../config.json'
import error from './error'
import styles from '../styles.module.css'
import togglePopup from './togglePopup'
import changeContent from './changeContent'

const handleUpload = () => {
  try {
    const input: any = document.createElement('input')
    input.type = 'file'
    input.click()
  
    input.addEventListener('change', async () => {
      const file = input.files[0]

      changeContent(`
        <div class=${styles.popupContent}>
          <i class='${styles.loading} material-icons-round'>sync</i>
          <span>Uploading...</span>
        </div>
      `)
  
      if (file.size >= uploadLimit * 1024 * 1024) return error('FILE EXCEEDING UPLOAD LIMIT')

      // make popup temporarily unclosable
      document.querySelector(`.${styles.icon}`)?.removeEventListener('click', togglePopup)
      document.querySelector(`.${styles.icon}`)?.classList.add(styles.disabled)
  
      let url: string
      try {
        const formData = new FormData()
        formData.append('upload', file)
        const response = await fetch(`${api}/accountless/files/new`, { method: 'POST', body: formData })
        const data = await response.json()
        url = `${api}/accountless/files/${data.id}/download`
      } catch (err: any) {
        document.querySelector(`.${styles.icon}`)?.addEventListener('click', togglePopup)
        document.querySelector(`.${styles.icon}`)?.classList.remove(styles.disabled)
        return error('SOMETHING WENT WRONG')
      }

      changeContent(`
        <div class=${styles.popupContent}>
          <h1>+1 File</h1>
          <div class=${styles.uploadSuccess}>
            <button id=${styles.copyButton}>Copy Link</button>
            <button id=${styles.uploadMoreButton}>Upload More</button>
          </div>
        </div>
      `)
  
      const uploadMoreButton: any = document.getElementById(styles.uploadMoreButton)
      uploadMoreButton.onclick = handleUpload

      const copyButton: any = document.getElementById(styles.copyButton)
      copyButton.onclick = () => {
        navigator.clipboard.writeText(url)
        copyButton.innerHTML = 'Copied'
        copyButton.classList.add(styles.copied)
        setTimeout(() => {
          copyButton.innerHTML = 'Copy Link'
          copyButton.classList.remove(styles.copied)
        }, 1000)
      }

      // make popup again closable
      document.querySelector(`.${styles.icon}`)?.addEventListener('click', togglePopup)
      document.querySelector(`.${styles.icon}`)?.classList.remove(styles.disabled)

      setTimeout(() => copyButton.click(), 1000)
    })
  } catch (err) {
    return error('SOMETHING WENT WRONG')
  }
}

export default handleUpload