
// parent
export abstract class Component {
    protected _element: HTMLElement | null = null; 
    protected _customCSS: HTMLStyleElement | null = null;

    abstract render(): string; // html as a string
    abstract style(): string; // style as a string

    // life cycle method (parent --> root)
    mount(parent: HTMLElement) {
        this._InjectStyle(); // style head mein put kar deta hai
        const el = this._createElement();
        if(el) {
            parent.appendChild(el);
            this._element = el;
        }
    }
    
    unmount() {
        this._element?.remove();
        this._element = null;
    }

    // string ---> htmlelement
    private _createElement(): HTMLElement | null {
        const template = document.createElement("template"); 
        template.innerHTML = this.render(); // html string
        // <template>
        //  <button></button>
        // </template>
        return template.content.firstElementChild as HTMLElement
    }

    private _InjectStyle() {
        const css = this.style();// css string 
        if(!css) return;
        const key = this.constructor.name; // unqiue: Button
        if(document.head.querySelector(`style[data-id=${key}]`)) return;
        else {
            this._customCSS = document.createElement("style");
            this._customCSS.dataset["id"] = key;
            this._customCSS.textContent = css;
            document.head.appendChild(this._customCSS);
        }
    }
}

