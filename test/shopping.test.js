import { calculateTotalPrice } from '../src/shopping.js';

describe('calculateTotalPrice', () => {
  test('Harus menghitung harga total dengan benar', () => {
    const items = [
      { id: 1, name: 'Telur', price: 2000 },
      { id: 2, name: 'Beras', price: 75000 },
      { id: 3, name: 'Kue', price: 10000 },
    ];

    expect(calculateTotalPrice(items)).toBe(87000);
  });

  test('Harus mengembalikan 0 untuk array item yang kosong', () => {
    expect(calculateTotalPrice([])).toBe(0);
  });

  test('Harus melempar error untuk input non-array', () => {
    expect(() => calculateTotalPrice('invalid')).toThrow(
      'Items harus berupa array'
    );
  });

  test('Harus melempar error untuk format item yang tidak valid', () => {
    const invalidItems = [
      { id: 1, name: [] }, // Properti `name` seharusnya string
      { id: 2, price: 2000 }, // Properti `name` tidak ada
      { id: 3, name: 'Beras' }, // Properti `price` tidak ada
      { id: 4, name: 'Kue', price: 'invalid' }, // `price` harus number
    ];

    invalidItems.forEach((item) => {
      expect(() => calculateTotalPrice([item])).toThrow(
        'Format item tidak valid.'
      );
    });
  });
});
