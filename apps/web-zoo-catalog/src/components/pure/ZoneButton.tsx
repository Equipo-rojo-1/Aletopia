import React from 'react';
import '../../assets/css/zone-button.css';
import { ZoneName } from './../../utils/types';

const ZoneButton = ({
  fillTable,
  typeZone,
  hexColor,
  colorImagePath,
  notColorImagePath,
}: {
  fillTable: (typeZone: ZoneName) => void;
  typeZone: ZoneName;
  hexColor: string;
  colorImagePath: string;
  notColorImagePath: string;
}) => {
  let styles: {} = {
    '--color': hexColor,
  };

  return (
    <button
      title={typeZone}
      onClick={() => {
        fillTable(typeZone);
      }}
      className='zone-button'
      style={styles}
    >
      <img
        src={notColorImagePath}
        alt='pajaro con color'
        className='imagen1'
      ></img>
      <div>
        <img
          src={colorImagePath}
          className='imagen2'
          alt='pajaro sin color'
        ></img>
      </div>
    </button>
  );
};

export default ZoneButton;
