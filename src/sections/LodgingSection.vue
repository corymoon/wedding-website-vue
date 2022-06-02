<template>
    <page-section id="lodging" v-if="showLodging">
        <section-title>Lodging</section-title>
    </page-section>
</template>

<script>
    import { showLodging } from '@/data/toggles'

    export default {
        data() {
            return {
                showLodging,
            }
        }
    }
</script>
