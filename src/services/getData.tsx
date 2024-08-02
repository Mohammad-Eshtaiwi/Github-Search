export default async function getData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
}
