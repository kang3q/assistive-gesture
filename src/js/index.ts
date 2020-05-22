import '@/scss/style.scss'

export class AssistiveGesture {
  private $target: HTMLElement
  $container!: HTMLElement
  $menu!: HTMLElement
  $joystick!: HTMLElement

  _touchStartX!: number
  _touchStartY!: number

  _touchEndX!: number
  _touchEndY!: number

  constructor(ele: string | HTMLElement) {
    if (typeof ele === 'string') {
      const tempEle = document.getElementById(ele)
      if (!tempEle) throw new Error('Element not found')
      this.$target = tempEle
    } else {
      this.$target = ele
    }
  }

  init(): AssistiveGesture {
    this._display()
    this.$container = this.$target.getElementsByClassName('assistive-gesture-container')[0] as HTMLElement
    this.$menu = this.$container.getElementsByClassName('assistive-gesture-menu')[0] as HTMLElement
    this.$joystick = this.$target.getElementsByClassName('assistive-gesture-joystick')[0] as HTMLElement
    this._setEvent()
    return this
  }

  _display(): void {
    const html = `
      <div class="assistive-gesture-container">
        <div class="assistive-gesture-menu">
          <span class="assistive-gesture-joystick" draggable="true"></span>
          <span class="assistive-gesture-item" style="transform: translate(-11px, -58px);">
            <span class="assistive-gesture-item-icon">😴</span>
            <label>top</label>
          </span>
          <span class="assistive-gesture-item" style="transform: translate(22px, -27px);">
            <span class="assistive-gesture-item-icon">🖐</span>
            <label>right</label>
          </span>
          <span class="assistive-gesture-item" style="transform: translate(-25px, 12px);">
            <span class="assistive-gesture-item-icon">🍟</span>
            <label>bottom</label>
          </span>
          <span class="assistive-gesture-item" style="transform: translate(-49px, -23px);">
            <span class="assistive-gesture-item-icon">🙋</span>
            <label>left</label>
          </span>
        </div>
      </div>
    `
    this.$target.innerHTML = html
  }

  _setEvent(): void {
    this.$joystick.addEventListener('touchstart', (e) => {
      const touch = e.touches[0]
      this._touchStartX = touch.clientX
      this._touchStartY = touch.clientY
    })
    this.$joystick.addEventListener('touchmove', (e) => {
      e.preventDefault() // 브라우저의 스크롤 기능을 막음?
      const touchLocation = e.targetTouches[0]
      this.$container.classList.add('active')
      this.$joystick.style.position = 'fixed'
      this.$joystick.style.left = touchLocation.clientX + 'px'
      this.$joystick.style.top = touchLocation.clientY + 'px'
    })
    this.$joystick.addEventListener('touchend', (e) => {
      this.$container.classList.remove('active')
      this.$joystick.style.position = 'absolute'
      this.$joystick.style.left = ''
      this.$joystick.style.top = ''
      console.log(11111, e)

      if (e.touches.length === 0) {
        const touch = e.changedTouches[e.changedTouches.length - 1]
        this._touchEndX = touch.clientX
        this._touchEndY = touch.clientY
        const touchoffsetX = this._touchEndX - this._touchStartX
        const touchoffsetY = this._touchEndY - this._touchStartY
        if (Math.abs(touchoffsetX) >= 20 && Math.abs(touchoffsetY) <= 15) {
          if (touchoffsetX < 0) console.log('swipe left')
          else console.log('swipe right')
        }
      }
    })

    this.$joystick.addEventListener('dragstart', (e) => {
      console.log(22222, e)
      const touchLocation = e
      this.$container.classList.add('active')
      this.$joystick.style.position = 'fixed'
      this.$joystick.style.left = touchLocation.clientX + 'px'
      this.$joystick.style.top = touchLocation.clientY + 'px'
    })
    this.$joystick.addEventListener('dragend', (e) => {
      this.$container.classList.remove('active')
      this.$joystick.style.position = 'absolute'
      this.$joystick.style.left = ''
      this.$joystick.style.top = ''
      const touchLocation = e
      console.log(3333, e, touchLocation)
    })
  }
}
