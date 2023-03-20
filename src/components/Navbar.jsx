import React, {useState, useEffect} from "react";
import logo from "../images/logo.svg";
import { IoMenuOutline } from "react-icons/io5";



const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.onscroll = function() {
    var y = window.scrollY;
    if(y >= 100){
      setScroll(true)
    }else {
      setScroll(false)
    }
  };

  console.log(scroll)





/*     useEffect(() => {
      let actual = window.pageYOffset
      if( actual > 0){
        setScroll(!scroll)

      } 
      
      };
    }, [scroll]);
 */





  const handleMenu = () =>{
    setDrop(!drop)
  }

 
  
  
  return (
    <>
      <section className={scroll ? "container-fluid section-container-navbar-active  " :"container-fluid section-container-navbar fixed-top "}>
        <div className="logo">
          <a>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu ms-auto">
          <button onClick={handleMenu} className="button-menu">
            {" "}
            <IoMenuOutline />{" "}
          </button>
        </div>
        {drop && 
        <div className={ scroll ? "dropDrown-menu-active" :"dropDrown-menu" }>
          <span className={scroll ?"extra-active" : "extra"}/>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className="button-contact-drop">Contact</button>
        </div>
        
        }
        <div className="navbar-menu ms-auto">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className="button-contact">Contact</button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
