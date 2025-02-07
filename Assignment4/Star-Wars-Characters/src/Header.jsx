import logo from './images/header-title1.jpg'
import headerImage from './images/header-image.jpg'

function Header() {

    return (
    <header>
        <img src={logo} alt="Star Wars logo" /> <img src={headerImage} alt="header image" />
    </header>
    )
  }
  
  export default Header
  