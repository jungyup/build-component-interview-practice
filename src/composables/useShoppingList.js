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

    return {
        shoppingList,
        searchResults,
        getShoppingList,
    };
}
