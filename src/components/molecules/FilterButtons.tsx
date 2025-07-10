import type { Filter } from "../../types/types";
import { Button } from "../atoms/Button";

type Props = {
  filter: Filter;
  setFilter: (f: Filter) => void;
};

const filters: Filter[] = ["all", "done", "pending"];

export const FilterButtons = ({ filter, setFilter }: Props) => {
  return (
    <div className="flex gap-2 py-4">
      {filters.map((f) => (
        <Button
          key={f}
          variant={filter === f ? "success" : "primary"}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </div>
  );
};
