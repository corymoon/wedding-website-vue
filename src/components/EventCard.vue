<template>
    <div class="card mb-4 py-3 px-5">
        <h5>{{ event.title }}</h5>
        <p>{{ dateHeader(event.date) }}</p>
        <small>{{ timelineTime(event.date) }}</small>
        <p v-html="event.desc"></p>
    </div>
</template>

<script>
export default {
    props: [
        'event'
    ]
}
</script>
