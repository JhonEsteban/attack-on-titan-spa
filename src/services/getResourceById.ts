const getResourceById = async (name: string, id: string) => {
  const apiBase = process.env.REACT_APP_API_URL;

  try {
    const reponse = await fetch(`${apiBase}/${name}/${id}`);

    if (!reponse.ok) {
      const message = `Status: ${reponse.statusText} - Message: ${reponse.statusText}`;
      throw new Error(message);
    }

    return await reponse.json();
  } catch (err) {
    return err;
  }
};

export default getResourceById;
