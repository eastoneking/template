<template>
    <div id="app">
        <transition :name="routerAnimation">
            <router-view/>
        </transition>
        <TabBar v-if="screenWidth <= 768"/>
    </div>
</template>

<script>
    import TabBar from "@/components/TabBar";

    export default {
        name: "App",
        data() {
            return {
                routerAnimation: "slide-left",
                screenWidth: 0
            }
        },
        components: {
            TabBar
        },
        mounted() {
            let that = this;
            window.onresize = () => {
                that.screenWidth = window.innerWidth
            }
        },
        beforeRouteUpdate(to, from, next) {
            console.log("commit route update.");
            const toDepth = to.path.split("/").length;
            const fromDepth = to.path.split("/").length;
            this.routerAnimation = toDepth < fromDepth ? "slide-right" : "slide-left";

            next()
        }
    }
</script>

<style lang="sass">
    #app
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        background: #f5f5f5
</style>
