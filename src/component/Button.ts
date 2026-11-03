import { Component } from "../core/Component.js";

export class Button extends Component {
    private count:number = 0;

    render() {
        return `<button class='btn'>Click: ${this.count}</button>`;
    }

    style(): string {
        return `
            .btn {
                padding: 10px 10px;
                border: 1px solid black;
                color: blue;
            }
        `;
    }
}