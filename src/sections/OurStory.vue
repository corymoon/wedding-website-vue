<template>
    <page-section accent id="story">
        <section-title>Our Story</section-title>
        <section-content>
            
            <p class="story">We first met in online in the Winter of 2015. We met in person on New Year's Eve and officially began our relationship New Year's Day of 2016.</p>

            <p class="story">Nearly six years worth of memories later and we've traveled to South Korea, introduced 2 perfect poodles to our family, and ...... On November 6<sup>th</sup> 2021, I <s>finally</s> proposed with the help of Joni's family, taking her completely by surprise, and Joni said yes.</p>

            <b-image class="proposal-gif mb-4" :src="require('@/assets/proposal.gif')" />

            <h6 class="story has-text-centered has-text-weight-normal has-text-primary-dark">We can’t wait to celebrate our wedding day with you!</h6>
        </section-content>
    </page-section>
</template>

<script>
import { showStory } from '@/data/toggles'

export default {
    data() {
        return {
            showStory,
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.story {
    $font-size: 1rem;
    font-size: $font-size;
    line-height: $font-size * 2;
    padding-bottom: $font-size * 1.25;
    text-align: justify;

    sup {
        font-size: $font-size * 0.625;
        line-height: $font-size * 0.625;
    }
}

.proposal-gif {
    img {
        border-radius: $main-border-radius * 1.5;
        max-height: 200px;
        width: auto !important;
        margin: 0 auto;
    };
}
</style>
