import { Button } from "./component/Button.js";

const root = document.getElementById("root") as HTMLElement;
if(!root) {
    throw new Error("Parent Root Doesn't Exists");
}

function execute() {
    const btn = new Button();
    btn.mount(root); // render / print
    btn.unmount();
    btn.mount(root); // render / print
    btn.unmount(); // remove
    btn.mount(root);
}

execute();