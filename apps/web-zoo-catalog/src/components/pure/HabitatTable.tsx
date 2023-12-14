import { Animal } from '@aletopia/libs/zoo-catalog-interfaces';
import React from 'react';

export default function HabitatTable({ animals }: { animals: Animal[] }) {
  return (
    <table className="table">
      <thead>
        <tr className="table--row">
          <th>ID</th>
          <th>Especie</th>
          <th>Genero</th>
          <th>Fecha de llegada</th>
          <th>Salud</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => {
          return (
            <tr key={animal.codigoAnimal} className="table--row">
              <td>{animal.codigoAnimal}</td>
              <td>{animal.nombreAnimalComun}</td>
              <td>{animal.sexo}</td>
              <td>{animal.fechaLlegada}</td>
              <td>{animal.estado}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
