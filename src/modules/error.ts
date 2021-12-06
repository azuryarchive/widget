import styles from '../styles.module.css'

export default (message: string) => {
  const popup = document.querySelector(`.${styles.popup}`)

  if (popup) popup.innerHTML = `
    <div class=${styles.popupContentWrapper}>
      <div class="${styles.popupContent + ` ${styles.error}`}">
        <i class='material-icons-round'>error_outline</i>
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