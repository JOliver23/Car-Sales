export const ADD_FT = "ADD_TO_LEFT";
export const REMOVE_FT = "RETURN_TO_RIGHT";
export const NEW_TOTAL = 'ADD_TOTALS';
export const MAYBE = 'MAYBE';

export const updateFeatures = additionalFeature => {
    console.log("function update features")
    return {
        type: ADD_FT,
        payload: additionalFeature
    }
}