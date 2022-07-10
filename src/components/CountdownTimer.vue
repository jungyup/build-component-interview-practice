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
                max="60"
                :aria-label="`${minutes} minutes`"
            />:
            <input
                type="number"
                placeholder="SS"
                class="time-input"
                v-model="seconds"
                min="0"
                max="60"
                :aria-label="`${seconds} seconds remaining`"
            />
            <div class="button-wrapper">
                <button
                    v-if="isPaused"
                    @click="startTime(hours, minutes, seconds)"
                    class="timer-toggle"
                    :disabled="!hours && !minutes && !seconds"
                    type="submit"
                >
                    Start
                </button>
                <button
                    v-if="!isPaused"
                    @click="pauseTime()"
                    class="pause-timer"
                >
                    Pause
                </button>
                <button
                    v-if="remainingTime > 0"
                    @click="resetTime()"
                    class="reset-timer"
                >
                    Reset
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    name: 'CountdownTimer',
    props: {
        isSafari: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        let hours = ref(null);
        let minutes = ref(null);
        let seconds = ref(null);
        let remainingTime = ref(null);
        let isPaused = ref(true);
        let interval;

        let permission = Notification.permission;

        function startTime(timerHours, timerMinutes, timerSeconds) {
            isPaused.value = false;
            remainingTime.value =
                timerHours * 3600 + timerMinutes * 60 + timerSeconds;
            if (!isPaused.value) {
                interval = setInterval(() => {
                    if (remainingTime.value === 0) {
                        clearInterval(interval);
                        isPaused.value = true;

                        if (permission === 'granted' && props.isSafari) {
                            showNotification();
                        } else if (permission === 'default' && props.isSafari) {
                            requestAndShowPermission();
                        } else {
                            alert('Countdown Time is Up!');
                        }
                    } else {
                        remainingTime.value--;
                    }
                }, 1000);
            }
        }

        function pauseTime() {
            isPaused.value = true;
            clearInterval(interval);
        }

        function resetTime() {
            remainingTime.value = 0;
        }

        function showNotification() {
            let title = 'Countdown Timer';
            let icon =
                'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
            let body = 'Countdown Time is Up!';
            var notification = new Notification(title, { body, icon });

            notification.onclick = () => {
                notification.close();
                window.parent.focus();
            };
        }

        function requestAndShowPermission() {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        }

        watch(remainingTime, () => {
            hours.value = Math.floor(remainingTime.value / 3600);
            minutes.value = Math.floor((remainingTime.value / 60) % 60);
            seconds.value = remainingTime.value % 60;
        });

        return {
            hours,
            minutes,
            seconds,
            remainingTime,
            isPaused,
            startTime,
            pauseTime,
            resetTime,
        };
    },
};
</script>

<style lang="scss">
.countdown-container {
    .countdown-heading {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 22px;
        margin-bottom: 20px;
        text-align: center;
    }

    .timer-wrapper {
        display: flex;
        justify-content: center;
        gap: 8px;

        .time-input {
            width: 7%;
            text-align: right;
        }

        .button-wrapper {
            display: flex;
            gap: 4px;
        }
    }
}
</style>
