<template>
    <!-- rsvp form -->
    <form name="submit-rsvp-to-google-sheet">
        <div class="columns">
            <div class="column is-6-desktop is-12-mobile">
                <b-field label-position="on-border" label="Name" expanded>
                    <b-input rounded icon="user" :value="name" v-model="name" name="Name" />
                </b-field>
            </div>
            <div class="column is-6-desktop is-12-mobile">
                <b-field label-position="on-border" label="Email" expanded>
                    <b-input rounded icon="envelope" :value="email" v-model="email" name="Email" />
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6-desktop is-12-mobile">
                <b-field label-position="on-border" label="Phone" expanded>
                    <b-input rounded icon="phone" :value="phone" v-model="phone" name="Phone" />
                </b-field>
            </div>
            <div class="column is-6-desktop is-12-mobile">
                <b-field label-position="on-border" label="Number of guests" expanded>
                    <b-input type="number" rounded icon="users" min="1" max="6" :value="numGuests" v-model="numGuests"
                        name="Guests" />
                </b-field>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column">
                <p>Please indicate if you intend to use the complimentary shuttle service between our
                    wedding hotels and Oak Hill Farm.for more information, <a href="#"
                        @click="transportationModal = true">click here</a></p>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-6-desktop is-12-mobile">
                <b-radio name="transportationYes" v-model="transportation" :native-value="true">
                    Yes
                </b-radio>
                <b-radio name="transportationNo" v-model="transportation" :native-value="false">
                    No
                </b-radio>
            </div>

        </div>
        <h4 class="is-size-6 is-bold is-uppercase mb-3 mt-5" v-show="guestMeals.length != 0">Your Party</h4>
        <template>
            <div class="columns mb-4" v-for="(guestMeal, index) in guestMeals" :key="'guest' + index + 'Name'">
                <!-- name -->
                <div class="column is-6-desktop is-12-mobile">
                    <b-field label-position="on-border" :label="`Guest ${index + 1} name`" expanded>
                        <b-input rounded icon="user" v-model="guestMeals[index].name"
                            :name="`Guest ${index + 1} name`" />
                    </b-field>
                </div>
                <!-- meal -->
                <div class="column is-6-desktop is-12-mobile">
                    <b-field :label="'Meal for guest ' + (index + 1)" label-position="on-border">
                        <b-select rounded expanded icon="utensils" v-model="guestMeals[index].meal"
                            :name="`Guest ${index + 1} meal`">
                            <option v-for="meal in mealOptions" :key="meal" :value="meal">
                                {{ meal }}
                            </option>
                        </b-select>
                    </b-field>
                </div>
            </div>
        </template>
        <b-message type="is-success" v-show="showRsvpSubmitSuccess">
            Thanks! We've recieved your RSVP information.
        </b-message>
        <b-message type="is-warning" v-show="showRsvpSubmitFail">
            Hmm... Something went wrong. Try again later.
        </b-message>
        <b-button rounded expanded type="is-primary" :loading="submitting" :disabled="rsvpDisabled || submitting"
            @click="submitRsvpForm()">
            Submit
        </b-button>
        <!-- transportation modal -->
        <b-modal v-model="transportationModal" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <section-title>Transportation</section-title>
                        <p>Transportation will be provided for all to the ceremony and reception at Oak Hill Farm on
                            Sunday, October 8th. No hotel stay required for transportation. It departs from {{
                                    lodging.length == 1 ? 'this' : 'these'
                            }}
                            {{ numHotels }} {{ locationText }}:</p>
                        <ul>
                            <li v-for="hotel in lodging" :key="hotel.id">
                                <a :href="hotel.web">
                                    {{ hotel.name }}
                                </a>
                                <a :href="hotel.href" style="margin-left: 8px;">
                                    <font-awesome-icon icon="map-marker-alt" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </b-modal>
    </form>
</template>

<script>
import { lodging } from '@/data/lodging'
import { rsvpUrl } from '@/data/formUrl'
import { emailRegex } from '@/data/data'
import { mealOptions } from '@/data/mealOptions'

export default {
    data() {
        return {
            mealOptions,
            lodging,
            emailRegex,
            rsvpUrl,
            name: null,
            email: null,
            phone: null,
            numGuests: null,
            transportationModal: false,
            guestMeals: [],
            transportation: null,
            submitting: false,
            showRsvpSubmitSuccess: false,
            showRsvpSubmitFail: false,
        }
    },
    watch: {
        numGuests(val) {
            var newObj = { name: null, meal: null };
            if (this.guestMeals.length != val) {
                if (this.guestMeals.length < val) {
                    this.guestMeals.push(newObj);
                } else {
                    this.guestMeals.splice(val, 1);
                }
            }
        },
    },
    methods: {
        resetForm() {
            this.name = null;
            this.email = null;
            this.phone = null;
            this.numGuests = null;
            this.guestMeals = [];
            this.transportation = null;
        },
        submitRsvpForm() {
            this.submitting = true;
            const form = document.forms['submit-rsvp-to-google-sheet']

            fetch(rsvpUrl, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);
                    this.showRsvpSubmitSuccess = true;
                    this.submitting = false;
                    this.resetForm();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    this.showRsvpSubmitFail = true;
                    this.submitting = false;
                    this.resetForm();
                })
        },
    },
    computed: {
        validEmail() {
            return (this.emailRegex.test(this.email)) ? true : false;
        },
        rsvpDisabled() {
            var g = this.numGuests == null;
            var n = this.name == null;
            var e = this.email == null;
            var p = this.phone == null;
            var t = this.transportation == null;
            // var t = this.transportationNo == true || this.transportationYes == true;

            var arrayHasNull = false;
            for (var i in this.guestMeals) {
                if (
                    this.guestMeals[i].name == null ||
                    this.guestMeals[i].meal == null
                ) {
                    arrayHasNull = true;
                }
            }

            if (g || n || e || p || arrayHasNull || t) {
                return true;
            } else {
                return false;
            }
        },
    }
}
</script>
