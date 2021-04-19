import React 
//  { useEffect } 
  from "react";
import { connect } from "react-redux";
import { Prompt } from "react-router";
// import { useHistory } from "react-router";
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
  
  changeNameActionCreator
} from "../store/reducers/heroesReducers";

function CreateHeroScreen(props) {
  // let history = useHistory();

  //set the proper hero
  let theHero = props.heroes[props.heroes.length-1];


  // let theHero = props.heroes[0];
  // {props.isCreating? console.log("is cr true") : console.log("is cr false"); }
  // {props.isCreating? console.log("=))))))") : history.push("/choose"); }
  // {props.isCreating? console.log("=))))))x2") : return }

  // useEffect(() => {
  // console.log("props.heroes[props.heroes.length -1].name ===", props.heroes[props.heroes.length -1].name);
  // console.log("props.heroes[props.heroes.length -1].name ===", props.heroes.length);

  // console.log("3");

  return (
    <>
      {/* FOR SETTING isCreating VALUE TO false WHEN LEAVING THE PAGE */}
      <Prompt message={()=> {
        // console.log("good bye");
        // console.log("props.isCreating", props.isCreating);
        props.setIsCreating(false);
        // console.log("props.isCreating", props.isCreating);
      } } />


      {props.isCreating ? <h1>we are creating the hero now</h1> : <h1>we cannot create the hero now, please back to main page</h1>}
      {(props.isCreating && 
      <div>
        {/* we're creating hero here. herohere =) */}
        <div>Name: {theHero.name}</div>
        <input placeholder="Enter name" onChange={(event)=> props.changeName(theHero.id, event.target.value)}></input>
        <div>id: {theHero.id}</div>
        <br/>
        <hr/>
        <div><strong>BASIC PARAMETRS</strong></div>
        <div><em>Available parameter points: {theHero.parameterPoints}</em></div>
        <br/>
        <div>Strength: {theHero.baseParameters.strength}
          <button onClick={()=> props.increaseStrength(theHero.id)}>+</button><button onClick={()=> props.decreaseStrength(theHero.id)}>-</button></div>
        <div>Agility: {theHero.baseParameters.agility}
          <button onClick={()=> props.increaseAgility(theHero.id)}>+</button><button onClick={()=> props.decreaseAgility(theHero.id)}>-</button></div>
        <div>Intelligence: {theHero.baseParameters.intelligence}
          <button onClick={()=> props.increaseIntelligence(theHero.id)}>+</button><button onClick={()=> props.decreaseIntelligence(theHero.id)}>-</button></div>
        <div>Charisma: {theHero.baseParameters.charisma}
          <button onClick={()=> props.increaseCharisma(theHero.id)}>+</button><button onClick={()=> props.decreaseCharisma(theHero.id)}>-</button></div>
        <hr/>
      
        {/* <br/> */}
        <div><strong>STATS</strong></div>
        <div>Vitality: {theHero.calculatedParameters.vitality}</div>
        <div>Dodge:{theHero.calculatedParameters.dodge}</div>
        <div>Energy: {theHero.calculatedParameters.energy}</div>
        <hr/>
      
        {/* <br/> */}
        <div><strong>SKILLS</strong></div>
        <div><em>Available skill points:{theHero.skillPoints}</em></div>
        <br/>
        <div><u>STRENGTH GROUP</u></div>
        <div>Attack: {theHero.skills.strength.attack}
          <button disabled={theHero.skills.strength.attack >= theHero.baseParameters.strength}
            onClick={()=> props.increaseAttack(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.strength.attack >= theHero.baseParameters.strength}
            onClick={()=> props.decreaseAttack(theHero.id)}
          >-</button></div>
        
        <br/>
        <div><u>AGILITY SKILLS</u></div>
        <div>Stealth: {theHero.skills.agility.stealth}
          <button disabled={theHero.skills.agility.stealth >= theHero.baseParameters.agility}
            onClick={()=> props.increaseStealth(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.agility.stealth >= theHero.baseParameters.agility}
            onClick={()=> props.decreaseStealth(theHero.id)}
          >-</button></div>

        <div>Archery: {theHero.skills.agility.archery}
          <button disabled={theHero.skills.agility.archery >= theHero.baseParameters.agility}
            onClick={()=> props.increaseArchery(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.agility.archery >= theHero.baseParameters.agility}
            onClick={()=> props.decreaseArchery(theHero.id)}
          >-</button></div>

        <br/>    
        <div><u>INTELLIGENCE SKILLS</u></div>
        <div>Educability: {theHero.skills.intelligence.educability}
          <button disabled={theHero.skills.intelligence.educability >= theHero.baseParameters.intelligence}
            onClick={()=> props.increaseEducability(theHero.id)}
          
          >+</button>
          <button disabled={theHero.skills.intelligence.educability >= theHero.baseParameters.intelligence}
            onClick={()=> props.decreaseEducability(theHero.id)}
          >-</button></div>

        <div>Survivability: {theHero.skills.intelligence.survivability}
          <button disabled={theHero.skills.intelligence.survivability >= theHero.baseParameters.intelligence}
            onClick={()=> props.increaseSurvivability(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.intelligence.survivability >= theHero.baseParameters.intelligence}
            onClick={()=> props.decreaseSurvivability(theHero.id)}
          >-</button></div>

        <div>Healing: {theHero.skills.intelligence.healing}
          <button disabled={theHero.skills.intelligence.healing >= theHero.baseParameters.intelligence}
            onClick={()=> props.increaseHealing(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.intelligence.healing >= theHero.baseParameters.intelligence}
            onClick={()=> props.decreaseHealing(theHero.id)}
          >-</button></div>

        <br/>    
        <div><u>CHARISMA SKILLS</u></div>
        <div>Intimidation: {theHero.skills.charisma.intimidation}
          <button disabled={theHero.skills.charisma.intimidation >= theHero.baseParameters.charisma}
            onClick={()=> props.increaseIntimidation(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.intimidation >= theHero.baseParameters.charisma}
            onClick={()=> props.decreaseIntimidation(theHero.id)}
          >-</button></div>

        <div>Insight: {theHero.skills.charisma.insight}
          <button disabled={theHero.skills.charisma.insight >= theHero.baseParameters.charisma}
            onClick={()=> props.increaseInsight(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.insight >= theHero.baseParameters.charisma}
            onClick={()=> props.decreaseInsight(theHero.id)}
          >-</button></div>

        <div>Appearance: {theHero.skills.charisma.appearance}
          <button disabled={theHero.skills.charisma.appearance >= theHero.baseParameters.charisma}
            onClick={()=> props.increaseAppearance(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.appearance >= theHero.baseParameters.charisma}
            onClick={()=> props.decreaseAppearance(theHero.id)}
          >-</button></div>

        <div>Manipulation: {theHero.skills.charisma.manipulation}
          <button disabled={theHero.skills.charisma.manipulation >= theHero.baseParameters.charisma}
            onClick={()=> props.increaseManipulation(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.manipulation >= theHero.baseParameters.charisma}
            onClick={()=> props.decreaseManipulation(theHero.id)}
          >-</button></div>
         
      </div>
      )}
    </>
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateHeroScreen);
