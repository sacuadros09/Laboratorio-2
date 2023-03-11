class markerBox extends HTMLElement{
    static get observedAttributes(){
        return["image","name"]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this(render);
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]= newValue;
        this(render)
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/marker-box/marker-box.css">
        <section id="markers" class="markers">
        <img src="${this.image}">
        <h6>${this.name}</h6>
        </section>
        `
    }
}
customElements.define('marker-box', markerBox);
export default markerBox;