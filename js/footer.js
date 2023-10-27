class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
        <p class="copyright">
            Copyright © 2023 Group 2
        </p>
        <div>
            <h3 class="contact">Contact Us</h3>
            <p class="Us">
                <i class="fa-solid fa-location-dot"></i>
                <span>
                    Jl. Mojo, Karangasem, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57145
                </span>
            </p>
            <p class="Us">
                <i class="fa-solid fa-envelope"></i>
                <span>
                    shoesfootwear@gmail.com
                </span>
            </p>
            <p class="Us">
                <i class="fa-brands fa-whatsapp"></i>
                <span>+628779251052</span>
            </p>
        </div>
        <div class="follow">
            <h3 class="socialMedia">Follow Us</h3>
            <div>
                <p class="icon">
                    <a href="https://www.facebook.com/zuck">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/elonmusk">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/hacktiv8id/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@hacktiv8id">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PL7LE1AZNMIIhDMm3IUBvlyiffscogXbK5">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://github.com/Final-Project-Hacktiv/FinPro-1">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </p>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('footer-app', Footer);