import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        className="count-btn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
