export const getInformationAboutNumber = (number) => {
  return fetch(`http://numbersapi.com/${number}`).then(res => res.text());
};
