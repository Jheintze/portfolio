const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="grid grid-cols-3 items-center px-8 py-6">
            <p>© {year} Jakob Heintze</p>

            <a href="#hero" className="justify-self-center">
                ↑ Back to top
            </a>

            <div></div>
        </footer>
    );
}