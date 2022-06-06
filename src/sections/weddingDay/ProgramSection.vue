<template>
    <page-section md accent id="program">
        <section-title>Program</section-title>
        <section-content>
            <div class="columns is-centered is-mobile" v-for="e in programEvents" :key="e.id">
                <div class="column">
                    <i class="event-icon fa" :class="`fa-${e.icon}`"></i>
                    <div class="program-item">
                        <h5>{{ e.desc }}</h5>
                        <ul>
                            <li>{{ timelineTime(e.date) }}</li>
                            <li>{{ e.location.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section-content>
    </page-section>
</template>

<script>
import { events, programEvents } from '@/data/events'
export default {
    data() {
        return {
            events,
            programEvents
        }
    },
    computed: {
        // weddingDayEvents() {
        //     return this.events.filter((e) => {
        //         const weddingString = "October 8, 2023";
        //         return new Date(weddingString).getDate() == e.date.getDate() &&
        //             new Date(weddingString).getMonth() == e.date.getMonth() &&
        //             new Date(weddingString).getFullYear() == e.date.getFullYear() && !e.header;
        //     });

        // }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

$icon-size: 90px;

.event-icon {
    color: rgba($my-primary, 0.25);
    font-size: $icon-size;
    position: relative;
    top: $icon-size * 0.8;
    margin-top: ($icon-size * 0.53) * -1;
    left: $icon-size * -1;
}

.program-item {
    margin-left: $icon-size;
}
</style>
