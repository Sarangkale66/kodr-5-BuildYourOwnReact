import { Button } from "./component/Button.js";

const root = document.getElementById("root") as HTMLElement;
if(!root) {
    throw new Error("Parent Root Doesn't Exists");
}

function execute() {
    const btn1 = new Button();
    btn1.mount(root); // render / print
}

execute();