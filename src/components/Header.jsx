import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <h1>Mes Petits Poneys</h1>
      <nav>
        <img className="logo" src="https://th.bing.com/th/id/R.63f9f244ff7bdcf02b28fc8d1c84b2dd?rik=ZYeB5n47j3YE8Q&pid=ImgRaw&r=0" alt="" /> 
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/poneys">Poney</Link></li>
          <li><Link to= "/contact">Contact</Link></li>
          <li><Link to= "/propos">About</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;