<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{delicacy.name}}</p>
                <button class="delete" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    <h1>此处可传 HTML 元素</h1>
                    <p>{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}{{delicacy.description}}</p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" @click="closeModal">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: {
        delicacy: Object,
        closeModal: Function
    }
};
</script>
