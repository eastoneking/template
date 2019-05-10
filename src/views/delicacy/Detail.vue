<template>
    <div class="model">
        <div class="model-background"></div>
        <header class="modal-card-head">
            <p class="modal-card-title">{{delicacy.name}}</p>
            <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <p>{{delicacy.description}}</p>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: {
        delicacy: Object
    }
};
</script>
