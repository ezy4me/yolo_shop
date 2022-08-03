<template>
  <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal-v" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">

                        <button type="button" class="btn-close" @click="close" aria-label="Close modal">
                            x
                        </button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                    </slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
name: 'modal-window',
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style>
.modal-backdrop {
    width: max-content;
    display: flex;
    position: absolute;
    line-height: normal;
    top: 3rem;
    right: 0rem;
}

.modal-v {

    background: #FFFFFF;
-webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    display: flex;
    
}

.modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: flex-end;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.modal-body {
    padding: 10px;
}

.btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}
</style>