import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleClick = () => setCount(0);
  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={handleClick} />
    </button>
  );
}
