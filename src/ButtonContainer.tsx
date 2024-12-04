import CountButton from "./CountButton";

export default function ButtonContainer({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount} />
      <CountButton type="plus" setCount={setCount} />
    </div>
  );
}
