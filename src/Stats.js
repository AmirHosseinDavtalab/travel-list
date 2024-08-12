export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const persentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {persentage === 100
          ? "you got everything! ready to go ✈"
          : `🧳 you have ${numItems} items on your list, and you already packed
          ${numPacked} (${persentage}%)`}
      </em>
    </footer>
  );
}
