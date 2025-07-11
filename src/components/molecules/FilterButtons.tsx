"use client";

import type React from "react";

import type { Filter } from "../../types/types";
import { Button } from "../atoms/Button";
import { FiList, FiCheck, FiClock } from "react-icons/fi";
import clsx from "clsx";

type Props = {
  filter: Filter;
  setFilter: (f: Filter) => void;
};

const filters: { key: Filter; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <FiList className="w-4 h-4" /> },
  { key: "done", label: "Done", icon: <FiCheck className="w-4 h-4" /> },
  { key: "pending", label: "Pending", icon: <FiClock className="w-4 h-4" /> },
];

export const FilterButtons = ({ filter, setFilter }: Props) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl">
      {filters.map((f) => (
        <Button
          key={f.key}
          variant={filter === f.key ? "primary" : "ghost"}
          size="sm"
          onClick={() => setFilter(f.key)}
          className={clsx(
            "flex-1 gap-2 rounded-xl transition-all duration-300",
            filter === f.key
              ? "shadow-lg transform scale-105"
              : "hover:bg-white hover:shadow-md"
          )}
        >
          {f.icon}
          {f.label}
        </Button>
      ))}
    </div>
  );
};
