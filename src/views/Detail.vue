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
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  computed: {
    delicacy() {
      return this.$store.getters["delicacy/getById"](this.$route.query.id);
    }
  }
};
</script>

