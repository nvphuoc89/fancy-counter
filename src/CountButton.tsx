import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({
  type,
  setCount,
}: {
  type: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleClick = () => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
