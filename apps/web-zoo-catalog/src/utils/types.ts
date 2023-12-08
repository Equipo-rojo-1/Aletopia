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

export type Animal = {
  codigoAnimal:string;
  nombreAnimalComun:string;
  fechaLlegada:string;
  estado: 'saludable'|'grave'|'regular';
  sexo:string;
}


