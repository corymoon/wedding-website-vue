<template>
    <page-section id="registry" accent>
        <section-title>Registry Information</section-title>
        <section-content>
            <p class="mb-4">Please note that your love and support is all we ask for on our special day. However, if you do wish to celebrate with a gift, we are registered at:</p>
            <ul>
                <li v-for="r in registryProviders" :key="r.name">
                    <a :href="r.href">{{ r.name }}</a>
                </li>
            </ul>
        </section-content>
    </page-section>
</template>

<script>
import { registryProviders } from '@/data/registry';
export default {
    data() {
        return {
            registryProviders,
        }
    }
}
</script>
