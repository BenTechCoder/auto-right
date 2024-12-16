export class autoRight extends HTMLElement {
  constructor() {
    super();
    // Once JavaScript loads the inner text gets replaced with the current year
    this.innerHTML = new Date().getFullYear();
  }
}
customElements.define("auto-right", autoRight);
