<template>
    <div class="map-wrapper">
        <GmapMap
            :center="{lat: 42.4889488, lng: -90.1215362}"
            :zoom="15"
            style="width: 100%; height: 500px"
        >
        </GmapMap>
        <transition name="fade" mode="out-in">
            <!-- address card -->
            <div class="columns is-mobile address-card has-text-centered is-centered" v-if="showAddress" key="1">
                <div class="column column is-11-mobile is-6-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <h5 class="is-size-4 my-2">Oak Hill Farm</h5>
                            <p class="my-3 pb-5">8044 N Gabel Ln, Apple River, IL 61001</p>
                            <button class="button is-rounded is-primary" @click="toggleAddress()" style="padding: 8px 30px;">
                                <font-awesome-icon icon="map-marker" style="margin-right: 10px;" />
                                Show Map
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- show info card -->
            <div class="columns is-mobile show-info-box has-text-centered is-centered" v-else key="2">
                <div class="column is-6-mobile is-5-tablet is-4-desktop is-3-widescreen is-2-fullhd">
                    <div class="box no-shadow">
                        <button class="button is-rounded" @click="toggleAddress()">
                            <font-awesome-icon icon="info-circle" style="margin-right: 10px;" />
                            Show info
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showAddress: true,
            }
        },
        methods: {
            toggleAddress: function() {
                this.showAddress = !this.showAddress;
            }
        }
    }
</script>

<style>
.map-wrapper {
    height: 500px;
    width: 100%;
    position: relative;
}

.address-card {
    position: relative;
    top: -350px;
}

.show-info-box {
    position: relative;
    top: -500px;
}

.no-shadow {
    box-shadow: none;
}
</style>
