import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import '../Menubar/Menu.css';



export const MenuBar = () => {
  

  return (
    <>
    <header>
      <nav className="navbar navbar-expand-sm ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Brands
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Blog
            </Link>
          </li>

          <Link className="navbar-brand logo" to='/'>RUBY</Link>

          <form className="form-inline" action="/action_page.php">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>

          <div className="icon_box">
            <Link to="#" className="icon"> <FavoriteBorderIcon/> </Link>
            <Link to="/login" className="icon"> <PersonOutlineIcon/> </Link>
            <Link to='/cartpage' className="icon"> <ShoppingBagOutlinedIcon/> </Link>
            
          </div>
        </ul>
      
      </nav>
      
      <div className="catagory text-center p-4">
            <Link to='#'  className="cata_link" >Artificial flower </Link>
            <Link to='#' className="cata_link" >Wall Painting</Link>
            <Link to='#' className="cata_link" >Vase</Link>
            <Link to='#' className="cata_link" >Wall decoration</Link>
            <Link to='#' className="cata_link" >Gifts</Link>
        </div>
        
        </header>
    </>
  );
};
