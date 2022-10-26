class Countdown {
  constructor(dataFutura) {
    this.dataFutura = dataFutura;
  }

  $future() {
    return new Date(this.dataFutura);
  }

  $actual() {
    return new Date();
  }

  get timeFuture() {
    return this.$future().getTime();
  }

  get timeActual() {
    return this.$actual().getTime();
  }

  get totalTime() {
    return this.$future() - this.$actual();
  }

  get days() {
    return this.totalTime / (24 * 60 * 60 * 1000);
  }

  get hours() {
    return this.totalTime / (60 * 60 * 1000);
  }

  get minutes() {
    return this.totalTime / (60 * 1000);
  }

  get seconds() {
    return this.totalTime / 1000;
  }

  get total() {
    const days = Math.floor(this.days);
    const hours = Math.floor(this.hours % 24);
    const minutes = Math.floor(this.minutes % 60);
    const seconds = Math.floor(this.seconds % 60) + 1;
    return {
      0: days,
      1: hours,
      2: minutes,
      3: seconds,
    };
  }

  get stop() {
    return this.totalTime < 0;
  }
}

const date = new Countdown("Dec 24 2022 23:59:59");
const elements = document.querySelectorAll("p");

const interval = setInterval(() => {
  let i = 0;
  elements.forEach((p) => {
    p.innerText = date.total[i];
    i++;
    if (date.stop) {
      clearInterval(interval);
      p.innerText = "0";
    }
  });
}, 1000);
