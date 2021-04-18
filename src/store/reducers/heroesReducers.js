const KICK_ACTION_CREATOR = "KICK_ACTION_CREATOR";
const CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER = "CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER";
const SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER = "SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER";


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
  case CREATE_NEW_HERO_ACTION_TYPE_HEROES_REDUCER:
    // console.log("i'm here");
    return {
      ...state,
      heroes: [...state.heroes, {name: "Sam",
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

  case SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER:
    // console.log("i'm here");
    return {
      ...state,
      isCreating: !state.isCreating
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

export function setIsCreatingActionCreator(){
  return {
    type: SET_IS_CREATING_ACTION_TYPE_HEROES_REDUCER
  };
}

export default heroesReducer;