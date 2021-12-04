import { globalUploadLimit } from '../config.json'
import error from './error'

const handleUpload = (uploadLimit: Number) => {
  try {
    const input: any = document.createElement('input')
    input.type = 'file'
    input.click()
  
    input.addEventListener('change', async () => {
      const popup: any = document.querySelector('.azury_popup')
      const file = input.files[0]
  
      popup.innerHTML = `
        <div class="azury_popup_content_wrapper">
          <div class="azury_popup_content">
            <i class="material-icons-round loading">sync</i>
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
        const response = await fetch('https://azury.dev/api/accountless/files/new', { method: 'POST', body: formData })
        const data = await response.json()
        url = `https://azury.dev/api/accountless/files/${data.id}/download`
      } catch (err: any) {
        return error('SOMETHING WENT WRONG')
      }
  
      popup.innerHTML = `
        <div class="azury_popup_content_wrapper">
          <div class="azury_popup_content">
            <h1>+1 File</h1>
            <div class="azury_upload_success_row">
              <button class="azury_copy_button">Copy Link</button>
              <button class="azury_upload_more_button">Upload More</button>
            </div>
          </div>
        </div>
        <footer>
          <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
          <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
        </footer>
      `
  
      const uploadMoreButton: any = document.querySelector('.azury_upload_more_button')
      uploadMoreButton.addEventListener('click', () => handleUpload(uploadLimit))
      const copyButton: any = document.querySelector('.azury_copy_button')
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(url)
        copyButton.innerHTML = 'Copied'
        copyButton.classList.add('copied')
        setTimeout(() => {
          copyButton.innerHTML = 'Copy Link'
          copyButton.classList.remove('copied')
        }, 1000)
      })
      setTimeout(() => copyButton.click(), 1000)
    })
  } catch (err) {
    return error('SOMETHING WENT WRONG')
  }
}

export default handleUpload