//import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Item from "./Components/Item/Item";
import Viewer from "./Components/Viewer/Viewer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const portfolio = {
    become_an_affiliate: {
      name: "Become an Affiliate",
      thumbnail: "become_an_affiliate",
      description: "Randomly generated fly in animation",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages_v6/become_an_affiliate",
      year: "2018",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    how_it_works: {
      name: "How It Works",
      thumbnail: "how_it_works",
      description: "Buttons transform into a modal",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages_v6/how_it_works/",
      year: "2018",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    sun_kissed_style_lookbook: {
      name: "Sun Kissed Style Lookbook",
      thumbnail: "sun_kissed_style_lookbook",
      description: "Details scale effortlessly, loads fast",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/sun_kissed_style_lookbook",
      year: "2017",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    summer_lookbook_2017: {
      name: "Summer Lookbook 2017",
      thumbnail: "summer_lookbook_2017",
      description: "Tight shoot with 24-hour turnaround",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/summer_lookbook_2017",
      year: "2017",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    tracy_reese_lookbook: {
      name: "Tracy Reese Lookbook",
      thumbnail: "tracy_reese_lookbook",
      description: "Exclusive collaboration",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/tracy_reese_lookbook",
      year: "2017",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    sean_patrick_wayland: {
      name: "Sean Patrick Wayland",
      thumbnail: "sean_patrick_wayland",
      description: "Campaign for PA State House",
      link: "https://www.spwayland.net/",
      year: "2017",
      tags: ["javascript", "html", "responsive", "ui", "ux"],
    },
    spring_lookbook_2017: {
      name: "Spring Lookbook 2017",
      thumbnail: "spring_lookbook_2017",
      description: "Road trip inspired photo shoot",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/spring_lookbook_2017",
      year: "2016",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    slot_machine: {
      name: "Slot Machine",
      thumbnail: "slot_machine",
      description: "Optimized page with 3D animation",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/slot_machine",
      year: "2016",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    party_perfect_lookbook: {
      name: "Party Perfect Lookbook",
      thumbnail: "party_perfect_lookbook",
      description: "Shot and coded in half a week",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/party_perfect_lookbook",
      year: "2016",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    unlimited_fashion_e: {
      name: "Unlimited Fashion",
      thumbnail: "unlimited_fashion_e",
      description: "Landing page for Facebook ads",
      link: "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/unlimited_fashion_e",
      year: "2015",
      tags: ["javascript", "html", "landingPage", "responsive"],
    },
    nexus_properties: {
      name: "Nexus Properties",
      thumbnail: "nexus_properties",
      description: "Real Estate Homepage prototype",
      link: "http://pruzaniec.com/nexus-properties",
      year: "2014",
      tags: ["javascript", "html", "responsive", "ui", "ux"],
    },
    philips_bulb_finder: {
      name: "Philips Bulb Finder",
      thumbnail: "philips_bulb_finder",
      description: "Built from relational SQL tables",
      link: "http://pruzaniec.com/bulbfinder/selector.php",
      year: "2014",
      tags: ["html", "ui", "ux"],
    },
    philips_bike_light: {
      name: "Philips Bike Light",
      thumbnail: "philips_bike_light",
      description: "First featuring 2x graphics",
      link: "http://pruzaniec.com/philipsbikelight",
      year: "2014",
      tags: ["html", "ui", "ux"],
    },
    vdo_redi_sensor: {
      name: "VDO REDI-Sensor",
      thumbnail: "vdo_redi_sensor",
      description: "Informative page for tire sensors",
      link: "http://pruzaniec.com/vdoredisensor",
      year: "2013",
      tags: ["html", "ui", "ux"],
    },
    vdo_roadlog: {
      name: "VDO RoadLog",
      thumbnail: "vdo_roadlog",
      description: "Product for logging truck hauls",
      link: "http://pruzaniec.com/vdoroadlog",
      year: "2013",
      tags: ["html", "ui", "ux"],
    },
    philips_gopure: {
      name: "Philips GoPure",
      thumbnail: "philips_gopure",
      description: "Automotive air filter",
      link: "http://pruzaniec.com/philipsgopure",
      year: "2013",
      tags: ["html", "ui", "ux"],
    },
    jt_sports: {
      name: "JT Sports",
      thumbnail: "jt_sports",
      description: "Catalog for paintball products",
      link: "http://pruzaniec.com/jtsports/",
      year: "2010",
      tags: ["ui", "ux"],
    },
  };
  return (
    <Router>
      <div id="items">
        {Object.entries(portfolio).map((piece) => (
          <Item piece={piece[1]} />
        ))}
      </div>

      <div className="App">
        <header>
          <Switch>
            <Route path="/:id" children={<Viewer portfolio={portfolio} />} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
