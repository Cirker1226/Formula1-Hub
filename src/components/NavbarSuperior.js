export default function NavbarSuperior() {
    return (
        <nav className="navbar-superior">
            <a href="#" className="navbar-logo">
                <img id="navbar-logo" src="/logo.png" alt="Logo"/>
            </a>

            <div className="navbar-actions">
                <a href="#" className="nav-link active">Início</a>
                <a href="#" className="nav-link">Pilotos</a>
                <a href="#" className="nav-link">Equipes</a>
                <a href="#" className="nav-link">Sobre</a>
            </div>
        </nav>
    );
}