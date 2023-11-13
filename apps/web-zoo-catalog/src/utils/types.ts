export interface Animal {
  codigoAnimal:string;
  fechaLlegada:string;
  estado: 'saludable'|'grave'|'regular';
  sexo:string;
}
export type Habitat = {
      id: number;
      habitat: string;
      cantidad: number;
      animales: Animal[]
    }
export type ZoneName = 'acuario' | 'insectario' | 'carnivoros' | 'herbivoros' | 'aviario'

