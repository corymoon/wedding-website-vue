<template>
    <div class="map-wrapper">
        <GmapMap :center="oakHillLatLng" :zoom="11" style="width: 100%; height: 500px">
            <GmapMarker :position="oakHillLatLng" :clickable="true" @click="center = oakHillLatLng" label="Oak Hill Farm" />
            <GmapMarker v-if="showLodging" :position="eagleRidgeLatLng" :clickable="true" @click="center = eagleRidgeLatLng" label="Eagle Ridge Resort" />

        </GmapMap>
        <transition name="fade" mode="out-in">
            <!-- address card -->
            <div class="columns is-mobile address-card has-text-centered is-centered" v-if="showAddress" key="1">
                <div class="column column is-11-mobile is-6-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <h5 class="is-size-4 my-2 has-text-weight-semibold">Oak Hill Farm</h5>
                            <p class="my-3 pb-5">8044 N Gabel Ln, Apple River, IL 61001</p>
                            <button class="button is-rounded is-primary" @click="toggleAddress()"
                                style="padding: 8px 30px;">
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
import { oakHillLatLng, eagleRidgeLatLng } from '@/data/data';
import { showLodging } from '@/data/toggles';
export default {
    data() {
        return {
            oakHillLatLng,
            eagleRidgeLatLng,
            showLodging,
            showAddress: true,
        }
    },
    methods: {
        toggleAddress: function () {
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
