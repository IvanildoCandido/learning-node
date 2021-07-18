type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: 'Ventilador', price: 299 },
  { title: 'Liquidificador', price: 199 },
  { title: 'Ar Condicionado', price: 1399 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((item) => item.price > price);
  },
};
