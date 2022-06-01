<template>
    <page-section id="map">
        <section-title title="How do I get there?" />
        <p>It's way easier than you think!</p>
        <a :href="googleMapsLink">Open in Google Maps</a>
    </page-section>
</template>

<script>
    export default {
        data() {
            return {
                googleMapsLink: 'https://www.google.com/maps/place/Oak+Hill+Farm/@42.4889488,-90.1215362,15z/data=!4m2!3m1!1s0x0:0x98e0a8a1ca4adea6?sa=X&ved=2ahUKEwjrqOfFw4L4AhWYUjABHUO8Bh0Q_BJ6BAhcEAU',
            }
        }
    }
</script>
