<template>
    <nav class="navbar is-fixed-top" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a
                role="button"
                class="navbar-burger burger"
                :class="menuStatus ? 'is-active' : ''"
                @click="toggleMenu"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="menuStatus ? 'is-active' : ''">
            <div class="navbar-start">
                <a class="navbar-item">Home</a>

                <a class="navbar-item">Documentation</a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More</a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Jobs</a>
                        <a class="navbar-item">Contact</a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">Report an issue</a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">Log in</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            menuStatus: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuStatus = !this.menuStatus;
        }
    }
};
</script>

<style lang="sass">

</style>

