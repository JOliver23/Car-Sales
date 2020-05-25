import { ADD_FT, REMOVE_FT, NEW_TOTAL } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const appReducer = (state = initialState, action) => {
    console.log("state", state, "action", action);
    
    switch (action.type) {
        case ADD_FT:
            console.log("state from ADD_FT", state.car)
            //how do i get the payload into state.car.features array? works, now stay in state for adding multy ft?
            return {
                ...state,
               car: {
                 ...state.car,
                 features: {
                   ...state.features,
                   features: action.payload
                 }
               }
            };

        case REMOVE_FT:
          return {
            state
          };

        case NEW_TOTAL:
          return {
            state
            //{state.price + state.additionalPrice}
          };

        case "MAYBE":
          return {
            state
          }
        default:
            return state;
    }
}