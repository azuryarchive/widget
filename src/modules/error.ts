export default (message: string) => {
  const popup: any = document.querySelector('.azury_popup')

  popup.innerHTML = `
    <div class="azury_popup_content_wrapper">
      <div class="azury_popup_content azury_error">
        <i class="material-icons-round">error_outline</i>
        <p>${message.toUpperCase()}</p>
        <small>Please reopen the popup!</small>
      </div>
    </div>
    <footer>
      <a href='https://github.com/azurystudios/widget/blob/main/terms_of_service.md' target='_blank' rel='noreferrer'>TOS</a>
      <p>- Powered by <a href='https://azury.gg' target='_blank' rel='noreferrer'>Azury</a></p>
    </footer>
  `
}