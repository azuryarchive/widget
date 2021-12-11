import styles from '../styles.module.css'

export default (content: string, error?: boolean) => {
  const wrapper = document.querySelector(`.${styles.popupContentWrapper}`)

  if (wrapper) wrapper.innerHTML = `
    <div class='${error ? styles.popupContent + ' ' + styles.error : styles.popupContent}'>
      ${content}
    </div>
  `
}