class logoMain extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render;
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/logo-main/logoMain.css">
        <section>
            <img src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png" alt="">
        </section>
        `
    }
}
customElements.define('main-logo', logoMain);
export default logoMain;