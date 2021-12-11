import changeContent from './changeContent'

export default (message: string) => {
  changeContent(`
    <i class='material-icons-round'>error_outline</i>
    <p>${message.toUpperCase()}</p>
    <small>Please reopen the popup!</small>
  `, true)
}