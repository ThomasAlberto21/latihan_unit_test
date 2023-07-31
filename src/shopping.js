export const calculateTotalPrice = (items) => {
  // Memeriksa apakah input adalah array
  if (!Array.isArray(items)) {
    throw new Error('Items harus berupa array');
  }

  // Menggunakan metode `reduce()` untuk mengulangi array dan menghitung harga total
  return items.reduce((total, item) => {
    // Memeriksa apakah item saat ini valid.
    if (
      !item ||
      typeof item !== 'object' ||
      !item.name ||
      !item.price ||
      typeof item.price !== 'number'
    ) {
      throw new Error('Format item tidak valid.');
    }

    return total + item.price;
  }, 0);
};
