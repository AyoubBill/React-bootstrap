import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import java from "./img/java.png"
import javascript from "./img/javascript.png"
import react from "./img/react.png"
import contact from "./img/contact.jpg"
import { Media } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="container-fluid bg-secondary">
      {/* /////////////////////////////////////header///////////////////////// */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar bg-dark">
              <a className="navbar text-white" href="#">SUMMARY</a>
              <a className="navbar text-white" href="#">FORMATION</a>
              <a className="navbar text-white" href="#">EXPERIENCE</a>
              <a className="navbar text-white" href="#">CONTACT</a>
            </nav>
          </div>
        </div>
      </div>
      <p></p>    
      {/* /////////////////////////////////////body///////////////////////// */}
      <div className="container">
        <div className="row">
          <div className="col border bg-light">
            <h2 class="border-bottom p-2">Formations</h2>
            <p><a href="#">Lorem ipsum</a></p>
            <p><a href="#">Lorem ipsum dolor</a></p>
            <p><a href="#">Lorem ipsum dolor sit</a></p>
            <p><a href="#">Lorem ipsum</a></p>
            <p><a href="#">Lorem ipsum dolor</a></p>
          </div>
          <div className="col col-7">
            <h2 class="border-bottom p-2">Summary</h2>
            <Media>
              <img className="mr-3 border border-primary rounded" src={java} alt="java" />
              <Media.Body>
                <h5>Program with Java</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
                <Media>
                  <img className="mr-3 border border-primary rounded" src={javascript} alt="javascript" />
                  <Media.Body>
                    <h5>Program with javascript</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </p>
                    <Media>
                      <img className="mr-3 border border-primary rounded" src={react} alt="react" />
                      <Media.Body>
                        <h5>Program with React</h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>
                  </Media.Body>
                </Media>
              </Media.Body>
            </Media>
          </div>
          <div className="col border bg-light">
            <h2 class="border-bottom p-2">Experiences</h2>
            <p><a href="#">Lorem ipsum</a></p>
            <p><a href="#">Lorem ipsum dolor</a></p>
            <p><a href="#">Lorem ipsum dolor sit</a></p>
            <p><a href="#">Lorem ipsum</a></p>
            <p><a href="#">Lorem ipsum dolor</a></p>
            <p><a href="#">Lorem ipsum dolor sit</a></p>
            <p><a href="#">Lorem ipsum</a></p>
            <p><a href="#">Lorem ipsum dolor</a></p>
          </div>
        </div>
      </div>  
      {/* /////////////////////////////////////footer///////////////////////// */}
      <div className="container border">
        {/* <div className="row">
          <div className="col">
            <h2 class="border-bottom p-2">Contact me</h2>
          </div>
        </div> */}
        <div className="row bg-secondary"><p></p></div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col bg-secondary">
                <form>
                  <div className="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter first name"></input>
                  </div>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name"></input>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"></input>
                  </div>
                  <div className="form-group">
                    <label for="comment">Comment</label>
                    <textarea type="email" className="form-control" placeholder="Enter your comment" rows="3"></textarea>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="check1" />
                    <label className="form-check-label" for="check1">Check me out</label>
                  </div>
                  <Button type="submit" className="btn btn-sucess">Submit</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="col">
            <img className="mr-3 border border-success rounded" src={contact} alt="contact" />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;



