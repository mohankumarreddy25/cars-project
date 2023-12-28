
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";    


function Header(){
  const navigate=useNavigate();
  return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                   <Link to= '/'><img src='data:image/png;base64,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' alt="Logo" style={{height:"50px"}}/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" href="#"to="/Home">Home<span class="sr-only"></span></Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link" href="#"to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" to="/Contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" to="/Services">Services</Link>
              </li>
              <input type="text"  placeholder="Search the cars" />
              
            </ul>

          </div>
          <div>
          <button className="btn btn-primary" onClick={()=>{navigate("/")}}>Log-Out</button>

          </div>
          
        </nav>

  </div>
  
  )
}

export default Header;