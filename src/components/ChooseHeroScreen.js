import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { createNewHeroActionCreator, setIsCreatingActionCreator } from "../store/reducers/heroesReducers";
// import heroesReducer from "../store/reducers/heroesReducers";

function ChooseHeroScreen(props) {
  let history = useHistory();
  // console.log(props);

  return (
    <div>
      <div>
        Choose your hero!
        {props.heroes.map((hero, index) =>
          <div key={index}>
            {hero.name}
            <button onClick={() => {
              history.push("/create");
              
            }
            }              
            >edit</button>
          </div>
        )}
      </div>
      <div>
        create new hero
        <button onClick={() => {
          console.log("1");
          props.createNewHero();
          console.log("2");
          history.push("/create");
          console.log("2.5");
          // console.log("were cretinfsdffsd!!!!!!");
        }
        }>click</button>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    ...state
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createNewHero: () => {
      dispatch(createNewHeroActionCreator());
      dispatch(setIsCreatingActionCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHeroScreen);
