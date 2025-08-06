// src/models/Papagaio.ts
import { Animal } from './Animal';

export class Papagaio extends Animal {
  emitirSom(frase?:string): string {
    if(frase){
      return frase;
    }
    else{
      return 'Olá! Eu sou um papagaio!';
    }
  }
}