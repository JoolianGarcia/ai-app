const createURL = (path) => {
  return window.location.origin + path;
};

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
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
