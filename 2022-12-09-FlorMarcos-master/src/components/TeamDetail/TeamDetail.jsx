import * as actions from "../../redux/actions";
import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const TeamDetail = ({match}) => {
let id=match.params.teamId;
const dispatch = useDispatch();

React.useEffect(()=>{
  dispatch(actions.getTeamDetail(id))
}, [id,dispatch]);

const TeamDetail = useSelector((state)=>{
  return state.TeamDetail;
});
const teams = useSelector((state)=>{
  return state.teams;
});
  
  return (
    <div>
      <h1>Team Detail</h1>
      <p>{TeamDetail?.name}</p>
      <p>{TeamDetail?.founder}</p>
<DetailCard 
id={TeamDetail?.id} 
drivers={TeamDetail?.drivers} 
base={TeamDetail?.base} 
image={TeamDetail?.image}  
worldChampionships={TeamDetail?.worldChampionships}
/>
    </div>
  );
};
export default TeamDetail;
