const setRating = (rating: number) => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    const element = i < rating ? "active" : "";
    array.push(element);
  }
  return array;
};

export default setRating;
