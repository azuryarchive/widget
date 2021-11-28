export default (config?: any) => {
  // create element
  const popup = document.createElement('div')
  popup.className = 'azury_popup'

  // custom styles
  if (config.placement.split(' ')[0] === 'bottom') popup.style.bottom = '40px'
  if (config.placement.split(' ')[0] === 'top') popup.style.top = '40px'
  if (config.placement.split(' ')[1] === 'right') popup.style.right = '40px'
  if (config.placement.split(' ')[1] === 'left') popup.style.left = '40px'
  popup.style.zIndex = `${config.zIndex - 1}`

  // add content
  popup.innerHTML = `
    <div class="azury_popup_content_wrapper">
      <div class="azury_popup_content">
        <h1>Upload File</h1>
        <i class="material-icons-outlined azury_upload">file_upload</i>
        <span>Max. ${config.uploadLimit} MB</span>
      </div>
    </div>
    <footer>
      <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
      <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
    </footer>
  `

  return popup
}