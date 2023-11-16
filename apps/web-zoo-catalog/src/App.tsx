import React, { useState } from 'react';
// components
import Table from './components/pure/ZoneTable';
import ZoneButton from './components/pure/ZoneButton';
import HabitatTable from './components/pure/HabitatTable';
// import AnimalCard from './components/pure/AnimalCard';
// json`
import { Habitat, ZoneName } from './utils/types';
// css
import './App.css';
// assets
import zones from './zonas.json';
import parrotColor from './assets/img/parrot-color.svg';
import parrotNotColor from './assets/img/parrot-not-color.svg';
import dolphinColor from './assets/img/dolphin-color.svg';
import dolphinNotColor from './assets/img/dolphin-not-color.svg';
import tigerColor from './assets/img/tiger-color.png';
import tigerNotColor from './assets/img/tiger-not-color.svg';
import zebraColor from './assets/img/zebra-color.svg';
import zebraNotColor from './assets/img/zebra-not-color.svg';
import ladybugColor from './assets/img/ladybug-color.svg';
import ladybugNotColor from './assets/img/ladybug-not-color.svg';
import nameZoo from './assets/img/name-logo.png';
import arrowBack from './assets/img/arrow-back.svg';

function App() {
  const [tableData, setTableData] = useState<Habitat[] | null>(null);
  const [zoneName, setZoneName] = useState<ZoneName | ''>('');
  const [habitat, setHabitat] = useState<Habitat | null>(null);
  const zoneManagementStyle = habitat
    ? { display: 'none' }
    : { display: 'flex' };
  const zoneAnimalStyle = habitat ? { display: 'flex' } : { display: 'none' };

  function fillZoneTable(zoneName: ZoneName) {
    const habitats = zones[zoneName].habitats as Habitat[];
    setTableData(habitats);
    setZoneName(zoneName);
  }
  function displayHabitat(habitat: Habitat) {
    setHabitat(habitat);
  }
  function back() {
    setHabitat(null);
  }
  return (
    <>
      <main className="zone-management" style={zoneManagementStyle}>
        <header className="zone-management--header">
          <img src={nameZoo} alt="nombre del zoologico" />
          <h1>Gestion de zonas</h1>
        </header>
        <section className="zone-management--buttonsWrapper">
          <ZoneButton
            fillTable={fillZoneTable}
            typeZone="aviario"
            hexColor="#a3ffa3"
            notColorImagePath={parrotNotColor}
            colorImagePath={parrotColor}
          ></ZoneButton>
          <ZoneButton
            fillTable={fillZoneTable}
            typeZone="acuario"
            hexColor="#91a4ff"
            notColorImagePath={dolphinNotColor}
            colorImagePath={dolphinColor}
          ></ZoneButton>
          <ZoneButton
            fillTable={fillZoneTable}
            typeZone="carnivoros"
            hexColor="#F4E7A0"
            notColorImagePath={tigerNotColor}
            colorImagePath={tigerColor}
          ></ZoneButton>
          <ZoneButton
            fillTable={fillZoneTable}
            typeZone="herbivoros"
            hexColor="#ffdcd7"
            notColorImagePath={zebraNotColor}
            colorImagePath={zebraColor}
          ></ZoneButton>
          <ZoneButton
            fillTable={fillZoneTable}
            typeZone="insectario"
            hexColor="#F7A39D"
            notColorImagePath={ladybugNotColor}
            colorImagePath={ladybugColor}
          ></ZoneButton>
        </section>
        <div className="zone-management--tableWrapper">
          <Table tableData={tableData} displayHabitat={displayHabitat}></Table>
        </div>
      </main>
      <section className="habitat" style={zoneAnimalStyle}>
        <button className="back-button" onClick={back}>
          <img src={arrowBack} alt="boton hacia atras" />
        </button>
        <h1>{`${zoneName} - ${habitat?.nombreHabitat}`}</h1>
        {habitat && <HabitatTable animals={habitat.animales}></HabitatTable>}
      </section>
    </>
  );
}

export default App;
