<template>
    <form name="submit-email-to-google-sheet">
        <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
        <b-field grouped group-multiline>
            <b-field label-position="on-border" label="Name" expanded class="mb-5">
                <b-input rounded icon="user" :value="name" v-model="name" name="Name" />
            </b-field>
            <b-field label-position="on-border" label="Email" expanded class="mb-5">
                <b-input rounded icon="envelope" :value="email" v-model="email" name="Email" />
            </b-field>
        </b-field>
        <b-button
            rounded
            expanded
            type="is-primary"
            :loading="submitting" :disabled="submitting || emailSubmitDisabled"
            @click="submitEmailListForm()"
        >
            Submit
        </b-button>
    </form>
</template>

<script>
import { emailListUrl } from "@/data/formUrl"
import { emailRegex } from "@/data/data"
export default {
    data() {
        return {
            emailRegex,
            emailListUrl,
            name: null,
            email: null,
            submitting: false,
        }
    },
    methods: {
        resetForm() {
            this.name = null;
            this.email = null;
        },
        submitEmailListForm() {
            this.submitting = true;
            const form = document.forms['submit-email-to-google-sheet']

            fetch(emailListUrl, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);
                    this.showToastMessage('is-success', "Thanks! We'll keep you updated!");
                    this.submitting = false;
                    this.resetForm();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    this.showToastMessage('is-danger', "Hmm... Something went wrong. Try again later.");
                    this.submitting = false;
                    this.resetForm();
                })
        },
    },
    computed: {
        validEmail() {
            return (this.emailRegex.test(this.email)) ? true : false;
        },
        emailSubmitDisabled() {
            let disabled = true;
            if (this.email !== null && this.name != null && this.validEmail) {
                disabled = false;
            }
            return disabled;
        },
    }
}
</script>
