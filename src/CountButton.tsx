import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({
  type,
  setCount,
  locked,
}: {
  type: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  locked: boolean;
}) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => {
        const newCount = prev - 1;
        if (newCount < 0) {
          return prev;
        }
        return newCount;
      });
    }

    event.currentTarget.blur();
  };
  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
