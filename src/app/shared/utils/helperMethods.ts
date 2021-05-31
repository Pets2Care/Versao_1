// const formatDate = (valor: string): string => {
//   const tempDate = new Date(valor);
//   const bla = `${tempDate.getDate()}/${
//     tempDate.getMonth() + 1
//   }/${tempDate.getFullYear()}`;
//   return bla;
// };

const getFormattedDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};

const getAge = (date: string): string => {
  const today = new Date();
  const birthDate = new Date(date);
  //console.log('birthDate = ', birthDate);
  const years = birthDate.getFullYear() - today.getFullYear();
  const months = years * 12 - birthDate.getMonth() + today.getMonth();
  const days = today.getDate() - birthDate.getDate();
  //console.log('years = ', years);
  //console.log('months = ', months);

  const age =
    (years > 0 ? `${years} Ano(s),` : '') +
    (months > 0 ? `${months} Mes(es),` : '') +
    (days > 0 ? `${days} Dias` : 'Idade não disponível');

  return age;
};

export { getFormattedDate, getAge };
