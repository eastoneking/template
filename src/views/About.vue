<template>
  <div class="about">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">测试数据列表</div>
      <div class="weui-panel__bd">
        <router-link
          :to="{path: '/detail', query: {id: delicacy.id}}"
          v-for="delicacy in delicacies"
          :key="delicacy.id"
        >
          <div class="weui-media-box weui-media-box_text">
            <h4 class="weui-media-box__title">{{delicacy.name}}</h4>
            <p class="weui-media-box__desc">{{delicacy.description}} price: ${{delicacy.price}}</p>
          </div>
        </router-link>
      </div>
      <div class="weui-panel__ft">
        <a class="weui-cell weui-cell_access weui-cell_link" @click="getMore">
          <div class="weui-cell__bd">查看更多</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import validate from "../validations/delicacy";


export default {
  name: "About",
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState({
      delicacies: state => state.delicacy.all
    })
  },
  methods: {
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


<style lang="scss">
</style>

