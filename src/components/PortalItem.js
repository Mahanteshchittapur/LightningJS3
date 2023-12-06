import Blits from '@lightningjs/blits'

export default Blits.Component('PortalItem', {
  template: `
    <Element src="assets/cardImage1.jpg" w="300" h="300" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
     </Element>
  `,
  props: ['title', 'description', 'index', 'id'],
  state() {
    return {
      backgroundColor: '#44037a',
      scale: 1,
      fontColor: '#e8d7f9',
      number: this.index < 9 ? `0${this.index + 1}` : this.index + 1,
    }
  },
  hooks: {
    focus() {
      this.backgroundColor = '#fafafa'
      this.fontColor = '#000'
      this.scale = 1.1
    },
    unfocus() {
      if (!this.$router.navigating) {
        this.backgroundColor = '#44037a'
        this.fontColor = '#e8d7f9'
        this.scale = 1
      }
    },
  },
  input: {
    enter() {
      const url =
        'https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)'
      this._player = new AAMPMediaPlayer()
      this._player.load(url)
      //this.$router.to(`/${this.id}`)
    },
    back() {
      //this.$router.to('/')
    },
  },
})
