import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  createNewHeroActionCreator,
  setIsCreatingActionCreator,
  hitTheHeroActionCreator,
  deleteTheHeroActionCreator,
} from "../store/reducers/heroesReducers";
import classes from "./ChooseHeroScreen.module.css";

function ChooseHeroScreen(props) {
  let history = useHistory();
  // console.log(props);

  return (
    <main className={classes.cyberWrapper}>
      <p className={classes.cyberP} data-text="Choose your hero!">
        Create your hero!
        <hr className={classes.cyberHr} />
      </p>

      {props.heroes.length < props.maximumNumberOfHeroes && (
        <button
          className={classes.buttonCreateNewHero}
          disabled={props.heroes.length === props.maximumNumberOfHeroes}
          onClick={() => {
            props.createNewHero();
            props.setIsCreating(true);
            history.push("/create");
          }}
        >
          create new
        </button>
      )}
      {props.heroes.length === props.maximumNumberOfHeroes && (
        <div className={classes.maximumNumberOfHeroesStatusContainer}>
          <span className={classes.maximumNumberOfHeroesStatus}>
            Oops... a lot of heroes here :P delete someone
          </span>
        </div>
      )}
      <div>
        {/* {props.isCreating? "smthng is creating now": "allrght, nthng is creating"} */}
        {props.heroes.map((hero, index) => (
          <div key={index} className={classes.formGroup}>
            <label
              // className={classes.cyberName}
              className={classes.formLabel}
              htmlFor={hero.id}
            >
              {hero.name} id:{hero.id}
            </label>
            {/* <div className={classes.formControl}>
              <textarea
                id={hero.id}
                className={`${classes.formControl}${classes.cyberTextarea}`}
                name={hero.id}
              ></textarea>
            </div> */}
            <div className={classes.formControl}>
              <div
                id={hero.id}
                className={`${classes.formControl}${classes.cyberTextarea}`}
                name={hero.id}
              >
                <br />
                <div className={classes.cardStats}>
                  <span>Vitality: {hero.calculatedParameters.vitality}</span>

                  <span>Dodge: {hero.calculatedParameters.dodge}</span>

                  <span>Energy: {hero.calculatedParameters.energy}</span>
                </div>
                <br />
                <div className={classes.buttonsContainer}>
                  <button
                    disabled={hero.calculatedParameters.vitality === 0}
                    onClick={() => {
                      // alert(`${hero.name} was hit`);
                      props.hitTheHero(hero.id);
                    }}
                    className={classes.cybrBtn}
                  >
                    {hero.calculatedParameters.vitality === 0
                      ? "UNCONSCIOUS"
                      : "HIT THE HERO"}
                    <span aria-hidden>_</span>
                    <span aria-hidden className={classes.cybrBtnGlitch}>
                      {hero.calculatedParameters.vitality === 0
                        ? "UNCONSCIOUS_"
                        : "HIT THE HERO_"}
                    </span>
                    <span aria-hidden className={classes.cybrBtnTag}>
                      {/* R25 */}
                    </span>
                  </button>

                  <button
                    // disabled={hero.calculatedParameters.vitality === 0}
                    onClick={() => {
                      // alert(`${hero.name} delete`);
                      props.deleteTheHero(hero.id);
                    }}
                    className={classes.cybrBtn}
                  >
                    DELETE<span aria-hidden>_</span>
                    <span aria-hidden className={classes.cybrBtnGlitch}>
                      DELETE_
                    </span>
                    <span aria-hidden className={classes.cybrBtnTag}>
                      {/* {hero.id} */}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* <span className={classes.cyberName}>
              {hero.name} id:{hero.id}
            </span> */}
            {/* <br />
            <span>Vitality: {hero.calculatedParameters.vitality}</span>
            <br />

            <span>Dodge: {hero.calculatedParameters.dodge}</span>
            <br />

            <span>Energy: {hero.calculatedParameters.energy}</span>
            <br /> */}

            {/* <button
              disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} was hit`);
                props.hitTheHero(hero.id);
              }}
              className={classes.cybrBtn}
            >
              {hero.calculatedParameters.vitality === 0
                ? "UNCONSCIOUS"
                : "HIT THE HERO"}
              <span aria-hidden>_</span>
              <span aria-hidden className={classes.cybrBtnGlitch}>
                {hero.calculatedParameters.vitality === 0
                  ? "UNCONSCIOUS_"
                  : "HIT THE HERO_"}
              </span>
              <span aria-hidden className={classes.cybrBtnTag}>
                R25
              </span>
            </button>

            <button
              // disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} delete`);
                props.deleteTheHero(hero.id);
              }}
              className={classes.cybrBtn}
            >
              DELETE<span aria-hidden>_</span>
              <span aria-hidden className={classes.cybrBtnGlitch}>
                DELETE_
              </span>
              <span aria-hidden className={classes.cybrBtnTag}>
                {hero.id}
              </span>
            </button> */}
            {/* <button
              disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} was hit`);
                props.hitTheHero(hero.id);
              }}
            >
              Hit the hero
            </button>
            <button
              disabled={hero.calculatedParameters.vitality === 0}
              onClick={() => {
                // alert(`${hero.name} delete`);
                props.deleteTheHero(hero.id);
              }}
            >
              Delete the hero
            </button> */}
            {/* <hr /> */}
            <br />
          </div>
        ))}
      </div>

      <div></div>
    </main>
  );
}

let mapStateToProps = (state) => {
  return {
    ...state,
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
