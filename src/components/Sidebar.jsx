import Avatar from '../img/eu.jpg'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNertworks from './SocialNertworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Evangelista Franco" />
      <p className="title">Desenvolvedor web</p>
      <SocialNertworks/>
      <InformationContainer/>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar