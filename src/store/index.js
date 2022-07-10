import { createStore } from 'vuex';
import shoppingListModule from './modules/shoppingList';

export default createStore({
    modules: {
        shoppingList: shoppingListModule,
    },
});
