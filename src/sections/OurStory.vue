<template>
    <page-section md accent id="story" v-if="showStory">
        <section-title title="Our Story" />
        <section-content>
            <p class="story">Like most millenials we met on the internet, first met in person at Starbucks, and had our first date at a café. We've been inseparable since New Year's Day 2016. In the mean time, we've been though thick and thin, around the world, and can't wait to see what the future has in store for us.</p>
        </section-content>
    </page-section>
</template>

<script>
    export default {
        data() {
            return {
                showStory: false
            }
        },
    }
</script>

<style lang="scss">
    .story {
        font-size: 15px;
        line-height: 29px;
        padding-bottom: 20px;
    }
</style>
