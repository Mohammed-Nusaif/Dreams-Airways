import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
import Guide from "./Components/Guide";
import Lounge from "./Components/Lounge";
import Memories from "./Components/Memories";
import Navbar1 from "./Components/Navbar1";
import Spotlight from "./Components/Spotlight";
// import Test from "./Components/Test";

function App() {
  return (
    <div className="App">
        <Navbar1/>
        <Spotlight/>
        <Booking/>
        <Guide/>
        <Memories/>
        <Lounge/>
        <Footer/>
        {/* <Test/> */}
    </div>
  );
}

export default App;
