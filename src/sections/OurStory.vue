<template>
    <page-section md accent id="story">
        <section-title>Our Story</section-title>
        <section-content>
            <!-- <p class="story">Like most millenials we met on the internet, first met in person at Starbucks, and had our first date at a café. We've been inseparable since New Year's Day 2016.</p>
            <p class="story">On November 6, 2021 Cory proposed
                
                In the mean time, we've been though thick and thin, around the world, and can't wait to see what the future has in store for us.</p> -->

            <p class="story">We first met in online in the winter of 2015. We met in person on New Year's Eve and officially began our relationship New Year's Day of 2016.</p>

            <p class="story">In the last six years, we've been to the other side of the world and back, got two dogs, and...</p>

            <p class="story">I proposed to Joni on November 6, 2021...</p>

            <p class="story">We can't wait to celebrate with you at our wedding ceremony and reception in October!</p>
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
