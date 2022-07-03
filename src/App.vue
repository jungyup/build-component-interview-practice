<template>
    <div class="container">
        <h2 class="app-heading">Components List</h2>
        <div class="components-list">
            <div class="row">
                <CountdownTimer :is-safari="isSafari" />
            </div>
        </div>
    </div>
</template>

<script>
import CountdownTimer from "./components/CountdownTimer.vue";

export default {
    name: "App",
    components: {
        CountdownTimer,
    },
    setup() {
        // check if the browser is Safari since there is CROB error on Chrome and Firefox
        let isSafari =
            /constructor/i.test(window.HTMLElement) ||
            (function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            })(
                !window["safari"] ||
                    (typeof safari !== "undefined" &&
                        window["safari"].pushNotification)
            );

        return {
            isSafari,
        };
    },
};
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.container {
    .app-heading {
        text-align: center;
        margin-bottom: 60px;
    }
    margin-top: 60px;
    .components-list {
        display: grid;
        .row {
            border: 1px solid gray;
            border-radius: 10px;
            padding: 10px;
        }
    }
}
</style>
