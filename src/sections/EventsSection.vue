<template>
    <page-section id="events" md v-if="showEvents">
        <section-title title="Events" />
        <b-steps v-if="showEvents">
            <b-step-item
                v-for="event in events"
                :key="event.name"
                :label="event.name"
                :icon="event.icon"
                clickable
            >
                <div>
                    {{ formatDate(event.date) }}<br/>
                    {{ event.desc }}
                </div>
            </b-step-item>
        </b-steps>
        <div v-else>
            <p>...coming soon</p>
        </div>
    </page-section>
</template>

<script>
import dayjs from 'dayjs'

export default {
    data() {
        return {
            showEvents: false,
            events: [
                {
                    date: new Date('October 7, 2023 11:00:00'),
                    name: 'Rehersal',
                    desc: 'The description',
                    icon: 'exclamation-triangle'
                },
                {
                    date: new Date('October 7, 2023 18:00:00'),
                    name: 'Rehersal Dinner',
                    desc: 'The description',
                    icon: 'utensils'
                },
                {
                    date: new Date('October 8, 2023 14:00:00'),
                    name: 'Ceremony',
                    desc: 'The description',
                    icon: 'church'
                },
                {
                    date: new Date('October 8, 2023 18:00:00'),
                    name: 'Reception',
                    desc: 'The description',
                    icon: 'glass-cheers'
                },
                {
                    date: new Date('October 9, 2023 09:00:00'),
                    name: 'Farewell Brunch',
                    desc: 'The description',
                    icon: 'coffee'
                },
            ]
        }
    },
    methods: {
        formatDate(date) {
            let formatted = dayjs(date).format('MMMM D, YYYY h:mm A')
            return formatted;
        }
    }
}
</script>

<style>
    .timeline-item {
        flex-grow: 1;
    }
    .timeline-content {
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
</style>
