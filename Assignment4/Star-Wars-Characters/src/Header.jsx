import logo from './images/header-title1.jpg'
import headerImage from './images/header-image.jpg'
import title from './images/title2.png'

function Header() {

    return (
    <header>
        <img src={logo} alt="Star Wars logo"/><img src={headerImage} alt="header image"/>  <img src={title} alt='The words "Character Info"' className='title'/>
    </header>
    )
  }
  
  export default Header
  