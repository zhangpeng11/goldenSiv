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
      // flexible.rem = win.rem = rem;
    }
    refreshRem();

    window.addEventListener('resize', refreshRem);
  }, []);

  return (
    <div className="App ">
      <div class="container">
        <div class="top">
          <div class="header">
            <div class="logo"></div>
            <a href="#about">ABOUT</a>
            <a href="#strategic">STRATEGIC FOCUS</a>
            <a href="#contract">CONTACT US</a>
          </div>
          <div class="banner">
            <h1 class="title">
              INNOVATIVE SOCIAL <br />
              NETWORKING
            </h1>
            <h3 class="sub_title">
              ONCE TWO USERS ARE "MATCHED", THEY CAN FORGE A DEEPER AND MORE INTIMATE CONNECTION IN A SHORT TIME BY
              MAKING VOICE CALLS IN THE APP.
            </h3>
          </div>

          <div class="icon icon_1"></div>
          <div class="icon icon_2"></div>
        </div>

        <div id="about" class="section_1">
          <h1 class="title">STRATEGIC FOCUS</h1>
          <p class="content">
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
        </div>

        <div id="strategic" class="section_2">
          <div class="intro intro_1">
            <div class="text">
              <h1 class="title">
                INSTANT <br />
                NETWORKING
              </h1>
              <p class="content">
                GoldenSiv's unique anonymous-chat-based matching algorithm allows users to find and network with a new
                friend within only ten seconds, which is a first in the industry.
              </p>
            </div>
            <div class="image"></div>
          </div>
        </div>
        <div class="section_3">
          <div class="intro intro_2">
            <div class="image"></div>
            <div class="text">
              <h1 class="title">
                INSTANT <br />
                MULTI-USER <br />
                INTERACTION
              </h1>
              <p class="content">
                GoldenSiv's multi-user live audio streaming feature not only effectively cashes out its traffic but also
                delivers "democratic" social networking by offering average-looking users a stage to show themselves and
                fulfil their value.
              </p>
            </div>
          </div>
        </div>
        <div class="section_4">
          <div class="intro intro_3">
            <div class="text">
              <h1 class="title">
                DIVERSE <br />
                INTERACTION
              </h1>
              <p class="content">
                Interactive live audio streaming frees users from the tension of staring at mobile screens. By allowing
                streamers to customize their channel backgrounds, the app welcomes all forms of interaction such as
                knowledge sharing, talent show, service purchase, gaming, entertainment, and chatting to boost user
                stickiness.
              </p>
            </div>
            <div class="image"></div>
          </div>
        </div>
      </div>

      <div id="contract" class="footer">
        <div class="logo"></div>
        <div class="contract">
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
