import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  createNewHeroActionCreator,
  setIsCreatingActionCreator,
  hitTheHeroActionCreator,
  deleteTheHeroActionCreator
} from "../store/reducers/heroesReducers";
// import heroesReducer from "../store/reducers/heroesReducers";

function ChooseHeroScreen(props) {
  let history = useHistory();
  // console.log(props);

  return (
    <div>
      <div>
        Choose your hero!
        <hr/>
        {/* {props.isCreating? "smthng is creating now": "allrght, nthng si creating"} */}
        {props.heroes.map((hero, index) =>
          <div key={index}>

            <span><strong>{hero.name} </strong>id:{hero.id}</span>
            <br/>
            <span>Vitality: {hero.calculatedParameters.vitality}</span>     
            <br/>

            <span>Dodge: {hero.calculatedParameters.dodge}</span>
            <br/>

            <span>Energy: {hero.calculatedParameters.energy}</span>
            <br/>
            <button 
              disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} was hit`);
                props.hitTheHero(hero.id);
              }
              }              
            >Hit the hero</button>
            <button 
              disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} was hit`);
                props.deleteTheHero(hero.id);
              }
              }              
            >Delete the hero</button>
            <hr/>
          </div>
        )}
      </div>
      {props.heroes.length === props.maximumNumberOfHeroes && <div>Oops... too many heroes there :P</div>}
      <div>
        <button 
          disabled={props.heroes.length === props.maximumNumberOfHeroes}
          onClick={() => {
          // console.log("1");
            props.createNewHero();
            props.setIsCreating(true);
            // console.log("2");
            history.push("/create");
          // console.log("2.5");
          // console.log("were cretinfsdffsd!!!!!!");
          }
          }>create new hero</button>
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
    },
    deleteTheHero: (heroId) => {
      dispatch(deleteTheHeroActionCreator(heroId));
    },
    setIsCreating: (setting) => {
      dispatch(setIsCreatingActionCreator(setting));
    },
    hitTheHero: (heroId) => {
      dispatch(hitTheHeroActionCreator(heroId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHeroScreen);
