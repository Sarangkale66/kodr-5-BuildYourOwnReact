
// parent
export abstract class Component {
    protected _element: HTMLElement | null = null; 
    protected _customCSS: HTMLStyleElement | null = null;

    abstract render(): string; // html as a string
    abstract style(): string; // style as a string

    // life cycle method (parent --> root)
    mount(parent: HTMLElement) {
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
        return template.content.firstElementChild as HTMLElement
        // <template>
        //  <button></button>
        // </template>
    }


}

