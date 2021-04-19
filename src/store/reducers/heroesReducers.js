import { updateObjectInArray } from "../../utils/ObjectInArrayHelper";

const HIT_THE_HERO_ACTION_CREATOR = "HIT_THE_HERO_ACTION_CREATOR";

const SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER = "SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER";

const CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER = "CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER";

// ===== delete the hero =====
const DELETE_THE_HERO_ACTION_TYPE_HEROES_REDUCER = "DELETE_THE_HERO_ACTION_TYPE_HEROES_REDUCER";

//=====stats actions=====
const INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER = "INCREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER = "DECREASE_STRENGTH_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER = "INCREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER = "DECREASE_AGILITY_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER = "INCREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER = "DECREASE_INTELLIGENCE_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER = "INCREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER = "DECREASE_CHARISMA_ACTION_TYPE_HEROES_REDUCER";

//===== skills action =====
//===strength skills===
const INCREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER = "INCREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER = "DECREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER";

//===agility skills===
const INCREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER = "INCREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER = "DECREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER = "INCREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER = "DECREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER";

//===intelligence skills===
const INCREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER = "INCREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER = "DECREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER = "INCREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER = "DECREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_HEALING_ACTION_TYPE_HEROES_REDUCER = "INCREASE_HEALING_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_HEALING_ACTION_TYPE_HEROES_REDUCER = "DECREASE_HEALING_ACTION_TYPE_HEROES_REDUCER";

//=== charisma skills===
const INCREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER = "INCREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER = "DECREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER = "INCREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER = "DECREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER = "INCREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER = "DECREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER";

const INCREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER = "INCREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER";
const DECREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER = "DECREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER";

//===== change character name =====
const CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER = "CHANGE_NAME_ACTION_TYPE_HEROES_REDUCER";

// ===== set uploaded hero =====
const SET_UPLOADED_HERO_ACTION_TYPE_HEROES_REDUCER = "SET_UPLOADED_HERO_ACTION_TYPE_HEROES_REDUCER";


const initialState = {
  initialName: "Sam Gamgee",
  initialBaseParameters: {
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
  },
  initialCalculatedParameters:{
    vitality: 3, // base = 3 + strength; action kick vitality -= 1;
    dodge: 10, // base = 10 + agility
    energy: 0 // base = agility + intelligence
  },
  levelsNames:[
    "untrained", "beginner", 
    "apprentice", "adept", 
    "expert", "master"],
  initialSkills:{
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
  initialSkillPoints:10,
  isCreating: false,
  maximumNumberOfHeroes: 5
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
  case HIT_THE_HERO_ACTION_CREATOR:
    // alert("imhere");
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        // parameterPoints: state.heroes[action.heroId-1].parameterPoints-1,
        // baseParameters: {...state.heroes[action.heroId-1].baseParameters, strength: state.heroes[action.heroId-1].baseParameters.strength+1 },
        calculatedParameters: {...state.heroes[action.heroId-1].calculatedParameters, vitality: state.heroes[action.heroId-1].calculatedParameters.vitality-1}
      })
    };

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
        name: state.initialName,
        id: state.heroes.length ? state.heroes[state.heroes.length-1].id+1 : 1,
        // id:state.heroes.length+1,
        parameterPoints: state.initialParameterPoints,
        skillPoints: state.initialSkillPoints,
        baseParameters: state.initialBaseParameters,
        calculatedParameters: state.initialCalculatedParameters,
        skills: state.initialSkills
      }
      ]
    };

  case DELETE_THE_HERO_ACTION_TYPE_HEROES_REDUCER:
    console.log("i'm here");
    return {
      ...state,
      heroes: [...state.heroes].filter(hero => hero.id !== action.heroId)
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
    
    //===== skills =====
    //==== strength ====
    // === actions with attack, pretty similar except for arithmetic operations ===
  case INCREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, strength: {...state.heroes[action.heroId-1].skills.strength, attack: state.heroes[action.heroId-1].skills.strength.attack+1} },
      })
    };

  case DECREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, strength: {...state.heroes[action.heroId-1].skills.strength, attack: state.heroes[action.heroId-1].skills.strength.attack-1} },
      })
    };

    //==== agility ====
    // === actions with stealth, pretty similar except for arithmetic operations ===
  case INCREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, agility: {...state.heroes[action.heroId-1].skills.agility, stealth: state.heroes[action.heroId-1].skills.agility.stealth+1} },
      })
    };

  case DECREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, agility: {...state.heroes[action.heroId-1].skills.agility, stealth: state.heroes[action.heroId-1].skills.agility.stealth-1} },
      })
    };

    // === actions with archery, pretty similar except for arithmetic operations ===
  case INCREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, agility: {...state.heroes[action.heroId-1].skills.agility, archery: state.heroes[action.heroId-1].skills.agility.archery+1} },
      })
    };

  case DECREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, agility: {...state.heroes[action.heroId-1].skills.agility, archery: state.heroes[action.heroId-1].skills.agility.archery-1} },
      })
    };

    //==== intelligence ====
    // === actions with educability, pretty similar except for arithmetic operations ===
  case INCREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, educability: state.heroes[action.heroId-1].skills.intelligence.educability+1} },
      })
    };

  case DECREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, educability: state.heroes[action.heroId-1].skills.intelligence.educability-1} },
      })
    };

    // === actions with survivability, pretty similar except for arithmetic operations ===
  case INCREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, survivability: state.heroes[action.heroId-1].skills.intelligence.survivability+1} },
      })
    };

  case DECREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, survivability: state.heroes[action.heroId-1].skills.intelligence.survivability-1} },
      })
    };

    // === actions with healing, pretty similar except for arithmetic operations ===
  case INCREASE_HEALING_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, healing: state.heroes[action.heroId-1].skills.intelligence.healing+1} },
      })
    };

  case DECREASE_HEALING_ACTION_TYPE_HEROES_REDUCER:
    // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, intelligence: {...state.heroes[action.heroId-1].skills.intelligence, healing: state.heroes[action.heroId-1].skills.intelligence.healing-1} },
      })
    };

    //==== charisma ====
    // === actions with intimidation, pretty similar except for arithmetic operations ===
  case INCREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, intimidation: state.heroes[action.heroId-1].skills.charisma.intimidation+1} },
      })
    };

  case DECREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, intimidation: state.heroes[action.heroId-1].skills.charisma.intimidation-1} },
      })
    };

    // === actions with insight, pretty similar except for arithmetic operations ===
  case INCREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, insight: state.heroes[action.heroId-1].skills.charisma.insight+1} },
      })
    };

  case DECREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, insight: state.heroes[action.heroId-1].skills.charisma.insight-1} },
      })
    };

    // === actions with appearance, pretty similar except for arithmetic operations ===
  case INCREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, appearance: state.heroes[action.heroId-1].skills.charisma.appearance+1} },
      })
    };

  case DECREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, appearance: state.heroes[action.heroId-1].skills.charisma.appearance-1} },
      })
    };

    // === actions with manipulation, pretty similar except for arithmetic operations ===
  case INCREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints-1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, manipulation: state.heroes[action.heroId-1].skills.charisma.manipulation+1} },
      })
    };

  case DECREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER:
  // console.log(action.heroId);
    console.log(state.heroes[action.heroId-1].parameterPoints);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        skillPoints: state.heroes[action.heroId-1].skillPoints+1,
        skills: {...state.heroes[action.heroId-1].skills, charisma: {...state.heroes[action.heroId-1].skills.charisma, manipulation: state.heroes[action.heroId-1].skills.charisma.manipulation-1} },
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

    // ===== set uploaded hero ===== 
  case SET_UPLOADED_HERO_ACTION_TYPE_HEROES_REDUCER:
    console.log(action.uploadedHero);
    return {
      ...state,
      heroes: updateObjectInArray(state.heroes, action.heroId, "id", {
        ...action.uploadedHero,
        id: action.heroId //  help to prevent duplicate heroes =)
      }
      // {
        // name: action.uploadedHero
        // baseParameters: {...state.heroes[action.heroId-1].baseParameters, charisma: state.heroes[action.heroId-1].baseParameters.charisma-1 },
      // }
      )
    };
    
    // return {
    //   ...state,
    //   heroes: [...state.heroes, {
    //     name: state.initialName,
    //     id:state.heroes.length+1,
    //     parameterPoints: state.initialParameterPoints,
    //     skillPoints: state.initialSkillPoints,
    //     baseParameters: state.initialBaseParameters,
    //     calculatedParameters: state.initialCalculatedParameters,
    //     skills: state.initialSkills
    //   }
    //   ]
    // };
    
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

export function deleteTheHeroActionCreator(heroId){
  return {
    type: DELETE_THE_HERO_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function setIsCreatingActionCreator(setting){
  return {
    type: SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER,
    setting
  };
}

export function hitTheHeroActionCreator(heroId){
  return {
    type: HIT_THE_HERO_ACTION_CREATOR,
    heroId
  };
}

// ======= stats ========
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

// ======= skills ========
// ===== strength =====
// === attack ===
export function increaseAttackActionCreator(heroId){
  return {
    type: INCREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseAttackActionCreator(heroId){
  return {
    type: DECREASE_ATTACK_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// ===== agility =====
// === stealth ===
export function increaseStealthActionCreator(heroId){
  return {
    type: INCREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseStealthActionCreator(heroId){
  return {
    type: DECREASE_STEALTH_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === archery ===
export function increaseArcheryActionCreator(heroId){
  return {
    type: INCREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseArcheryActionCreator(heroId){
  return {
    type: DECREASE_ARCHERY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}
// ===== intelligence =====
// === educability ===
export function increaseEducabilityActionCreator(heroId){
  return {
    type: INCREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseEducabilityActionCreator(heroId){
  return {
    type: DECREASE_EDUCABILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === survivability ===
export function increaseSurvivabilityActionCreator(heroId){
  return {
    type: INCREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseSurvivabilityActionCreator(heroId){
  return {
    type: DECREASE_SURVIVABILITY_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === healing ===
export function increaseHealingActionCreator(heroId){
  return {
    type: INCREASE_HEALING_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseHealingActionCreator(heroId){
  return {
    type: DECREASE_HEALING_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

//===== charisma =====
// === intimidation ===
export function increaseIntimidationActionCreator(heroId){
  return {
    type: INCREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseIntimidationActionCreator(heroId){
  return {
    type: DECREASE_INTIMIDATION_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === insight ===
export function increaseInsightActionCreator(heroId){
  return {
    type: INCREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseInsightActionCreator(heroId){
  return {
    type: DECREASE_INSIGHT_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === appearance ===
export function increaseAppearanceActionCreator(heroId){
  return {
    type: INCREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseAppearanceActionCreator(heroId){
  return {
    type: DECREASE_APPEARANCE_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

// === manipulation ===
export function increaseManipulationActionCreator(heroId){
  return {
    type: INCREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER,
    heroId
  };
}

export function decreaseManipulationActionCreator(heroId){
  return {
    type: DECREASE_MANIPULATION_ACTION_TYPE_HEROES_REDUCER,
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

//change name
export function setUploadedHeroActionCreator(heroId, uploadedHero){
  return {
    type: SET_UPLOADED_HERO_ACTION_TYPE_HEROES_REDUCER,
    heroId,
    uploadedHero
  };
}

export default heroesReducer;