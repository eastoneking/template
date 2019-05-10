<template>
    <div class="detail">
        <p>
            {{delicacy.name}}
            {{delicacy.price}}
            {{delicacy.description}}
        </p>
    </div>
</template>

<script>
    // import { mapGetters } from "vuex";

    import cookie from "../cookies/delicacy";

    export default {
        name: "Detail",
        props: {
            id: String
        },
        data() {
            return {
                delicacy: {}
            }
        },
        computed: {
        },
        mounted() {
            console.log(this.id);
            let data = this.$store.getters["delicacy/getById"](this.id);

            if (!data) {
                data = cookie.getById(this.id);
            }

            if (!data) {
                this.$router.push({name: "not-found"})
            }

            this.delicacy = data
        }
    };
</script>

