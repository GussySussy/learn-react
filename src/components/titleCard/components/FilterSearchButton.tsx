import React from "react";
import Select, { type SelectProps } from "../../select/Select";
import { Status } from "../../../pages/employees/dashboard/components/tableRow/TableRow";
import "./FilterSearchButton.css";
import { useSearchParams } from "react-router-dom";

const FilterSearchButton = ({
  variant = "primary",
  options,
  defaultOption,
}: SelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value != "default") {
      searchParams.set("status", e.target.value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("status");
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="title-card-option-filter">
      <div className="filter-option-text option-text">Filter By</div>
      <Select
        variant={variant}
        options={options}
        defaultOption={defaultOption}
        className="filter-select-container"
        onChange={(e) => handleFilterSelect(e)}
      />
    </div>
  );
};

export default FilterSearchButton;
