<template>
    <div class="container columns is-multiline">
        <div class="card card_self column" v-for="delicacy in delicacies" :key="delicacy.id">
            <header class="card-header">
                <p class="card-header-title">{{delicacy.name}}</p>
            </header>
            <div class="card-content" @click="openModel(delicacy)">
                <div class="content">
                    <p>{{reduceDescription(delicacy.description)}}</p>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Share</a>
                <a href="#" class="card-footer-item">Like</a>
            </footer>
        </div>
        <button class="button is-fullwidth is-info" @click="getMore">加载更多</button>
        <Model :delicacy="delicacy" v-show="modelStatus"/>
    </div>
</template>

<script>
import { mapState } from "vuex";

import Model from "@/components/models/Delicacy";
import { threadId } from "worker_threads";

export default {
    name: "About",
    data() {
        return {
            page: 1,
            modelStatus: false,
            delicacy: {}
        };
    },
    components: {
        Model
    },
    computed: {
        ...mapState({
            delicacies: state => state.delicacy.all
        })
    },
    methods: {
        goToDetail(id) {
            this.$router.push({ path: "/delicacy/" + id });
        },
        openModel(delicacy) {
            this.delicacy = delicacy;
            this.modelStatus = true;
            console.log(this.delicacy);
        },
        reduceDescription(description) {
            return description.length > 100
                ? description.substr(0, 100) + "..."
                : description;
        },
        getMore() {
            let page = this.page + 1;

            this.$store.dispatch("delicacy/testAppend", page);
        }
    },
    created() {
        this.$store.dispatch("delicacy/testSet");
    }
};
</script>

<style lang="sass">
    .card_self
        padding: 0 !important
        margin-bottom: 1rem
</style>

