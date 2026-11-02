# bundler
    button.jsx --> html + js
    button.css --> css
    app.jsx --> html + js
    index.css -> --> css
    main.jsx  --> html + js
    app.css --> --> css

  (minify)

### npm run build "vite"

/dist
    - index.html
    - assets
        - images
        - videos
        - index-ygquywv.css - minified.css
        - index-ahsvajs.js - minified.js


# dev server
    files changes -----> browser (auto reload) --> hot reloading

# file structure
    - prod level folder and file structure

# React - "vite--> rolldown"
- src
    css
    jsx/tsx
        ```
            function App() {
                // upar js likha sakte joo  // kaha rakhenge

                return <HTMLCOMPONENT> || null // kaha rakhenge

                // niche js likha sakte joo // kaha rakhenge
            }

        ```
- index.html
- package.json


## technique (Class Based Components)

// parent component
abstract class Component {
    abstract render(): string;
    abstract style(): string;

    // logic: DOM Manipulation


}

// abstraction
class Button extends Component {
    // member variables


    render() { // return html
        console.log("hello world")

        return `<button class="btn">
        </button>` <---- string
    }

    style() { // return css
        return `
            .btn {
                margin: 10;
                color: red;
            }
        
        `
    }
}

class Card extends Component {
    render() {
        return "";
    }

    style() {
        return "";
    }
}

## rule:
    1. jab bhi component bange tab main un components ko Component class se extend kar dunga
    2. KISS ---> keep it simple stupid

# Setup Entire Development Server
### buddler se start karo
    browser-sync ---> window reload (file mein changes karto ho) --> serve
    ✅ tailwind,
    tsc ts --> js ---> (.ts ---> .js)
    esbuild ---> minify
    concurrent: 