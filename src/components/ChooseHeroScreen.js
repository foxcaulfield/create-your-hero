import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import heroesReducer from "../store/reducers/heroesReducers";

export const ChooseHeroScreen = (props) => {

  let history = useHistory();
  
  return (
    <div>
      <div>
      Choose your hero
        {/* {props.heroesReducer.heroes} */}
      </div>
      <div>
        create new hero
        <button onClick={()=>  history.push("/create")}>click</button>
      </div> 
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroesReducer: state.heroesReducer
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHeroScreen);
