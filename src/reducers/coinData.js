export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COIN_DATA':
      return {
        asset_id_base: action.uid
      };
    default:
      return state;
  }
};
