<template>
    <div class="shopping-list-container">
        <h3 class="shopping-list-heading">My Shopping List</h3>
        <input
            type="text"
            class="search-bar"
            v-model="searchText"
            @keyup="debounceSearchItem(searchText)"
            placeholder="Search Item"
        />
        <div class="search-result">
            <ul class="search-list">
                <li
                    v-for="(item, index) in searchResults"
                    :key="index"
                    @click="addItemToShoppingList(item)"
                    class="search-item"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
        <div v-if="shoppingList.length > 0" class="shopping-cart">
            <h4>Shopping Cart List</h4>
            <ul class="cart-list">
                <li
                    v-for="(shoppingItem, index) in shoppingList"
                    :key="index"
                    :class="[
                        'cart-item',
                        {
                            checkedCartItem: addedCartItems.some(
                                (item) => item === index
                            ),
                        },
                    ]"
                >
                    <input
                        type="checkbox"
                        class="cart-item-checkbox"
                        :id="`cartItemCheckbox-${index}`"
                        value="shoppingItem"
                        @click="toggleCartItem(index)"
                    />
                    <label
                        :class="[
                            'cart-item-checkbox-label',
                            {
                                checkedCartItemLabel: addedCartItems.some(
                                    (item) => item === index
                                ),
                            },
                        ]"
                        :for="`cartItemCheckbox-${index}`"
                    >
                        {{ shoppingItem }}
                    </label>
                    <button
                        type="button"
                        class="btn btn-secondary cart-item-delete-btn"
                        @click="deleteCartItem(index)"
                    >
                        X
                    </button>
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
        let {
            shoppingList,
            searchResults,
            getShoppingList,
            addToShoppingList,
            removeFromShoppingList,
        } = useShoppingList();

        let searchText = ref('');
        let addedCartItems = ref([]);

        function searchItem(text) {
            getShoppingList(text);
        }

        function addItemToShoppingList(item) {
            addToShoppingList(item);
        }

        function deleteCartItem(index) {
            removeFromShoppingList(index);
        }

        function toggleCartItem(index) {
            if (addedCartItems.value.indexOf(index) !== -1) {
                addedCartItems.value.splice(
                    addedCartItems.value.indexOf(index),
                    1
                );
            } else {
                addedCartItems.value.push(index);
            }
        }

        const debounce = (func, timeout = 500) => {
            let timeoutId;

            return (...args) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func(...args);
                }, timeout);
            };
        };

        const debounceSearchItem = debounce(searchItem);

        return {
            shoppingList,
            searchResults,
            searchText,
            addedCartItems,
            addItemToShoppingList,
            deleteCartItem,
            toggleCartItem,
            debounceSearchItem,
        };
    },
};
</script>

<style lang="scss" scoped>
.shopping-list-container {
    text-align: center;
    .shopping-list-heading {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .search-result {
        .search-list {
            .search-item {
                list-style: none;
                text-decoration: underline;
                cursor: pointer;
                margin: 10px 30px 0 0;
            }
        }
    }

    .shopping-cart {
        .cart-list {
            .cart-item {
                width: 20%;
                display: flex;
                justify-content: space-between;
                list-style: none;
                margin: auto;
                margin-top: 15px;

                .cart-item-checkbox {
                    margin-right: 15px;
                }

                .cart-item-delete-btn {
                    margin-left: 15px;
                    font-size: 10px;
                }
            }

            .checkedCartItem {
                opacity: 0.5;

                .checkedCartItemLabel {
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>
