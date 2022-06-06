<template>
    <page-section md id="lodging">
        <section-title>Accommodations</section-title>
        <p>Galena is full of amazing places to stay, but for your convenience blocks of rooms have been reserved at the
            following {{ numHotels }} {{ locationText }}:</p>
        <ul v-for="l in lodging" :key="l.id" class="my-3">
            <li class="">
                <strong class="has-text-primary-dark">{{ l.name }}</strong>
            </li>
            <li>
                <a :href="l.href">{{ l.street }}, {{ l.cityStateZip }}</a>
            </li>
            <li>Reference {{ l.refName }}</li>
            <li>Group rate available until {{ l.until }}</li>
            <li><a :href="`tel:${l.phone}`">{{ l.phone }}</a> / <a :href="l.web">Website</a></li>
        </ul>
    </page-section>
</template>

<script>
import { showLodging } from '@/data/toggles'
import {lodging} from '@/data/lodging'

export default {
    data() {
        return {
            lodging,
            showLodging,
        }
    },
    methods: {
    },
    computed: {
    }
}
</script>
