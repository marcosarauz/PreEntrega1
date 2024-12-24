import cartwidget from "../cartwidget/cartwidget"

const NavBar = () => {
    return (
        <nav>
            <h3>PeliSearch</h3>
            <div>
                <button>Peliculas</button>
                <button>Series</button>
                <button>Documentales</button>
            </div>
            <cartwidget />
        </nav>
    )
}

export default NavBar