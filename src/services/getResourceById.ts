const getResourceById = async (name: string, id: string) => {
  const apiBase = process.env.REACT_APP_API_URL;

  try {
    const reponse = await fetch(`${apiBase}/${name}/${id}`);

    if (!reponse.ok) {
      const message = `Status: ${reponse.statusText} - Message: ${reponse.statusText}`;
      throw new Error(message);
    }

    const { character } = await reponse.json();
    return character;
  } catch (err) {
    return err;
  }
};

export default getResourceById;
