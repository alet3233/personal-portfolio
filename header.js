class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="container">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </nav>
        </div>
    </header>
        `;
    }
}

customElements.define("header-component", Header);