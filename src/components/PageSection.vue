<template>
    <section
        class="section has-text-centered"
        :class="{
            'is-medium': md,
            'is-large': lg,
            'primary-bg-very-light': accent,
            'warning-bg-very-light': !accent,
            'image-accent': image,
        }"
    >
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props: {
            image: {
                type: Boolean,
                default: false,
            },
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

<style lang="scss">
    .image-accent {
        position: relative;

        &:after {
            content: "";
            background: url('../assets/moon.svg');
            background-position: bottom right;
            background-repeat: no-repeat;
            background-size: 250px;
            opacity: 0.6;
            top: 0.5rem;
            left: 0.5rem;
            bottom: 0.5rem;
            right: 0.5rem;
            position: absolute;
            z-index: -1; 
        }
    }
</style>
