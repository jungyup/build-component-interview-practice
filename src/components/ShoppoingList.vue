<template>
    <div class="shopping-list-container">
        <h3 class="shopping-list-heading">My Shopping List</h3>
        <input
            type="text"
            class="search-bar"
            v-model="searchText"
            @keyup="searchItem(searchText)"
            placeholder="Search Item"
        />
        <div class="search-result">
            <ul class="search-list">
                <li v-for="(item, index) in searchResults" :key="index" class="search-item">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useShoppingList } from '@/composables/useShoppingList';
export default {
    nam: 'ShoppingList',
    setup() {
        let { searchResults, getShoppingList } = useShoppingList();
        let searchText = ref('');

        function searchItem(text) {
            getShoppingList(text);
        }

        return {
            searchResults,
            searchText,
            searchItem,
        };
    },
};
</script>

<style></style>
