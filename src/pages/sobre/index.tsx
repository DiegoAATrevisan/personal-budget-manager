import perfil from "./perfil.jpg";

const Sobre = () => {
    return (
        <div className="All">
            <h3>SOBRE</h3>
            <img src={perfil} alt="Foto de perfil" />
            <p className="name">Diego Augusto</p>
            <p className="work">Estagiário de T.I. no HUOP</p>
            <p className="biography">
                BIOGRAFIA
            </p>
            <a href="https://github.com/DiegoAATrevisan">GitHub</a>
        </div>
    )
}


export default Sobre;