const getData = async () => {
  try {
    const res = await fetch("https://epibooks.onrender.com/fantasy");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    throw error;
  }
};
export default getData;
