async function getData() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/pin`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    return { error: true, message: err?.message };
  }
}

export default async function PinList() {
  const pins = await getData();

  console.log("🚀 ~ PinList ~ pins:", pins);

  return (
    <ul className="flex">
      {Array.isArray(pins) ? (
        pins.map((pin) => (
          <li key={pin?.id} className="border p-1 rounded m-1">
            <h2 className="text-2xl">{pin?.title}</h2>
            <p className="text-gray-600">{pin?.description}</p>
            <p>{pin?.type}</p>
            <p>{pin?.content}</p>
          </li>
        ))
      ) : (
        <p>No pins available</p>
      )}
    </ul>
  );
}
