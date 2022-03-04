import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectInput = ({ instanceId, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        className="text-sm outline-none"
        instanceId={instanceId}
        options={options}
      />
    </div>
  );
};

SelectInput.propTypes = {
  instanceId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
