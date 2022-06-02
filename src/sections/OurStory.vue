<template>
    <page-section md accent id="story">
        <section-title>Our Story</section-title>
        <section-content>
            <p class="story">Like most millenials we met on the internet, first met in person at Starbucks, and had our first date at a café. We've been inseparable since New Year's Day 2016. In the mean time, we've been though thick and thin, around the world, and can't wait to see what the future has in store for us.</p>
        </section-content>
    </page-section>
</template>

<script>
    import { showStory } from '@/data/toggles'

    export default {
        data() {
            return {
                showStory
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
