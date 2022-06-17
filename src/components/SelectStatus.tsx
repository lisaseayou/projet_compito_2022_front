import { SelectPropsType } from "../types";

function SelectStatus({handleSelect, value}: SelectPropsType) {
  return (
    <div>
      <select
        value={value}
        className="border border-violet-400 m-2 w-44 h-7"
        name="status"
        onChange={handleSelect}
      >
        <option value=""></option>
        <option value="todo">À faire</option>
        <option value="wip">En cours</option>
        <option value="codereview">À valider</option>
        <option value="Done">Terminée!</option>
      </select>
    </div>
  );
}

export default SelectStatus;
