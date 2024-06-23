// 创建一个自定义元素
class IconTextComponent extends HTMLElement {
    constructor() {
        super();

        // 创建影子 DOM
        this.attachShadow({ mode: 'open' });

        // 获取属性
        const text = this.getAttribute('text');

        // 在影子 DOM 中定义组件的结构和样式
        this.shadowRoot.innerHTML = `
                <style>
                    #container {
                        display: flex;
                        align-items: center;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        font-size: 1.2em;
                    }
                    #text {
                        margin-left: 8px;
                        font-weight: bold;
                    }
                </style>
                <s-ripple id="container">
                    <s-icon id='icon'>
                        <slot name="icon"></slot>
                    </s-icon>
                    <div id='text'>${text}</div>
                </s-ripple>
                
            `;
    }

    // 监听属性变化
    static get observedAttributes() {
        return ['icon', 'text'];
    }

    // 处理属性变化
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'icon' || name === 'text') {
            this.render();
        }
    }

    // 更新组件显示
    render() {
        const textEle = this.shadowRoot.querySelector('#text')
        if (textEle) {
            const text = this.getAttribute('text');
            textEle.textContent = text;
        }
        const containerEle = this.shadowRoot.querySelector('#container')
        if (containerEle) {
            const link = this.getAttribute('link');
            if (link) {
                containerEle.onclick = (e) => {
                    window.open(link, "_blank")
                }
            }
        }
        
    }

    // 当元素被插入到文档时
    connectedCallback() {
        this.render();
    }
}

// 定义自定义元素名称并注册
customElements.define('icon-text', IconTextComponent);