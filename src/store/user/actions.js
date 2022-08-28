export default {
    fetchUserState: async (state) => {
        // make request
        
        state.valid = false;
        state.firstTime = false;
        return { isValid: false, isFirstTime: false };
    },
    updateUserState: (context, data) => {
        context.commit('setIsValidUser', data.isValid);
        context.commit('setIsFirstTimeUser', data.isFirstTime);
    }
}