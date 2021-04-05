# redux_small_project
small redux project for my own practise




// Redux terminologies
// Action Creator --> Action --> Dispatch --> Reducer --> state/store
//  Person drop form --> The form --> form reciever --> Department --> Compiled department (just an example)

// People dropping of a form (Action Creator)
//Creating a policy
const createPolicy = (name, amount) => {
  return {
    //Action (A form)
    type: "CREATE_POLICY",
    //Information/data about the Action
    payload: {
      name: name,
      amount: amount
    }
  };
};

//Deleting a policy
const deletePolicy = (name) => {
  return {
    //Action (A form)
    type: "DELETE_POLICY",
    //Information/data about the Action
    payload: {
      name: name
    }
  };
};

//Creating a claim
const createClaim = (name, amount) => {
  return {
    //Action (A form)
    type: "CREATE_CLAIM",
    //Information/data about the Action
    payload: {
      name: name,
      amount: amount
    }
  };
};

//Note:The functions createPolicy,DeletePolicy,CreateClaim are Action createors and the Object this functions are returning are Actions that must contain type key and a payload key.

//Reducer (Department)
const claimsHistory = (ListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //we care of this action (FORM)
    return [...ListOfClaims, action.payload];
  }
  //we don't care about this action (FORM!!)
  return null;
};

const Accounting = (bagOfMoney = 100, action) => {
  //Check if the Action(Form) is related to create_claim(Action-Creator)
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount;
  }
  //Check if the Action(Form) is related to create_policy(Action-Creator)
  if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  //If none of that Action is related then return default amount
  return bagOfMoney;
};

const Policies = (listOfPolicies = [], action) => {
  //if a action (Form) related to create_policy(Action)
  if (action.type === "CREATE_POLICY") {
    //we care of this action (FORM)
    return [...listOfPolicies, action.payload];
  }

  if (action.type === "DELETE_POLICY") {
    //removing the policy from the list
    return listOfPolicies.filter(
      (policy) => policy.name !== action.payload.name
    );
  }
};

const { createStore, combineReducers } = Redux;

//creating a store/state(Department)
//This will get back data and store it into store
const ourDepartment = combineReducers({
  claimsHistory: claimsHistory,
  Accounting: Accounting,
  Policies: Policies
});

const store = createStore(ourDepartment);

//Implementation of redux
const action = createPolicy("Alex", 20); //action will be a object with type and payload

//Now have to dispatch the action
//Dispatcher
//Note:Dispatcher job is to connect the Action to the right Reducer/....
store.dispatch(action);
store.dipatch(createPolicy("Roma", 60));

console.log(store);
