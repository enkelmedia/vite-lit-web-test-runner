import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-demo')
export class MyDemoElement extends LitElement {

    /**
    * Description 
    */
    @property({type:Boolean})
    disabled : boolean = false;

    connectedCallback(): void {
        super.connectedCallback();
        this.disabled = true;
        console.log('connectedCallback');
    }

    render() {
        return html`
            <div>
                My Demo
            </div>
        `

    }

    static styles = [css`

    `]
}

export default MyDemoElement;

declare global {
    interface HTMLElementTagNameMap {
        'my-demo': MyDemoElement;
    }
}
