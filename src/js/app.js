import svg from 'svg4everybody'
svg()

document.addEventListener('DOMContentLoaded', () => {
  if (!('ontouchstart' in window)) document.querySelector('body').classList.add('no-touch')
})
