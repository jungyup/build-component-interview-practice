import { computed } from 'vue';
import { useStore } from 'vuex';

export function useShoppingList() {
    let store = useStore();

    let shoppingList = computed(() => {
        return store.getters['shoppingList/shoppingList'];
    });

    let searchResults = computed(() => {
        return store.getters['shoppingList/searchResults'];
    });

    async function getShoppingList(keyword) {
        await store.dispatch('shoppingList/getShoppingList', keyword);
    }

    function addToShoppingList(item) {
        store.dispatch('shoppingList/addToShoppingList', item);
    }

    function removeFromShoppingList(index) {
        store.dispatch('shoppingList/removeFromShoppingList', index);
    }

    return {
        shoppingList,
        searchResults,
        getShoppingList,
        addToShoppingList,
        removeFromShoppingList,
    };
}
