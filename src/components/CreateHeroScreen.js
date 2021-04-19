import React 
, { useState }//  { useEffect } 
  from "react";
import { connect } from "react-redux";
import { Prompt, useHistory } from "react-router";
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
  
  changeNameActionCreator,

  setUploadedHeroActionCreator

} from "../store/reducers/heroesReducers";

import DownloaderUploader from "../utils/DownloadUploadHero";

function CreateHeroScreen(props) {
  let history = useHistory();

  //set the proper hero
  let theHero = props.heroes[props.heroes.length-1];

  const [isNameEditing, setIsNameEditing] = useState(false);

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
      <button onClick={() => { history.push("/choose"); }}>Save and back to main</button>
      <hr/>
      {props.isCreating ? <div><strong>we are creating the hero now</strong><br/><span>spend available skillpoints to improve your hero</span><hr/></div> : <h1>we cannot create the hero now, please back to main page</h1>}
      {(props.isCreating && 
      <div>
        <DownloaderUploader hero={theHero} handleSetUploadedHero={props.setUploadedHero}/>
        {/* we're creating hero here. herohere =) */}
        <hr/><hr/><hr/>
        <div>Name: 
          {!isNameEditing && theHero.name} 
          {isNameEditing && 
          <input placeholder={theHero.name} 
            value={theHero.name} 
            onChange={(event)=> props.changeName(theHero.id, event.target.value)} 
            onBlur={(event)=> {theHero.name ? props.changeName(theHero.id, event.target.value) : props.changeName(theHero.id, "Meriadoc Brandybuck"); setIsNameEditing(false);}}></input>}
          <br/>
          {!isNameEditing && <button onClick={()=> setIsNameEditing(true)}>Edit</button>}
          {isNameEditing && theHero.name && <button onClick={()=> setIsNameEditing(false)}>Save</button>}
        </div>
        
        <div>id: {theHero.id}</div>
        <hr/>
        <div><strong>BASIC PARAMETRS</strong></div>
        <div><em>Available parameter points: {theHero.parameterPoints}</em></div>
        <br/>
        {/* <button onClick={()=> props.setUploadedHero(theHero.id, "Man")}>Change it</button> */}
        <div>Strength: {theHero.baseParameters.strength}
          <button onClick={()=> props.increaseStrength(theHero.id)}
            disabled={theHero.parameterPoints === 0}
          >+</button>

          <button onClick={()=> props.decreaseStrength(theHero.id)}
            disabled={theHero.baseParameters.strength === 0}
          >-</button></div>


        <div>Agility: {theHero.baseParameters.agility}
          <button onClick={()=> props.increaseAgility(theHero.id)}
            disabled={theHero.parameterPoints === 0}
          >+</button>

          <button onClick={()=> props.decreaseAgility(theHero.id)}
            disabled={theHero.baseParameters.agility === 0}
          >-</button></div>


        <div>Intelligence: {theHero.baseParameters.intelligence}
          <button onClick={()=> props.increaseIntelligence(theHero.id)}
            disabled={theHero.parameterPoints === 0}
          >+</button>

          <button onClick={()=> props.decreaseIntelligence(theHero.id)}
            disabled={theHero.baseParameters.intelligence === 0}
          >-</button></div>


        <div>Charisma: {theHero.baseParameters.charisma}
          <button onClick={()=> props.increaseCharisma(theHero.id)}
            disabled={theHero.parameterPoints === 0}
          >+</button>

          <button onClick={()=> props.decreaseCharisma(theHero.id)}
            disabled={theHero.baseParameters.charisma === 0}
          >-</button></div>
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
        <div><u>STRENGTH SKILLS</u></div>
        <div>Attack: {theHero.skills.strength.attack} 
          <button disabled={theHero.skills.strength.attack >= theHero.baseParameters.strength || theHero.skillPoints === 0 || theHero.skills.strength.attack >=props.levelsNames.length-1}
            onClick={()=> props.increaseAttack(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.strength.attack === 0}
            onClick={()=> props.decreaseAttack(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.strength.attack]}
        </div>
        

        <br/>
        <div><u>AGILITY SKILLS</u></div>
        <div>Stealth: {theHero.skills.agility.stealth} 
          <button disabled={theHero.skills.agility.stealth >= theHero.baseParameters.agility || theHero.skillPoints === 0 || theHero.skills.agility.stealth >=props.levelsNames.length-1}
            onClick={()=> props.increaseStealth(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.agility.stealth === 0}
            onClick={()=> props.decreaseStealth(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.agility.stealth]}
        </div>


        <div>Archery: {theHero.skills.agility.archery} 
          <button disabled={theHero.skills.agility.archery >= theHero.baseParameters.agility || theHero.skillPoints === 0 || theHero.skills.agility.archery >=props.levelsNames.length-1}
            onClick={()=> props.increaseArchery(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.agility.archery === 0}
            onClick={()=> props.decreaseArchery(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.agility.archery]}
        </div>


        <br/>    
        <div><u>INTELLIGENCE SKILLS</u></div>
        <div>Educability: {theHero.skills.intelligence.educability} 
          <button disabled={theHero.skills.intelligence.educability >= theHero.baseParameters.intelligence || theHero.skillPoints === 0 || theHero.skills.intelligence.educability >=props.levelsNames.length-1}
            onClick={()=> props.increaseEducability(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.intelligence.educability === 0}
            onClick={()=> props.decreaseEducability(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.intelligence.educability]}
        </div>


        <div>Survivability: {theHero.skills.intelligence.survivability} 
          <button disabled={theHero.skills.intelligence.survivability >= theHero.baseParameters.intelligence || theHero.skillPoints === 0 || theHero.skills.intelligence.survivability >=props.levelsNames.length-1}
            onClick={()=> props.increaseSurvivability(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.intelligence.survivability === 0}
            onClick={()=> props.decreaseSurvivability(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.intelligence.survivability]}
        </div>


        <div>Healing: {theHero.skills.intelligence.healing} 
          <button disabled={theHero.skills.intelligence.healing >= theHero.baseParameters.intelligence || theHero.skillPoints === 0 || theHero.skills.intelligence.healing >=props.levelsNames.length-1}
            onClick={()=> props.increaseHealing(theHero.id)}
          >+</button>

          <button disabled={theHero.skills.intelligence.healing === 0}
            onClick={()=> props.decreaseHealing(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.intelligence.healing]}
        </div>


        <br/>    
        <div><u>CHARISMA SKILLS</u></div>
        <div>Intimidation: {theHero.skills.charisma.intimidation} 
          <button disabled={theHero.skills.charisma.intimidation >= theHero.baseParameters.charisma || theHero.skillPoints === 0 || theHero.skills.charisma.intimidation >=props.levelsNames.length-1}
            onClick={()=> props.increaseIntimidation(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.intimidation === 0}
            onClick={()=> props.decreaseIntimidation(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.charisma.intimidation]}
        </div>


        <div>Insight: {theHero.skills.charisma.insight} 
          <button disabled={theHero.skills.charisma.insight >= theHero.baseParameters.charisma || theHero.skillPoints === 0 || theHero.skills.charisma.insight >=props.levelsNames.length-1}
            onClick={()=> props.increaseInsight(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.insight === 0}
            onClick={()=> props.decreaseInsight(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.charisma.insight]}
        </div>


        <div>Appearance: {theHero.skills.charisma.appearance} 
          <button disabled={theHero.skills.charisma.appearance >= theHero.baseParameters.charisma || theHero.skillPoints === 0 || theHero.skills.charisma.appearance >=props.levelsNames.length-1}
            onClick={()=> props.increaseAppearance(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.appearance === 0}
            onClick={()=> props.decreaseAppearance(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.charisma.appearance]}
        </div>


        <div>Manipulation: {theHero.skills.charisma.manipulation} 
          <button disabled={theHero.skills.charisma.manipulation >= theHero.baseParameters.charisma || theHero.skillPoints === 0 || theHero.skills.charisma.manipulation >=props.levelsNames.length-1}
            onClick={()=> props.increaseManipulation(theHero.id)}
          >+</button>
          <button disabled={theHero.skills.charisma.manipulation === 0}
            onClick={()=> props.decreaseManipulation(theHero.id)}
          >-</button>
          {props.levelsNames[theHero.skills.charisma.manipulation]}
        </div>
         
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

    setUploadedHero: (heroId, uploadedHero) => {
      dispatch(setUploadedHeroActionCreator(heroId, uploadedHero));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateHeroScreen);
