function addPropsToData(data) {
  return data.features.map((feature) => {
    const population = Math.floor(Math.random() * 500000 + 1000);
    const averageIncome = Math.floor(Math.random() * 70000 + 20000);
    return {
      geometry: { ...feature.geometry },
      properties: {
        ...feature.properties,
        population,
        averageIncome,
      },
    };
  });
}

export default addPropsToData;
