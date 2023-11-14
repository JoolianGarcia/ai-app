const createURL = (path) => {
  return window.location.origin + path;
};

export const createNewEntry = async () => {
  const rest = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    })
  );

  if (rest.ok) {
    const data = await rest.json();
    return data.data;
  }
};
