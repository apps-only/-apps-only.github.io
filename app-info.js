class AppInfo extends HTMLElement {
    static get observedAttributes() {
        return ['logo', 'title', 'developer', 'description'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .app-container {
                    display: grid;
                    grid-template-areas: 
                        "logo name"
                        "logo developer"
                        "logo ."
                        "description description"
                        "downloads downloads";
                    grid-template-rows: auto auto auto 1fr auto;
                    grid-template-columns: auto 1fr;
                    max-width: 600px;
                    margin: 0 auto;
                    align-items: center; /* Ensures all items in the row are centered */
                }
                .app-logo {
                    grid-area: logo;
                    width: 72px;
                    height: 72px;
                    background-size: cover;
                    background-position: center;
                }
                .app-info-header {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 8px;
                }
                .app-name {
                    font-size: 1.5em;
                    font-weight: bold;
                }
                .app-developer {
                    font-size: 1em;
                    margin-top: 4px;
                    color: #666;
                }
                .app-description {
                    grid-area: description;
                    font-size: 1em;
                    line-height: 1.5em;
                    padding: 10px;
                    overflow: auto;
                }
                .app-downloads {
                    grid-area: downloads;
                    display: flex;
                    padding-left: 8px;
                    padding-right: 8px;
                    gap: 10px;
                }
                .app-downloads div {
                    flex: 1;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    cursor: pointer;
                }
            </style>
            <div class="app-container">
                <div style="display: flex; align-items: center;">
                    <div class="app-logo" id="app-logo" style="background-image: url('${this.getAttribute('logo')}');"></div>
                    <div class="app-info-header">
                        <div class="app-name" id="app-name">${this.getAttribute('title')}</div>
                        <div class="app-developer" id="app-developer">${this.getAttribute('developer')}</div>
                    </div>
                </div>
                <div class="app-description" id="app-description">
                    <p>${this.getAttribute('description')}</p>
                </div>
                <slot class="app-downloads" name="app-downloads"></slot>
            </div>
        `;
    }
}

customElements.define('app-info', AppInfo);