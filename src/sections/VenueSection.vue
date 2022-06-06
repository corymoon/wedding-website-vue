<template>
    <section class="has-text-centered" id="venue">
        <VideoBg :sources="sources" class="video-bg">
            <div class="video-bg-content">
                <h3 class="is-uppercase venue-name">Oak Hill Farm</h3>
                <p class="venue-location">Apple River, IL</p>
            </div>
        </VideoBg>
    </section>
</template>

<script>
import VideoBg from 'vue-videobg'
const video = require('@/assets/oakHill.mp4');

export default {
    components: {
        VideoBg
    },
    data() {
        return {
            sources: [video],
        }
    }
}
</script>

<style lang="scss">

$viedo-big: 450px;
$video-med: 300px;
$video-sm: 200px;

.video-bg {
    height: $viedo-big !important;

    @media screen and (max-width: 800px) {
        height: $video-med !important;
    }
    @media screen and (max-width: 530px) {
        height: $video-sm !important;
    }
}

.video-bg-content {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    // height: 450px !important;
    height: $viedo-big !important;

    @media screen and (max-width: 800px) {
        height: $video-med !important;
    }

    @media screen and (max-width: 530px) {
        height: $video-sm !important;
    }
}

.venue-name {
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 10px;
}

.venue-location {
    line-height: 29px;
}
</style>
