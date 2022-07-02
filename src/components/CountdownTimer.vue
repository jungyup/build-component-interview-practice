<template>
    <div class="countdown-container">
        <h3 class="countdown-heading">Countdown Timer</h3>
        <div class="timer-wrapper">
            <input
                type="number"
                placeholder="HH"
                class="time-input"
                v-model="hours"
                min="0"
                :aria-label="`${hours} hours`"
            />:
            <input
                type="number"
                placeholder="MM"
                class="time-input"
                v-model="minutes"
                min="0"
                :max="60"
                :aria-label="`${minutes} minutes`"
            />:
            <input
                type="number"
                placeholder="SS"
                class="time-input"
                v-model="seconds"
                :aria-label="`${seconds} seconds remaining`"
            />
            <div class="button-wrapper">
                <button
                    @click="startTime(hours, minutes, seconds)"
                    class="timer-toggle"
                >
                    Start
                </button>
                <button class="reset-timer">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "CountdownTimer",
    setup() {
        let hours = ref(null);
        let minutes = ref(null);
        let seconds = ref(null);
        let remainingTime = ref(null);

        console.log(hours);

        function startTime(timerHours, timerMinutes, timerSeconds) {
            console.log(timerHours, timerMinutes, timerSeconds);
        }

        return {
            hours,
            minutes,
            seconds,
            remainingTime,
            startTime,
        };
    },
};
</script>

<style lang="scss">
.countdown-container {
    .countdown-heading {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
    }

    .timer-wrapper {
        display: flex;
        justify-content: center;
        gap: 8px;

        .button-wrapper {
            display: flex;
            gap: 4px;
        }
    }
}
</style>
