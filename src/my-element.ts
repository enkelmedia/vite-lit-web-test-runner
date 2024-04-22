import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '@my-test/components';

@customElement('my-element')
export class MyElement extends LitElement {


  render() {
    return html`
      <div>
        <my-demo></my-demo>
      </div>
    `
  }

  static styles = css`
    
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
