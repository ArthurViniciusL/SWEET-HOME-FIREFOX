import './App.css';
import { Component } from 'react';
import { GoogleSearchBar } from './components/google-search/index.jsx';
import { BlurBox } from "./components/blur-box";
import { RandomBackground } from "./components/random-background";
import { IconFirefox } from './components/icon-firefox/index.jsx';
import { PageFooter } from './components/footer/index.jsx';



class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div className='input-container'>
          <IconFirefox />
          <GoogleSearchBar></GoogleSearchBar>
        </div>
        <PageFooter></PageFooter>
        <BlurBox></BlurBox>
        <RandomBackground></RandomBackground>
      </div>
    );
  }
}
export default App;
