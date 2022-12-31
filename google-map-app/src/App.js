import { useLoadScript } from "@react-google-maps/api";
import Map from "./components/Map";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function App() {

  const [marker, setMarker] = useState([])

  async function getdata() {
    let data = [];
    for (let i = 0; i < 5; i++) {
      await axios.get("https://plain-teal-cowboy-hat.cyclic.app/coordinates")
        .then((res) => {
          console.log(res);
          data.push(res.data);
        })
    }
    setMarker(data);
    console.log(marker)

  }

  useEffect(() => {
    getdata();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBBDK8nKwQfQSXktPgMxgDV0andOkVffOc"
  });

  return isLoaded ? <Map marker={marker} /> : null;
}
