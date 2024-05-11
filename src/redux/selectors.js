export const selectCampers = (state) => state.campers.campers.adverts;

export const selectFavoriteCampers = (state) => state.campers.favorites;
export const selectIsLoading = (state) => state.campers.adverts.isLoading;
export const selectError = (state) => state.campers.adverts.error;