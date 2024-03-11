export class TweenLite {
  constructor(element, duration, properties) {
    this.element = element;
    this.duration = duration || 1;
    this.properties = properties || {};
    this.startTime = null;
    this.startValues = {};
    this.changeInValues = {};
    this.isAnimating = false;

    this.initialize();
  }

  initialize() {
    for (const prop in this.properties) {
      // console.log(t  his.element, "window");
      this.startValues[prop] = parseFloat(
        window.getComputedStyle(this.element)[prop]
      );
      this.changeInValues[prop] =
        parseFloat(this.properties[prop]) - this.startValues[prop];
    }
  }

  play() {
    this.startTime = performance.now();
    this.isAnimating = true;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(timestamp) {
    if (!this.isAnimating) return;

    const progress = Math.min(
      (timestamp - this.startTime) / 1000 / this.duration,
      1
    );
    const easedProgress = ((progress) => progress ** 2)(progress);

    for (const prop in this.properties) {
      const newValue =
        this.startValues[prop] + this.changeInValues[prop] * easedProgress;
      this.element.style[prop] = `${newValue}px`;
    }

    if (progress < 1) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.isAnimating = false;
    }
  }

  static to(element, duration, properties) {
    const tween = new TweenLite(element, duration, properties);
    tween.play();
    return tween;
  }

  static set(element, properties) {
    for (const prop in properties) {
      element.style[prop] = `${properties[prop]}px`;
    }
  }
}
