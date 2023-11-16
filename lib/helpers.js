export const formatLocation = (city, country) => {
  if (city && !country) {
    return `${city}`;
  } else if (!city && country) {
    return `${country}`;
  } else if (country && country) {
    return `${city}, ${country}`;
  }
};
