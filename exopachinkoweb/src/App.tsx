// App.js
import { useEffect, useRef, useState } from "react";
import React from "react";
// import Menu from "./components/Menu";
// import { flatbuffers } from 'flatbuffers';
import "./App.css";
import Gyroscope from "./components/Gyroscope";
import NameEntry from "./components/NameEntry";
import InputSelect from "./components/InputSelect";
import TilesInput from "./components/TilesInput";
import TapnSlashInput from "./components/TapnSlashInput";
import DrawInput from "./components/DrawInput";
import SuccessOverlay from "./components/SuccessOverlay";
import ScoreWidget from "./components/ScoreWidget";
import ConnectWidget from "./components/ConnectWidget";
import { NetworkingManager } from "./networking/NetworkingManager";
import { TemplateManager } from "./Template/TemplateManager";
import { Result, Point, DollarRecognizer } from "./Template/Recognizer";
import {
  HStack,
  VStack,
  Grid,
  GridItem,
  ButtonGroup,
  Button,
  Box,
  Heading,
  Center,
  Spacer,
  Container,
} from "@chakra-ui/react";
import AddTemplateWidget from "./components/AddTemplate";
import DrawingWidget from "./components/DrawingWidget";
import RandomPlayerDataWidget from "./components/RandomPlayerDataWidget";
import NavMenu from "./components/NavMenu";
import ConnectBigDomeWidget from "./components/ConnectBigDomeWidget"
import ConnectExoWidget from "./components/ConnectToExo";
import ColorSelector from "./components/ColorSelector";
import EmissiveCheckBox from "./components/EmissiveCheckBox";
import PlayerTrailCheckBox from "./components/PlayerTrailCheckBox";
import TrailLengthSlider from "./components/TrailLengthSlider";
import AcceptCertButtonExo from "./components/AcceptCertButtonExo";


const UserInputKey = "UserInput";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const App = () => {

  // networking stuff
  const [networkingManager, setNetworkingManager] =
    useState<NetworkingManager | null>(null);

  const setupNetworkingBindings = (inNetworkingManager: NetworkingManager) => {
    if (networkingManager) {
      // networkingManager.addListener(
      //   Message.MediaPlaneToMobileLoginResponse.toString(),
      //   HandleLineColor
      // );
      console.log("setup bindings");
    }
  };

  // networking function
  // to be passed in as a prop to a component
  const connectToServer = (address: string) => {
    const newNetworkingManager = new NetworkingManager(address);
    setupNetworkingBindings(newNetworkingManager);
    newNetworkingManager
      .connect()
      .then(() => {
        setNetworkingManager(newNetworkingManager);
      })
      .catch(() => {
        console.log("failed to connect");
      });
  };

  // Initialization when the component
  // mounts for the first time
  useEffect(() => {  });

  return (
    <Container className="App">
      <section className="ipcon">
        <Grid
          templateRows="repeat(3, 0.6fr)"
          templateColumns="repeat(5, 1fr)"
          templateAreas={`"Heading" "Connections" "InputSelect" "Main"`}
          gap={4}
          p={"5px"}
        >
          <GridItem rowSpan={1} colStart={2} colEnd={5} area="Heading" mt="1%">
            <Center>
              <Heading color="white">Exo Pachinko</Heading>
            </Center>
          </GridItem>

          <GridItem width="100%" maxW="100%" area="Connections" rowSpan={2} colSpan={5} mt="-2%">
            
              <Box>
                <AcceptCertButtonExo />
                <ConnectExoWidget connectFunction={connectToServer} />
                <EmissiveCheckBox inNetworkingManager={networkingManager} />
                <PlayerTrailCheckBox inNetworkingManager={networkingManager} />
                <TrailLengthSlider inNetworkingManager={networkingManager} />
              </Box>
            
          </GridItem>

        </Grid>
      </section>
      <ColorSelector inNetworkingManager={networkingManager} />
    </Container>
  );

  // <button type="button" onClick={AddSetScore}>Add Template</button>
};

export default App;
