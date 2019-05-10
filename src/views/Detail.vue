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
  computed: {
    delicacy() {
      let id = this.$route.query.id;
      let delicacies = this.$store.getters["delicacy/getById"](id);
      if (!delicacies) {
        delicacies = cookie.get().find(item => item.id === id)
      }
      return delicacies;
    }
  }
};
</script>

