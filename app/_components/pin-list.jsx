async function getData() {
  const res = await fetch(`${process.env.API_BASE_URL}/pin`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PinList() {
  //   const fetchPin = await fetch(`${process.env.API_BASE_URL}/pin`);

  //   const pins = await fetchPin.json();
  const pins = await getData();

  console.log("🚀 ~ PinList ~ pins:", pins);

  return (
    <ul className="flex">
      {pins.map((pin) => (
        <li key={pin.id} className="border p-1 rounded m-1">
          <h2 className="text-2xl">{pin?.title}</h2>
          <p className="text-gray-600">{pin?.description}</p>
          <p>{pin?.type}</p>
          <p>{pin?.content}</p>
        </li>
      ))}
    </ul>
  );
}
