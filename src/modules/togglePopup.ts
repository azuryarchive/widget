import handleUpload from './handleUpload'

export default (uploadLimit: Number) => {
  const popup: any = document.querySelector('.azury_popup')
  const icon: any = document.querySelector('.azury_icon')
  const uploadIcon: any = document.querySelector('.azury_upload')
  
  if (window.getComputedStyle(popup).display === 'none') {
    icon.innerHTML = '<i class="material-icons-round">close</i>'
    uploadIcon.onclick = () => handleUpload(uploadLimit)
  } else {
    popup.innerHTML = `
      <div class="azury_popup_content_wrapper">
        <div class="azury_popup_content">
          <h1>Upload File</h1>
          <i class="material-icons-outlined azury_upload">file_upload</i>
          <span>Max. ${uploadLimit} MB</span>
        </div>
      </div>
      <footer>
        <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
        <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
      </footer>
    `
    icon.innerHTML = '<i class="material-icons-round">note_add</i>'
  }
  
  popup?.classList.toggle('active')
  icon?.classList.toggle('active')
}