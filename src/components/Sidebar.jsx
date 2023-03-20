import Avatar from '../img/franco.jpg'

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Evangelista Franco" />
      <p className="title">Desenvolvedor web</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar