import React, { useState } from "react";
import { connect } from "react-redux";
import { Prompt, useHistory } from "react-router";

import {
  createNewHeroActionCreator,
  setIsCreatingActionCreator,
  increaseStrengthActionCreator,
  decreaseStrengthActionCreator,
  increaseAgilityActionCreator,
  decreaseAgilityActionCreator,
  increaseIntelligenceActionCreator,
  decreaseIntelligenceActionCreator,
  increaseCharismaActionCreator,
  decreaseCharismaActionCreator,
  increaseAttackActionCreator,
  decreaseAttackActionCreator,
  increaseStealthActionCreator,
  decreaseStealthActionCreator,
  increaseArcheryActionCreator,
  decreaseArcheryActionCreator,
  increaseEducabilityActionCreator,
  decreaseEducabilityActionCreator,
  increaseSurvivabilityActionCreator,
  decreaseSurvivabilityActionCreator,
  increaseHealingActionCreator,
  decreaseHealingActionCreator,
  increaseIntimidationActionCreator,
  decreaseIntimidationActionCreator,
  increaseInsightActionCreator,
  decreaseInsightActionCreator,
  increaseAppearanceActionCreator,
  decreaseAppearanceActionCreator,
  increaseManipulationActionCreator,
  decreaseManipulationActionCreator,
  changeNameActionCreator,
  setUploadedHeroActionCreator,
} from "../store/reducers/heroesReducers";

import DownloaderUploader from "../utils/DownloadUploadHero";
import classes from "./CreateHeroScreen.module.css";

function CreateHeroScreen(props) {
  let history = useHistory();

  //set the proper hero
  let theHero = props.heroes[props.heroes.length - 1];

  //set isNameEditing toggler
  const [isNameEditing, setIsNameEditing] = useState(false);

  return (
    <div className={classes.createHeroWrapper}>
      {/* for setting isCreating value to false when leaving the page */}
      <Prompt
        message={() => {
          props.setIsCreating(false);
        }}
      />
      {/* 
      <button
        // className={classes.buttonOptionalCyan}
        className={classes.buttonGlowing}
        onClick={() => {
          history.push("/choose");
        }}
      >
        Save and back to main
      </button> */}
      <a
        className={classes.buttonGlowing}
        onClick={() => {
          history.push("/choose");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Save and back to main page
      </a>
      {props.isCreating ? (
        <div className={classes.info}>
          <span>spend available skillpoints to improve your hero</span>
          <hr />
        </div>
      ) : (
        <h1>we can&apos;t create a hero now, please back to main page</h1>
      )}

      {props.isCreating && (
        <div className={classes.interfaceWrapper}>
          {/* dowloader component */}
          <DownloaderUploader
            hero={theHero}
            handleSetUploadedHero={props.setUploadedHero}
          />

          <label
            // className={classes.cyberName}
            className={classes.formLabel}
            htmlFor={theHero.id}
          >
            {/* {theHero.name}  */}
            id:{theHero.id}
          </label>
          <div className={classes.mainPanel} id={theHero.id} name={theHero.id}>
            <div className={classes.leftSideOfPanel}>
              <div>
                {/* Name: */}

                {!isNameEditing && (
                  <input
                    value={theHero.name}
                    className={classes.cyberName}
                  ></input>
                )}
                {/* {!isNameEditing && theHero.name} */}
                {/* <br /> */}
                {isNameEditing && (
                  <input
                    autoFocus={true}
                    className={classes.cyberInput}
                    maxLength="15"
                    placeholder={theHero.name}
                    value={theHero.name}
                    onChange={(event) =>
                      props.changeName(theHero.id, event.target.value)
                    }
                    onBlur={(event) => {
                      theHero.name
                        ? props.changeName(theHero.id, event.target.value)
                        : props.changeName(theHero.id, "Meriadoc");
                      setIsNameEditing(false);
                    }}
                  ></input>
                )}
                <br />
                {!isNameEditing && (
                  <button
                    className={classes.buttonOptionalRed}
                    onClick={() => setIsNameEditing(true)}
                  >
                    Edit name
                  </button>
                )}
                {isNameEditing && theHero.name && (
                  <button
                    className={classes.buttonOptionalRed}
                    onClick={() => setIsNameEditing(false)}
                  >
                    Save
                  </button>
                )}
              </div>

              {/* <div>id: {theHero.id}</div> */}
              <div className={classes.fontParametersWrapperLeft}>
                <div>
                  <strong className={classes.mainLineText}>
                    BASIC PARAMETERS
                  </strong>
                </div>
                <div>
                  Available parameter points:{" "}
                  <span className={classes.valueOfStat}>
                    {theHero.parameterPoints}
                  </span>
                </div>
                <br />
                {/* <a className={classes.addHorizontal}>
                    <span className={classes.text}>+</span>
                  </a>
                  <a className={classes.cancelVertical}>
                    <span className={classes.text}>-</span>
                  </a> */}
                <div>
                  <button
                    className={classes.addHorizontal}
                    onClick={() => props.increaseStrength(theHero.id)}
                    disabled={theHero.parameterPoints === 0}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    onClick={() => props.decreaseStrength(theHero.id)}
                    disabled={theHero.baseParameters.strength === 0}
                  >
                    <span>UNDO</span>
                  </button>
                  Strength:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {theHero.baseParameters.strength}
                  </span>
                </div>

                <div>
                  <button
                    className={classes.addHorizontal}
                    onClick={() => props.increaseAgility(theHero.id)}
                    disabled={theHero.parameterPoints === 0}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    onClick={() => props.decreaseAgility(theHero.id)}
                    disabled={theHero.baseParameters.agility === 0}
                  >
                    <span>UNDO</span>
                  </button>
                  Agility:
                  <span className={classes.valueOfStat}>
                    {" "}
                    {theHero.baseParameters.agility}
                  </span>
                </div>

                <div>
                  <button
                    className={classes.addHorizontal}
                    onClick={() => props.increaseIntelligence(theHero.id)}
                    disabled={theHero.parameterPoints === 0}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    onClick={() => props.decreaseIntelligence(theHero.id)}
                    disabled={theHero.baseParameters.intelligence === 0}
                  >
                    <span>UNDO</span>
                  </button>
                  Intelligence:{" "}
                  <span className={classes.valueOfStat}>
                    {theHero.baseParameters.intelligence}
                  </span>
                </div>

                <div>
                  <button
                    className={classes.addHorizontal}
                    onClick={() => props.increaseCharisma(theHero.id)}
                    disabled={theHero.parameterPoints === 0}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    onClick={() => props.decreaseCharisma(theHero.id)}
                    disabled={theHero.baseParameters.charisma === 0}
                  >
                    <span>UNDO</span>
                  </button>
                  Charisma:{" "}
                  <span className={classes.valueOfStat}>
                    {theHero.baseParameters.charisma}
                  </span>
                </div>
                <br />
                <div>
                  <strong className={classes.mainLineText}>STATS</strong>
                </div>
                <div>
                  Vitality:{" "}
                  <span className={classes.valueOfStat}>
                    {theHero.calculatedParameters.vitality}
                  </span>
                </div>
                <div>
                  Dodge:
                  <span className={classes.valueOfStat}>
                    {theHero.calculatedParameters.dodge}
                  </span>
                </div>
                <div>
                  Energy:{" "}
                  <span className={classes.valueOfStat}>
                    {theHero.calculatedParameters.energy}
                  </span>
                </div>
              </div>
            </div>

            <div className={classes.fontParametersWrapperRight}>
              <div className={classes.rightSideOfPanel}>
                <div>
                  <strong className={classes.mainLineText}>SKILLS</strong>
                </div>
                <div>
                  Available skill points:
                  <span className={classes.valueOfStat}>
                    {theHero.skillPoints}
                  </span>
                </div>

                <br />
                <div>
                  <u>STRENGTH SKILLS</u>
                </div>
                <div>
                  Attack:{" "}
                  <span className={classes.valueOfStat}>
                    {props.levelsNames[theHero.skills.strength.attack]}
                  </span>
                  ({theHero.skills.strength.attack})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.strength.attack >=
                        theHero.baseParameters.strength ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.strength.attack >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseAttack(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.strength.attack === 0}
                    onClick={() => props.decreaseAttack(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <br />
                <div>
                  <u>AGILITY SKILLS</u>
                </div>
                <div>
                  Stealth:{" "}
                  <span className={classes.valueOfStat}>
                    {props.levelsNames[theHero.skills.agility.stealth]}
                  </span>
                  ({theHero.skills.agility.stealth})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.agility.stealth >=
                        theHero.baseParameters.agility ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.agility.stealth >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseStealth(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.agility.stealth === 0}
                    onClick={() => props.decreaseStealth(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Archery:
                  <span className={classes.valueOfStat}>
                    {props.levelsNames[theHero.skills.agility.archery]}
                  </span>
                  ({theHero.skills.agility.archery})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.agility.archery >=
                        theHero.baseParameters.agility ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.agility.archery >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseArchery(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.agility.archery === 0}
                    onClick={() => props.decreaseArchery(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <br />
                <div>
                  <u>INTELLIGENCE SKILLS</u>
                </div>
                <div>
                  Educability:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {props.levelsNames[theHero.skills.intelligence.educability]}
                  </span>
                  ({theHero.skills.intelligence.educability})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.intelligence.educability >=
                        theHero.baseParameters.intelligence ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.intelligence.educability >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseEducability(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.intelligence.educability === 0}
                    onClick={() => props.decreaseEducability(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Survivability:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {
                      props.levelsNames[
                        theHero.skills.intelligence.survivability
                      ]
                    }
                  </span>
                  ({theHero.skills.intelligence.survivability})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.intelligence.survivability >=
                        theHero.baseParameters.intelligence ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.intelligence.survivability >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseSurvivability(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.intelligence.survivability === 0}
                    onClick={() => props.decreaseSurvivability(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Healing:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {props.levelsNames[theHero.skills.intelligence.healing]}
                  </span>
                  ({theHero.skills.intelligence.healing})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.intelligence.healing >=
                        theHero.baseParameters.intelligence ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.intelligence.healing >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseHealing(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.intelligence.healing === 0}
                    onClick={() => props.decreaseHealing(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <br />
                <div>
                  <u>CHARISMA SKILLS</u>
                </div>
                <div>
                  Intimidation:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {props.levelsNames[theHero.skills.charisma.intimidation]}
                  </span>
                  ({theHero.skills.charisma.intimidation})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.charisma.intimidation >=
                        theHero.baseParameters.charisma ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.charisma.intimidation >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseIntimidation(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.charisma.intimidation === 0}
                    onClick={() => props.decreaseIntimidation(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Insight:{" "}
                  <span className={classes.valueOfStat}>
                    {props.levelsNames[theHero.skills.charisma.insight]}
                  </span>
                  ({theHero.skills.charisma.insight})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.charisma.insight >=
                        theHero.baseParameters.charisma ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.charisma.insight >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseInsight(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.charisma.insight === 0}
                    onClick={() => props.decreaseInsight(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Appearance:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {props.levelsNames[theHero.skills.charisma.appearance]}
                  </span>
                  ({theHero.skills.charisma.appearance})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.charisma.appearance >=
                        theHero.baseParameters.charisma ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.charisma.appearance >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseAppearance(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.charisma.appearance === 0}
                    onClick={() => props.decreaseAppearance(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>

                <div>
                  Manipulation:{" "}
                  <span className={classes.valueOfStat}>
                    {" "}
                    {props.levelsNames[theHero.skills.charisma.manipulation]}
                  </span>
                  ({theHero.skills.charisma.manipulation})
                  <button
                    className={classes.addHorizontal}
                    disabled={
                      theHero.skills.charisma.manipulation >=
                        theHero.baseParameters.charisma ||
                      theHero.skillPoints === 0 ||
                      theHero.skills.charisma.manipulation >=
                        props.levelsNames.length - 1
                    }
                    onClick={() => props.increaseManipulation(theHero.id)}
                  >
                    <span>ADD</span>
                  </button>
                  <button
                    className={classes.cancelVertical}
                    disabled={theHero.skills.charisma.manipulation === 0}
                    onClick={() => props.decreaseManipulation(theHero.id)}
                  >
                    <span>UNDO</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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
    setIsCreating: (setting) => {
      dispatch(setIsCreatingActionCreator(setting));
    },

    increaseStrength: (heroId) => {
      dispatch(increaseStrengthActionCreator(heroId));
    },
    decreaseStrength: (heroId) => {
      dispatch(decreaseStrengthActionCreator(heroId));
    },

    increaseAgility: (heroId) => {
      dispatch(increaseAgilityActionCreator(heroId));
    },
    decreaseAgility: (heroId) => {
      dispatch(decreaseAgilityActionCreator(heroId));
    },

    increaseIntelligence: (heroId) => {
      dispatch(increaseIntelligenceActionCreator(heroId));
    },
    decreaseIntelligence: (heroId) => {
      dispatch(decreaseIntelligenceActionCreator(heroId));
    },

    increaseCharisma: (heroId) => {
      dispatch(increaseCharismaActionCreator(heroId));
    },
    decreaseCharisma: (heroId) => {
      dispatch(decreaseCharismaActionCreator(heroId));
    },

    increaseAttack: (heroId) => {
      dispatch(increaseAttackActionCreator(heroId));
    },
    decreaseAttack: (heroId) => {
      dispatch(decreaseAttackActionCreator(heroId));
    },

    increaseStealth: (heroId) => {
      dispatch(increaseStealthActionCreator(heroId));
    },
    decreaseStealth: (heroId) => {
      dispatch(decreaseStealthActionCreator(heroId));
    },

    increaseArchery: (heroId) => {
      dispatch(increaseArcheryActionCreator(heroId));
    },
    decreaseArchery: (heroId) => {
      dispatch(decreaseArcheryActionCreator(heroId));
    },

    increaseEducability: (heroId) => {
      dispatch(increaseEducabilityActionCreator(heroId));
    },
    decreaseEducability: (heroId) => {
      dispatch(decreaseEducabilityActionCreator(heroId));
    },

    increaseSurvivability: (heroId) => {
      dispatch(increaseSurvivabilityActionCreator(heroId));
    },
    decreaseSurvivability: (heroId) => {
      dispatch(decreaseSurvivabilityActionCreator(heroId));
    },

    increaseHealing: (heroId) => {
      dispatch(increaseHealingActionCreator(heroId));
    },
    decreaseHealing: (heroId) => {
      dispatch(decreaseHealingActionCreator(heroId));
    },

    increaseIntimidation: (heroId) => {
      dispatch(increaseIntimidationActionCreator(heroId));
    },
    decreaseIntimidation: (heroId) => {
      dispatch(decreaseIntimidationActionCreator(heroId));
    },

    increaseInsight: (heroId) => {
      dispatch(increaseInsightActionCreator(heroId));
    },
    decreaseInsight: (heroId) => {
      dispatch(decreaseInsightActionCreator(heroId));
    },

    increaseAppearance: (heroId) => {
      dispatch(increaseAppearanceActionCreator(heroId));
    },
    decreaseAppearance: (heroId) => {
      dispatch(decreaseAppearanceActionCreator(heroId));
    },

    increaseManipulation: (heroId) => {
      dispatch(increaseManipulationActionCreator(heroId));
    },
    decreaseManipulation: (heroId) => {
      dispatch(decreaseManipulationActionCreator(heroId));
    },

    changeName: (heroId, name) => {
      dispatch(changeNameActionCreator(heroId, name));
    },

    setUploadedHero: (heroId, uploadedHero) => {
      dispatch(setUploadedHeroActionCreator(heroId, uploadedHero));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateHeroScreen);
