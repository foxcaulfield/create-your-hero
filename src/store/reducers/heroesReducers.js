import { updateObjectInArray } from "../../utils/ObjectInArrayHelper";

// const KICK_ACTION_CREATOR = "KICK_ACTION_CREATOR";
const CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER = "CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER";
const SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER = "SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER = "INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER = "DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER = "INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER = "DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER = "INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER = "DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER = "INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER = "DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER";

const CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER = "CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER";

const initialState = {
  baseParameters: {
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
  },
  calculatedParameters:{
    vitality: 0, // base = 3 + strength; action kick vitality -= 1;
    dodge: 0, // base = 10 + agility
    energy: 0 // base = agility + intelligence
  },
  skills:{
    levelsNames:[
      "untrained", "beginner", 
      "apprentice", "adept", 
      "expert", "master"],
    strength:{
      attack: 0
    },
    agility:{
      stealth: 0,
      archery: 0
    },
    intelligence:{
      educability: 0,
      survivability: 0,
      healing: 0
    },
    charisma:{
      intimidation: 0,
      insight: 0,
      appearance: 0,
      manipulation: 0
    }
  },
  heroes:[{
    name: "Frodo",
    id: 1,
    baseParameters:{
      strength: 2,
      agility: 5,
      intelligence: 3,
      charisma: 4,
    },
    calculatedParameters:{
      vitality: 5, // base = 3 + strength; action kick vitality -= 1;
      dodge: 15, // base = 10 + agility
      energy: 8 // base = agility + intelligence
    },
    skills:{
      strength:{
        attack: 2
      },
      agility:{
        stealth: 5,
        archery: 0
      },
      intelligence:{
        educability:2,
        survivability:1,
        healing:0
      },
      charisma:{
        intimidation: 0,
        insight: 2,
        appearance: 2,
        manipulation: 0
      }
    },
  }],

  initialParameterPoints:15,
  initialSkillPoints:15,
  isCreating: false,
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
  // case KICK_ACTION_CREATOR:
  //   return {
  //     state,
  //     //  calculatedParameters.vitality - 1
  //   };

  case SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER:
    // console.log("i'm here");
    return {
      ...state,
      isCreating: action.setting
    };

  case CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER:
    // console.log("i'm here");
    return {
      ...state,
      heroes: [...state.heroes, {
        name: "Samwise Gamgee",
        id:state.heroes.length+1,
        parameterPoints: state.initialParameterPoints,
        baseParameters:{
          strength: 0,
          agility: 0,
          intelligence: 0,
          charisma: 0,
        },
        calculatedParameters:{
          vitality: 3, // base = 3 + strength; action kick vitality -= 1;
          dodge: 10, // base = 10 + agility
          energy: 0 // base = agility + intelligence
        },
        skills:{
          strength:{
            attack: 0
          },
          agility:{
            stealth: 0,
            archery: 0
          },
          intelligence:{
            educability:0,
            survivability:0,
            healing:0
          },
          charisma:{
            intimidation: 0,
            insight: 0,
            appearance: 0,
            manipulation: 0
          }
        }
      }
      ]
    };

    // ===== actions with strength, pretty similar except for arithmetic operations =====
  case INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints-1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, strength: state.heroes[action.heroId-1].baseParameters.strength+1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, vitality: state.heroes[action.heroId-1].calculatedParameters.vitality+1}
      })
    };

  case DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints+1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, strength: state.heroes[action.heroId-1].baseParameters.strength-1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, vitality: state.heroes[action.heroId-1].calculatedParameters.vitality-1}
      })
    };

    // ===== actions with agility, pretty similar except for arithmetic operations =====
  case INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints-1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, agility: state.heroes[action.heroId-1].baseParameters.agility+1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, dodge: state.heroes[action.heroId-1].calculatedParameters.dodge+1, energy: state.heroes[action.heroId-1].calculatedParameters.energy+1},
      })
    };

  case DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints+1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, agility: state.heroes[action.heroId-1].baseParameters.agility-1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, dodge: state.heroes[action.heroId-1].calculatedParameters.dodge-1, energy: state.heroes[action.heroId-1].calculatedParameters.energy-1},
      })
    };

    // ===== actions with intelligence, pretty similar except for arithmetic operations =====
  case INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints-1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, intelligence: state.heroes[action.heroId-1].baseParameters.intelligence+1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, energy: state.heroes[action.heroId-1].calculatedParameters.energy+1},
      })
    };

  case DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints+1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, intelligence: state.heroes[action.heroId-1].baseParameters.intelligence-1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, energy: state.heroes[action.heroId-1].calculatedParameters.energy-1},
      })
    };

    // ===== actions with charisma, pretty similar except for arithmetic operations =====
  case INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints-1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, charisma: state.heroes[action.heroId-1].baseParameters.charisma+1 },
      })
    };

  case DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        parameterPoints: state.heroes[action.heroId-1].parameterPoints+1,
        baseParameters: {...state.heroes[action.heroId-1].baseParameters, charisma: state.heroes[action.heroId-1].baseParameters.charisma-1 },
      })
    };

    //===== change name =====
  case CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    // console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        name: action.name
        // baseParameters: {...state.heroes[action.heroId-1].baseParameters, charisma: state.heroes[action.heroId-1].baseParameters.charisma-1 },
      })
    };
    
  default: {
    return state;
  }
  }
}

export function createNewHeroActionCreator(){
  return {
    type: CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER
  };
}

export function setIsCreatingActionCreator(setting){
  return {
    type: SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER,
    setting
  };
}

// ===== actions with strength, pretty similar except for arithmetic operations =====
export function increaseStrengthActionCreator(heroId){
  return {
    type: INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseStrengthActionCreator(heroId){
  return {
    type: DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// ===== actions with agility, pretty similar except for arithmetic operations =====
export function increaseAgilityActionCreator(heroId){
  return {
    type: INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseAgilityActionCreator(heroId){
  return {
    type: DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// ===== actions with intelligence, pretty similar except for arithmetic operations =====
export function increaseIntelligenceActionCreator(heroId){
  return {
    type: INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseIntelligenceActionCreator(heroId){
  return {
    type: DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// ===== actions with charisma, pretty similar except for arithmetic operations =====
export function increaseCharismaActionCreator(heroId){
  return {
    type: INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseCharismaActionCreator(heroId){
  return {
    type: DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

//change name
export function changeNameActionCreator(heroId, name){
  return {
    type: CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER,
    heroId,
    name
  };
}

export default heroesReducer;