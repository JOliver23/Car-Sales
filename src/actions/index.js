export const UPDATE_ORDER = "UPDATE_ORDER";

export const updateFeatures = additionalFeature => {
    console.log("function update features")
    return {
        type: UPDATE_ORDER,
        payload: {features: additionalFeature}
    }
}