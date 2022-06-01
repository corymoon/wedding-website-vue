<template>
    <page-section id="rsvp">
        <section-title :title="title" />
        <!-- rsvp text -->
        <section-content v-if="canRsvp" class="mb-6">
            <p class="mb-3">We would greatly appreciate if you could RSVP before 8th of August '23</p>
        </section-content>
        <!-- / rsvp text -->
        <!-- join email list text -->
        <section-content>
            <p class="mb-3">...but not yet. Once you receieve a formal invitation, you'll be to provide us your details here.</p>
            <p class="mb-3">if you want to recieve updates about when to RSVP, transportation, lodging, etc, please fill out the form below.</p>
        </section-content>
        <!-- / join email list text -->
        <div class="columns is-centered mb-3">
            <div class="column is-12-mobile is-10-tablet is-8-desktop is-6-widescreen">
                <!-- rsvp form -->
                <div v-if="canRsvp">
                    <div class="columns">
                        <div class="column is-6-desktop is-12-mobile">
                            <b-field label-position="on-border" label="Name" expanded>
                                <b-input rounded icon="user" :value="name" v-model="name" />
                            </b-field>
                        </div>
                        <div class="column is-6-desktop is-12-mobile">
                            <b-field label-position="on-border" label="Email" expanded>
                                <b-input rounded icon="envelope" :value="email" v-model="email" />
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-6-desktop is-12-mobile">
                            <b-field label-position="on-border" label="Phone" expanded>
                                <b-input rounded icon="phone" :value="phone" v-model="phone" />
                            </b-field>
                        </div>
                        <div class="column is-6-desktop is-12-mobile">
                            <b-field label-position="on-border" label="Number of guests" expanded>
                                <b-input type="number" rounded icon="users" min="1" max="6" :value="numGuests" v-model="numGuests" />
                            </b-field>
                        </div>
                    </div>
                    <h4 class="is-size-6 is-bold is-uppercase mb-3 mt-5" v-show="guestMeals.length != 0">Your Party</h4>
                    <template>
                        <div class="columns mb-4" v-for="(guestMeal, index) in guestMeals" :key="'guest' + index + 'Name'">
                            <!-- name -->
                            <div class="column is-6-desktop is-12-mobile">
                                <b-field label-position="on-border" :label="'Guest ' + (index + 1) + ' name'" expanded>
                                    <b-input rounded icon="user" v-model="guestMeals[index].name" />
                                </b-field>
                            </div>
                            <!-- meal -->
                            <div class="column is-6-desktop is-12-mobile">
                                <b-field
                                    :label="'Meal for guest ' + (index + 1)"
                                    label-position="on-border"
                                >
                                    <b-select
                                        rounded
                                        expanded
                                        icon="book-open"
                                        v-model="guestMeals[index].meal"
                                    >
                                        <option
                                            v-for="meal in mealOptions"
                                            :key="meal"
                                            :value="meal"
                                        >
                                            {{ meal }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                        </div>
                    </template>
                    <!-- <p>{{guestMeals}}</p> -->
                </div>
                
                <!-- / rsvp form -->
                <!-- join email list form -->
                <b-field grouped group-multiline v-else>
                    <b-field label-position="on-border" label="Name" expanded class="mb-5">
                        <b-input rounded icon="user" :value="name" v-model="name" />
                    </b-field>
                    <b-field label-position="on-border" label="Email" expanded class="mb-5">
                        <b-input rounded icon="envelope" :value="email" v-model="email" />
                    </b-field>
                </b-field>
                <!-- / join email list form -->
                <b-button
                    type="is-primary"
                    rounded
                    expanded
                    :disabled="submitDisabled"
                    @click="handleSubmit()"
                >
                    Submit
                </b-button>
            </div>
        </div>
    </page-section>
</template>

<script>
    export default {
        data() {
            return {
                canRsvp: false,
                name: null,
                email: null,
                phone: null,
                numGuests: null,
                guestMeals: [],
                emailReg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                transportation: null,
                mealOptions: [
                    'NY Strip',
                    'Stuffed Chicken Caprese',
                    'Atlantic Salmon',
                    'Vegetarian'
                ]

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
            handleGuestNameChange(event, index) {
                this.guestMeals[index].name = event.target.value;
            },
            handleGuestMealChange(event, index) {
                this.guestMeals[index].meal = event.target.value;
            },
            handleSubmit() {
                if (this.canRsvp) {
                    // submit to rsvp
                    console.log('submit to rsvp');
                } else {
                    // submit to email form
                    console.log('submit to email form');
                }
            },
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
            validEmail() {
                return (this.emailReg.test(this.email)) ? true : false;
            },
            submitDisabled() {
                let disabled = true;
                if (this.canRsvp) {
                    // validate rsvp
                    let e = this.email != null;
                    let n = this.name != null;
                    let ev = this.validEmail;
                    let p = this.phone != null;
                    let g = this.partySize != null && this.partySize < 7;
                    if (e && n && ev && p && g) {
                        disabled = false;
                    }
                } else {
                    // validate email form
                    if (this.email !== null && this.name != null && this.validEmail) {
                        disabled = false;
                    }
                }
                return disabled;
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
