<template>
    <page-section id="rsvp" image>
        <section-title>{{ title }}</section-title>
        <section-content v-if="canRsvp" class="mb-6">
            <p class="mb-3">We would greatly appreciate if you could RSVP before 8th of August '23</p>
        </section-content>
        <section-content v-else>
            <p class="mb-3">...but not yet. Once you receieve a formal invitation, you'll be to provide us your details
                here.</p>
            <p class="mb-3">if you want to recieve updates about when to RSVP, transportation, lodging, etc, please fill
                out the form below.</p>
        </section-content>
        <div class="columns is-centered mb-3">
            <div class="column is-12-mobile is-10-tablet is-8-desktop is-6-widescreen">
                <RsvpForm v-if="canRsvp" />
                <EmailListForm v-else />
            </div>
        </div>
    </page-section>
</template>

<script>
import EmailListForm from '@/components/forms/EmailListForm.vue'
import RsvpForm from '@/components/forms/RsvpForm.vue'
import { lodging } from '@/data/lodging'
import { canRsvp } from '@/data/toggles'

export default {
    components: {
        EmailListForm,
        RsvpForm,
    },
    data() {
        return {
            canRsvp,
            lodging,
            transportationModal: false,
        }
    },
    methods: {
    },
    computed: {
        title() {
            var theTitle = '';
            if (this.canRsvp) {
                theTitle = 'What are you waiting for?';
            } else {
                theTitle = 'You can RSVP here';
            }
            return theTitle;
        },
    }
}
</script>
