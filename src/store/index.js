export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        if (authUser) {
            const { uid, email, displayName } = authUser;
            this.dispatch("user/updateUserState", {
                isValid: true,
                isFirstTime: true,
            });
            // state.user.valid = true;
            // state.user.firstTime = true;
        } else {
            this.dispatch("user/updateUserState", {
                isValid: false,
                isFirstTime: false,
            });
            // state.user.valid = false;
        }
    }
};