<template>
    <page-section md image id="intro">
        <section-title>We are getting married</section-title>
        <section-content>
            <p class="has-text-weight-semibold mb-4">...in {{ daysLeft }}</p>
            <p>The dates are 6<sup>th</sup> through 9<sup>th</sup> of October 2023, with the ceremony happening on the 8<sup>th</sup>, and we would like you to be a part of it.</p>
        </section-content>
    </page-section>
</template>

<script>
    export default {
        computed: {
            daysLeft() {
                var today = new Date();
                var weddingDate = new Date(2023, 9, 8);
                if (today.getMonth() == 11 && today.getDate() > 25) {
                    weddingDate.setFullYear(weddingDate.getFullYear() + 1);
                }
                var one_day = 1000 * 60 * 60 * 24;
                var numDays = Math.ceil((weddingDate.getTime() - today.getTime()) / one_day);
                var dayDays = numDays == 1 ? 'day' : 'days';
                return numDays + " " + dayDays;
            },
        }
    }
</script>
