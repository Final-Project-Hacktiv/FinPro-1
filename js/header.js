class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="header sticky">
        <h1 class="title">Shoes Footwear</h1>
        <nav class="nav-head">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="Blogs.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="AboutUs.html">About US</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html">Contact US</a>
                </li>
                <li class="nav-item">
                    <a href="todos.html">Todos</a>
                </li>
            </ul>
        </nav>
    </header>
        `
    }
}

customElements.define('header-app', Header);