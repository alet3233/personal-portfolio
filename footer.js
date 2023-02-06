class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">

        <div class="quick-links mb-2">
            <h2 class="mb-2">Quick Links</h2>
            <ul>
                <li><a href="https://github.com/alet3233">GitHub</a></li>
                <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University</a></li>
                <li><a href="https://www.youtube.com/user/bellevueuniversity">WEB-330 YouTube</a></li>
                <li><a href="https://github.com/buwebdev/web-330">WEB-330 GitHub</a></li>
            </ul>
        </div>
        <p>2023 &copy;, All rights reserved</p>
        </div>
    </footer>
        `;
    }
}

customElements.define("footer-component", Footer);