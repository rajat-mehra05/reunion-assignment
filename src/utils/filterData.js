export const filterLocation = (data, query) => {
  if (!query) return data;
  return data.filter((item) => item.location === query);
};

export const filterPriceRange = (data, query) => {
  if (query.min === 0 && query.max === 0) return data;

  const { min, max } = query;
  return data.filter((item) => item.price < max && item.price >= min);
};

export const filterPropertyType = (data, query) => {
  if (!query) return data;
  return data.filter((item) => item["propertyType"] === query);
};

export const filterSearchedData = (data, query) => {
  if (!query) return data;

  let queryData = query.toLowerCase();

  return data.filter((item) => {
    let propertyName = item.name.toLowerCase();
    const propertyLocation = item.location.toLowerCase();
    const streetAddress = item.streetAddress.toLowerCase();
    const propertyType = item["propertyType"].toLowerCase();

    return (
      propertyName.includes(queryData) ||
      propertyLocation.includes(queryData) ||
      streetAddress.includes(queryData) ||
      propertyType.includes(queryData)
    );
  });
};
