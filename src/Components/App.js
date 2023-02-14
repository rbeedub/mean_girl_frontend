import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Feed from "./Feed";

function App() {
  return (
    <div>
      <Header/>
      <div class="ui equal width grid">
        <div class="column">
          <div class="ui segment">
          <SideMenu />
          </div>
        </div>
        <div class="eight wide column">
          <div class="ui segment">
          <p class="center text">Lastest Burns...</p>
          <Feed />
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            Add a burn....
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
