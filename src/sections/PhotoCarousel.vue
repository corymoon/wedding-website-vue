<template>
    <page-section md accent id="photos">
        <section-title>Our story in photos</section-title>
        <div class="columns is-mobile is-multiline is-align-items-center is-centered">
            <div class="column is-4-mobile" v-for="(photo, i) in photos" :key="`photo-${i}`">
                <VuePureLightbox :thumbnail="photo.small" :images="[photo.large]">
                    <template v-slot:icon-close>
                        <font-awesome-icon icon="window-close" />
                    </template>
                    <template v-slot:loader>
                        <b-loading :is-full-page="true"></b-loading>
                    </template>
                </VuePureLightbox>
            </div>
        </div>

    </page-section>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
import { photos } from '@/data/photos'
import 'vue-pure-lightbox/dist/VuePureLightbox.css'

export default {
    components: {
        VuePureLightbox,
    },
    data() {
        return {
            photos,
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.lightbox {
    z-index: 999;
}

.lightbox__image img {
    width: unset !important;
    height: unset !important;
    max-height: 100vh;
}
</style>
