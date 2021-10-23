import "./App.css";
import DescriptionComponent from "./components/DescriptionComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import PanelComponent from "./components/PanelComponent";
import SliderComponent from "./components/SliderComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <PanelComponent />
      <DescriptionComponent />
      <SliderComponent />
    </div>
  );
}

export default App;
