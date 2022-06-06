<template>
    <section id="events" class="section">
        <section-title class="has-text-centered">Events</section-title>
        <div class="timeline is-centered" v-if="showEvents">

            <!-- start header -->
            <header class="timeline-header">
                <span class="tag is-medium is-primary">Start</span>
            </header>

            <!-- blank item -->
            <div class="timeline-item is-primary">
            </div>

            <template v-for="event in events">
                <!-- small header -->
                <header class="timeline-header" v-if="event.header" :key="event.id">
                    <span class="tag is-primary">{{ dateHeader(event.date) }}</span>
                </header>
                <!-- item -->
                <div class="timeline-item is-primary" v-else :key="event.id + '-item'">
                    <div class="timeline-marker is-primary"></div>
                    <div class="timeline-marker is-primary is-icon">
                        <i :class="`fa fa-${event.icon}`"></i>
                    </div>
                    <div class="timeline-content">
                        <p class="heading">{{ timelineTime(event.date) }}</p>
                        <p>{{ event.desc }}</p>
                    </div>
                </div>
            </template>

            <!-- end header -->
            <header class="timeline-header">
                <span class="tag is-medium is-primary">End</span>
            </header>
        </div>

        <div v-else class="has-text-centered">
            <p>...coming soon</p>
        </div>
    </section>
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
    }
}
</script>

<style>
</style>
