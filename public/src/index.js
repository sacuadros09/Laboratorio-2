import * as components from './src/components/index.js'
import data from "./src/dataMarker.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
          <main-logo></main-logo>
        `
        this.shadowRoot.innerHTML = 
        `
        <nav-bar></nav-bar>
        `
        data.forEach(user =>{
            this.shadowRoot.innerHTML += 
        `
        <marker-box name="${user.name}" image="${this.image}"></marker-box>
        `
        })
    };
}

customElements.define('app-container', AppContainer);
export default AppContainer;