import { NavbarHeader, NavbarImage } from './StyledComponents'
import starwarsLogo from '../assets/starwars.png';

const Navbar: React.FC<{}> = () => {
  return(
    <NavbarHeader>
      <NavbarImage src={starwarsLogo} alt="StarWars" style={{height: 80, width: 80}} />
    </NavbarHeader>
  );
};

export default Navbar;
