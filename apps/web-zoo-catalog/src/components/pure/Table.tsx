import React from 'react';
import './../../assets/css/table.css';
import windowsOpen from './../../assets/img/window-open.svg';
import { Habitat } from './../../utils/types';
export default function Table({
  tableData,
  displayHabitat,
}: {
  tableData: Habitat[] | null;
  displayHabitat: (habitat: Habitat) => void;
}) {
  return (
    <table className='table'>
      {!tableData && (
        <thead className='table--landing-text'>
          <tr>
            <th>Presiona algún botón para rellenar la tabla...</th>
          </tr>
        </thead>
      )}
      {tableData && (
        <>
          <thead>
            <tr className='table--row'>
              <th>Habitat</th>
              <th>Cantidad</th>
              <th>Op</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((habitat) => {
              return (
                <tr key={habitat.id} className='table--row'>
                  <td>{habitat.habitat}</td>
                  <td>{habitat.cantidad}</td>
                  <td>
                    <img
                      src={windowsOpen}
                      alt='windows open'
                      onClick={() => {
                        displayHabitat(habitat);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
}
