<template>
    <page-section id="lodging" v-if="showLodging">
        <section-title title="Lodging" />
    </page-section>
</template>

<script>
    export default {
        data() {
            return {
                showLodging: false,
            }
        }
    }
</script>
