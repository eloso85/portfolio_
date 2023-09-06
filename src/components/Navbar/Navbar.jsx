import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

//import { images } from '../../constants';
import "./Navbar.scss";


const Navbar = () => {
  const [image, setImage] = useState(null);
  // const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const query = '*[_type == "assets"]';

    client
    .fetch(query)
    .then((data) => {setImage(data)})
    .catch(console.error)
  }, []);
 
  // const images = image.map((image, index)=>(console.log(image)))
  

      
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      {image && (<img src={urlFor(image[0].assetImage)} alt="logo" />)}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
