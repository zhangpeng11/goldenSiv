import logo from './logo.svg';
import './App.scss';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function refreshRem() {
      var docEl = document.documentElement;
      var width = docEl.getBoundingClientRect().width;
      var rem = width / 100;
      docEl.style.fontSize = rem + 'px';
    }
    refreshRem();

    window.addEventListener('resize', refreshRem);
  }, []);

  return (
    <div className="App ">
      <div className="container">
        <div className="top">
          <div className="header">
            <div className="logo"></div>
            <a href="#about">ABOUT</a>
            <a href="#strategic">STRATEGIC FOCUS</a>
            <a href="#contract">CONTACT US</a>
          </div>
          <div className="banner">
            <h1 className="title">
              INNOVATIVE SOCIAL <br />
              NETWORKING
            </h1>
            <h3 className="sub_title">
              ONCE TWO USERS ARE "MATCHED", THEY CAN FORGE A DEEPER AND MORE INTIMATE CONNECTION IN A SHORT TIME BY
              MAKING VOICE CALLS IN THE APP.
            </h3>
            <div className="icon icon_1"></div>
          </div>

          {/* <div className="icon icon_2"></div> */}
        </div>

        <div id="about" className="section_1">
          <h1 className="title">STRATEGIC FOCUS</h1>
          <p className="content">
            Founded in 2020, Golden Siv Technology Limited is a software development company that builds an innovative
            social networking application for meeting strangers.
            <br />
            <br />
            It aims to become one of the top five social networking applications in Hong Kong. With our Golden Siv app,
            users are allowed to spot and network with other like-minded people in less than ten seconds.
            <br />
            <br />
            Once two users are "matched", they can forge a deeper and more intimate connection in a short time by making
            voice calls in the app.
            <br />
            <br />
            Golden Siv Technology Limited is also planning to roll out features such as gaming, talent show, and
            live-streaming to offer users more channels to meet new friends.
          </p>
          <div className="icon icon_1"></div>
          <div className="icon icon_2"></div>
          <div className="icon icon_3"></div>
          <div className="icon icon_4"></div>
          <div className="icon icon_5"></div>
        </div>

        <div id="strategic" className="section_2">
          <div className="intro intro_1">
            <div className="text">
              <h1 className="title">
                INSTANT <br />
                NETWORKING
              </h1>
              <p className="content">
                GoldenSiv's unique anonymous-chat-based matching algorithm allows users to find and network with a new
                friend within only ten seconds, which is a first in the industry.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div className="section_3">
          <div className="intro intro_2">
            <div className="image"></div>
            <div className="text">
              <h1 className="title">
                INSTANT <br />
                MULTI-USER <br />
                INTERACTION
              </h1>
              <p className="content">
                GoldenSiv's multi-user live audio streaming feature not only effectively cashes out its traffic but also
                delivers "democratic" social networking by offering average-looking users a stage to show themselves and
                fulfil their value.
              </p>
            </div>
          </div>
        </div>
        <div className="section_4">
          <div className="intro intro_3">
            <div className="text">
              <h1 className="title">
                DIVERSE <br />
                INTERACTION
              </h1>
              <p className="content">
                Interactive live audio streaming frees users from the tension of staring at mobile screens. By allowing
                streamers to customize their channel backgrounds, the app welcomes all forms of interaction such as
                knowledge sharing, talent show, service purchase, gaming, entertainment, and chatting to boost user
                stickiness.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </div>

      <div id="contract" className="footer">
        <div className="logo"></div>
        <div className="contract">
          <p>Wanchai, Hong Kong</p>
          <a href="#">
            GoldenSiv@app.com <i></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
