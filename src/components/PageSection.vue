<template>
    <section
        class="section has-text-centered"
        :class="{
            'is-medium': md,
            'is-large': lg,
            'primary-bg-very-light': accent,
        }"
    >
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props: {
            accent: {
                type: Boolean,
                default: false,
            },
            md: {
                type: Boolean,
                default: false,
            },
            lg: {
                type: Boolean,
                default: false,
            },
        }
    }
</script>

<style>

</style>
