// custom element
class MyLiquidCode extends HTMLElement {
  connectedCallback() {
    const codeElement = document.createElement('div');
    codeElement.innerHTML = `&lcub;&lcub; ` + this.innerHTML + ` &rcub;&rcub;`
    codeElement.classList.add('code_content')
    this.innerHTML = ''; // Clear existing content
    this.appendChild(codeElement);
  }
}

customElements.define('my-liquid-code', MyLiquidCode);
