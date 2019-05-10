<template>
    <div class="tabs tabs_self is-fullwidth">
        <ul>
            <router-link tag="li" active-class="is-active" to="/" exact>
                <a>主页</a>
            </router-link>
            <router-link tag="li" active-class="is-active" to="/about/a">
                <a>凑数</a>
            </router-link>
            <router-link tag="li" active-class="is-active" to="/about/b">
                <a>凑数</a>
            </router-link>
            <router-link tag="li" active-class="is-active" to="/delicacy">
                <a>个人</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TabBar"
};
</script>

<style lang="sass">
    .tabs_self
        position: fixed
        right: 0
        bottom: 0
        left: 0
        background: #fff
        box-shadow: 0 -.4rem .8rem .4rem #dbdbdb
        box-sizing: border-box
</style>