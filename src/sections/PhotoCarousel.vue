<template>
    <page-section md accent id="photos">
        <section-title>Our story in photos</section-title>
        <div class="columns is-align-items-center">
            <div class="column" v-for="(photo, i) in photos" :key="`photo-${i}`">
                <VuePureLightbox
                    :thumbnail="photo.small"
                    :images="[photo.large]"
                >
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
import 'vue-pure-lightbox/dist/VuePureLightbox.css'

export default {
    components: {
        VuePureLightbox,
    },
    data() {
        return {
            photos: [
                // {
                //     large: 'carousel/001.jpeg',
                //     small: 'carousel/001-sm.jpeg',
                // },
                // {
                //     large: 'carousel/002.jpeg',
                //     small: 'carousel/002-sm.jpeg',
                // },
                // {
                //     large: 'carousel/003.jpg',
                //     small: 'carousel/003-sm.jpg',
                // },
                {
                    large: 'carousel/004.jpg',
                    small: 'carousel/004-sm.jpg',
                },
                {
                    large: 'carousel/005.jpeg',
                    small: 'carousel/005-sm.jpeg',
                },
                {
                    large: 'carousel/006.jpeg',
                    small: 'carousel/006-sm.jpeg',
                },
                {
                    large: 'carousel/009.png',
                    small: 'carousel/009-sm.png',
                },
                {
                    large: 'carousel/008.jpeg',
                    small: 'carousel/008-sm.jpeg',
                },
                {
                    large: 'carousel/007.png',
                    small: 'carousel/007-sm.png',
                },
            ],
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
