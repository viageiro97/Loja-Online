
//Converter Moeda para formato metical
export function toMetical(value){
    const formatMZN = new Intl.NumberFormat('pt-MZ', {
        style: 'currency',
        currency: 'MZN',
      });

    return formatMZN.format(value);
}
