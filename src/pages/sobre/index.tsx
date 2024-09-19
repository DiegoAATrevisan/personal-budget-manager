import perfil from "./perfil.jpg";
import './styles.css';

const Sobre = () => {
    return (
        <div className="page-content">
            <h3>SOBRE</h3>
            <img id="perfil" src={perfil} alt="Foto de perfil" />
            <p className="name">Diego Augusto</p>
            <p className="work">Estagiário de T.I. no HUOP</p>
            <a href="https://github.com/DiegoAATrevisan">GitHub</a>
        </div>
    )
}


export default Sobre;