interface Domicilio {
  Calle: string;
  Numero: number;
  Ciudad: string;
}

interface Persona {
  Nombre: string;
  Edad: number;
  Socio: boolean;
  Direccion: Domicilio;
  MostrarDireccion: () => string;
}

const p: Persona = {
  Nombre: 'Pepe',
  Edad: 17,
  Socio: false,
  Direccion: { Calle: 'Moreno', Numero: 786, Ciudad: 'CABA' },
  MostrarDireccion() {
    return (
      this.Direccion.Calle + ' ' + this.Numero + ', ' + this.Direccion.Ciudad
    );
  },
};
//console.log('Hola mundo');
//const a: number = 10;
let dir = p.MostrarDireccion();
console.log(dir);

// IMPORTANTE:
// Ver la consola de JavaScript
