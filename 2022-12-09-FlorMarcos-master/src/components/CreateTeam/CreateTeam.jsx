import * as actions from "../../redux/actions";

import React from "react";
import { useDispatch } from "react-redux";

// CUIDADO!. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateTeam = () => {
  const [state, setState] = React.useState({
    name: "",
    founder: "",
    base: "",
    worldChampionships: "",
  });

  const handleInput = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setState({ ...state, [property]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createTeam(state));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input onChange={handleInput} type="text" name="name" />
        <label>Founder: </label>
        <input onChange={handleInput} type="text" name="founder" />
        <label>Base: </label>
        <input onChange={handleInput} type="text" name="base" />
        <label>WorldChampionships: </label>
        <input onChange={handleInput} type="number" name="worldChampionships" />
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeam;