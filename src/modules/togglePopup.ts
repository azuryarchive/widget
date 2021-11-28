export default () => {
  const popup: any = document.querySelector('.azury_popup')
  const icon: any = document.querySelector('.azury_icon')
  
  if (window.getComputedStyle(popup).display === 'none')
    icon.innerHTML = '<i class="material-icons-round">close</i>'
  else
    icon.innerHTML = '<i class="material-icons-round">note_add</i>'
  
  popup?.classList.toggle('active')
  icon?.classList.toggle('active')
}