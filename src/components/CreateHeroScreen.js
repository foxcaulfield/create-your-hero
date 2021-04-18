import React 
//  { useEffect } 
  from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router";
import { createNewHeroActionCreator } from "../store/reducers/heroesReducers";

function CreateHeroScreen(props) {
  // let history = useHistory();
  let theHero = props.heroes[props.heroes.length-1];
  {props.isCreating? console.log("is cr true") : console.log("is cr false"); }
  // {props.isCreating? console.log("=))))))") : history.push("/choose"); }
  // {props.isCreating? console.log("=))))))x2") : return }

  // useEffect(() => {
  // console.log("props.heroes[props.heroes.length -1].name ===", props.heroes[props.heroes.length -1].name);
  console.log("props.heroes[props.heroes.length -1].name ===", props.heroes.length);

  console.log("3");

  return (
    (props.isCreating && 
    <div>
      {/* we're creating hero here. herohere =) */}
      <div>Name: {theHero.name}</div>
      <input></input>
      <br/>
      <hr/>
      <div><strong>BASIC PARAMETRS</strong></div>
      <div><em>Available points:</em></div>
      <br/>
      <div>Strength: {theHero.baseParameters.strength}<button>+</button><button>-</button></div>
      <div>Agility: {theHero.baseParameters.agility}
        <button>+</button><button>-</button></div>
      <div>Intelligence: {theHero.baseParameters.intelligence}
        <button>+</button><button>-</button></div>
      <div>Charisma: {theHero.baseParameters.charisma}
        <button>+</button><button>-</button></div>
      <hr/>
      
      <br/>
      <div><strong>STATS</strong></div>
      <div>Vitality: {theHero.calculatedParameters.vitality}</div>
      <div>Dodge:{theHero.calculatedParameters.dodge}</div>
      <div>Energy: {theHero.calculatedParameters.energy}</div>
      <hr/>
      
      <br/>
      <div><strong>SKILLS</strong></div>
      <div>Available skillpoints:</div>
      <br/>
      <div><u>STRENGTH GROUP</u></div>
      <div>Attack: {theHero.skills.strength.attack}
        <button>+</button><button>-</button></div>
        
      <br/>
      <div><u>AGILITY SKILLS</u></div>
      <div>Stealth: {theHero.skills.agility.stealth}
        <button>+</button><button>-</button></div>
      <div>Archery: {theHero.skills.agility.archery}
        <button>+</button><button>-</button></div>

      <br/>    
      <div><u>INTELLIGENCE SKILLS</u></div>
      <div>Educability: {theHero.skills.intelligence.educability}
        <button>+</button><button>-</button></div>
      <div>Survivability: {theHero.skills.intelligence.survivability}
        <button>+</button><button>-</button></div>
      <div>Healing: {theHero.skills.intelligence.healing}
        <button>+</button><button>-</button></div>

      <br/>    
      <div><u>CHARISMA SKILLS</u></div>
      <div>Intimidation: {theHero.skills.charisma.intimidation}
        <button>+</button><button>-</button></div>
      <div>Insight: {theHero.skills.charisma.insight}
        <button>+</button><button>-</button></div>
      <div>Appearance: {theHero.skills.charisma.appearance}
        <button>+</button><button>-</button></div>
      <div>Manipulation: {theHero.skills.charisma.manipulation}
        <button>+</button><button>-</button></div>
         
    </div>
    )
    
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateHeroScreen);
