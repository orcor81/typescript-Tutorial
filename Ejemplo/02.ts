export interface Producto {
  Nombre: string;
  Precio: number;
}

export function CalcularISV(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ Precio }) => {
    total += Precio;
  });
  return [total, total * 0.15];
}
