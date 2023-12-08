import React from 'react';
import './../../assets/css/animal-card.css';
import heart from './../../assets/img/heart.svg';
import hash from './../../assets/img/hash.svg';
import maleGender from './../../assets/img/male-sign.svg';
import femaleGender from './../../assets/img/female-sign.svg';
import calendar from './../../assets/img/calendar.svg';
import { Animal } from '@aletopia/libs/zoo-catalog-interfaces';

export default function AnimalCard({ animal }: { animal: Animal }) {
  const animalState = {
    saludable: 'green',
    grave: 'red',
    regular: 'yellow',
  };
  const clase: string = animalState[animal.estado];
  return (
    <section className="animal-card">
      <div className="animal-card--id">
        <img src={hash} alt="hash" />
        <span>{animal.codigoAnimal}</span>
      </div>
      <div className="animal-card--gender">
        <img
          src={animal.sexo === 'macho' ? maleGender : femaleGender}
          alt="gender"
        />
        <span>{animal.sexo === 'macho' ? 'macho' : 'hembra'}</span>
      </div>
      <div className="animal-card--date">
        <img src={calendar} alt="calendar" />
        <span>{animal.fechaLlegada}</span>
      </div>
      <div className={`animal-card--health ${clase}`}>
        <img src={heart} alt="heart" />
        <span className={clase}>{animal.estado}</span>
      </div>
    </section>
  );
}
