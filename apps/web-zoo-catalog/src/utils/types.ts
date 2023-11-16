export type ZoneName = 'acuario' | 'insectario' | 'carnivoros' | 'herbivoros' | 'aviario'

export type Zone = {
  zona: ZoneName;
  habitats: Habitat[]
}

export type Habitat = {
  id: number;
  habitat: string;
  cantidad: number;
  animales: Animal[]
}

export type Animal = {
  codigoAnimal:string;
  fechaLlegada:string;
  estado: 'saludable'|'grave'|'regular';
  sexo:string;
}


