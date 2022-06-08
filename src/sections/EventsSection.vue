<template>
    <page-section id="events" class="section">
        <section-title class="has-text-centered">Events</section-title>
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-desktop left-col">
                    <event-card v-for="e in itemsHead" :key="e.id" :event="e" />
                </div>
                <div class="column is-5-desktop right-col">
                    <event-card v-for="e in itemsTail" :key="e.id" :event="e" />
                </div>
            </div>
        </div>
    </page-section>
</template>

<script>
import { showEvents } from '@/data/toggles'
import { events } from '@/data/events'

export default {
    data() {
        return {
            showEvents,
            events,
        }
    },
    computed: {
        halfEvents() {
            return Math.ceil(this.events.length / 2);

        },
        itemsHead() {
            return this.events ? this.events.slice(0, this.halfEvents) : [];
        },
        itemsTail() {
            return this.events ? this.events.slice(this.halfEvents) : [];
        }

    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.left-col {
    @include mobile {
        border-right: none;
    }

    @include tablet {
        border-right: 1px solid rgba($my-primary, 0.6);
    }
}
</style>
