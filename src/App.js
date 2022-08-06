import prj1 from './ss1.png';
import './App.css';

function App() {
  const imgStyle = {
    padding: "5px",
    borderRadius: "20px"
  }
  return (
<div>
  <section className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
    <section className="w3-row-padding">
      <section className="w3-third">
        <section className="w3-white w3-text-grey w3-card-4">
          <section className="w3-display-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTPT-Qu8Y77ONUk0xcpp-fj2gC935SQ70Vw&usqp=CAU" style={{width: '100%'}} alt="Avatar" />
            <section className="w3-display-bottomleft w3-container w3-text-black">
              <h2>Farah Ghias</h2>
            </section>
          </section>
          <section className="w3-container">
            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-black" />Cantact Info </b></p>
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-black" />Student </p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-black" />United States, California</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black" />farah9hias@gmail.com</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-black" />510-815-3342</p>
            <hr />
            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-black" />Work Experience </b></p>
            Business Management
            <section className="w3-light-grey w3-round-xlarge w3-small">
            </section>
            Medical Interpreter
            <section className="w3-light-grey w3-round-xlarge w3-small">
            </section>
            Personal Assistent
            <section className="w3-light-grey w3-round-xlarge w3-small">
            </section>
            <p />
            <section className="w3-light-grey w3-round-xlarge w3-small">
            </section>
            <br />
            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-black" />Languages</b></p>
            <p>English</p>
            <section className="w3-light-grey w3-round-xlarge">
              <section className="w3-round-xlarge w3-black" style={{height: 24, width: '100%'}} />
            </section>
            <p>Farsi</p>
            <section className="w3-light-grey w3-round-xlarge">
              <section className="w3-round-xlarge w3-black" style={{height: 24, width: '100%'}} />
            </section>
            <p>Urdu</p>
            <section className="w3-light-grey w3-round-xlarge">
              <section className="w3-round-xlarge w3-black" style={{height: 24, width: '100%'}} />
            </section>
            <p>Punjabi</p>
            <section className="w3-light-grey w3-round-xlarge">
              <section className="w3-round-xlarge w3-black" style={{height: 24, width: '100%'}} />
            </section>
            <p>Hindi</p>
            <section className="w3-light-grey w3-round-xlarge">
              <section className="w3-round-xlarge w3-black" style={{height: 24, width: '100%'}} />
            </section>
            <br />
          </section>
        </section><br />
      </section>
      <section className="w3-twothird">
        <section className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-black" />About Me
          </h2>
          <section className="w3-container">
            <p>Studier of the books. I'm awesome, just ask anyone and they'll tell you.</p>
            <hr />
          </section>
        </section>
        <section className="w3-container w3-card w3-white">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-black" />Projects</h2>
          <section className="w3-container w3-black w3-center">
            <a href="https://ghiasfarah.github.io/Horieson/"><img src="https://user-images.githubusercontent.com/101944347/163080140-2e8210a0-548d-49fe-9b56-271c8d7073f8.png" height="200px" width="250px" alt="project 1" style={imgStyle}/></a>
            <a href="https://ghiasfarah.github.io/random_password_generator/"><img src="https://user-images.githubusercontent.com/101944347/163077588-5e67cabf-d1ad-4672-9c0a-20e741eecb3a.png" height="200px" width="250px" alt="project 2" style={imgStyle}/></a>
            <a href="https://ghiasfarah.github.io/random_password_generator/"><img src={prj1} height="200px" width="250px" alt="project 3" style={imgStyle}/></a>
            <a href="https://ghiasfarah.github.io/random_password_generator/"><img src="https://github.com/GhiasFarah/Day_planner/raw/main/Assets/05-third-party-apis-homework-demo.gif" height="200px" width="250px" alt="project 4" style={imgStyle}/></a>
            <a href="https://ghiasfarah.github.io/random_password_generator/"><img src="https://courses.bootcampspot.com/courses/1655/files/1853656/preview" height="200px" width="250px" alt="project 5" style={imgStyle}/></a>
            <a href="https://adventure-reviews.herokuapp.com/"><img src="https://raw.githubusercontent.com/GhiasFarah/travel-advice-express/main/public/image/travel-story-3.png" height="200px" width="250px" alt="project 6" style={imgStyle}/></a>
            <hr />
          </section>
        </section>
      </section>
    </section>
  </section>
  <footer className="w3-container w3-black w3-center w3-margin-top">
    <i className="fa fa-facebook-official w3-hover-opacity" />
    <i className="fa fa-instagram w3-hover-opacity" />
    <i className="fa fa-snapchat w3-hover-opacity" />
    <i className="fa fa-pinterest-p w3-hover-opacity" />
    <i className="fa fa-twitter w3-hover-opacity" />
    <i className="fa fa-linkedin w3-hover-opacity" />
  </footer>
</div>

  );
}

export default App;
