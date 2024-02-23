import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  fortune: '',
  fortune_error: false,
  fortune_options: [],
  fortune_translated: '',
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};