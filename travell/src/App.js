import './App.css';
import travel_01 from './assets/img1.jpg';
// import travel_02 from './assets/img2.jpg';
// import travel_03 from './assets/img3.jpg';
import Hero from "./components/Hero";
// import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      {/* <Navbar navbarLinks={navbarLinks} /> */}
      <Hero imageSrc={travel_01} />
      {/* <Slider
        imageSrc={travel_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      /> */}
    </div>
  );
}

export default App;
