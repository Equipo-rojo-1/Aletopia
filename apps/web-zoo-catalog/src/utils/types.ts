import { Animal } from '@aletopia/libs/zoo-catalog-interfaces';
export type ZoneName = 'acuario' | 'insectario' | 'carnivoros' | 'herbivoros' | 'aviario'

export type Zone = {
  nombreZona: ZoneName;
  habitats: Habitat[]
}

export type Habitat = {
  idHabitat: number;
  nombreHabitat: string;
  cantidad: number;
  animales: Animal[]
}




