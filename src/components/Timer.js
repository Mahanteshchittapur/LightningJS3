import Blits from '@lightningjs/blits'

export default Blits.Component('Loading', {

    template:
    updateCurrentTime()
    const currentTime = new Date(),
    const hours = currentTime.getHours().toString().padStart(2, "0"),
    const minutes = currentTime.getMinutes().toString().padStart(2, "0"),
    const seconds = currentTime.getSeconds().toString().padStart(2, "0"),
    const formattedTime = `${hours}:${minutes}`,
    this.tag("CurrentTime").text = `${formattedTime}`,


  _construct() {
    // Initialize your component, e.g., set up event listeners or initial state.
  }

  _init() {
    // This is called after _construct and when the component is ready for display.
    this.updateCurrentTime();

    // Optionally, you can set up a timer to update the time regularly.
    this._timer = setInterval(() => {
      this._updateCurrentTime();
    }, 1000);
  }

  _active() {
    // This is called when the component becomes active (visible).
  }

  _inactive() {
    // This is called when the component becomes inactive (hidden).
  }

  _destroy() {
    // Cleanup and remove any event listeners or resources when the component is destroyed.
    clearInterval(this._timer);
  }

  // ... other methods or properties as needed
}
)
