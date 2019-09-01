<template>
    <div>
        loader
    </div>
</template>
<script>
    export default {
        name: 'pageLoader',
        props: {

        },
        data () {
            return {
                pages: 30
            }
        },
        methods: {
            getPages () {
                console.log('pages', this.pages)
            }
        },
        mounted () {
            this.getPages()
        }
    }
</script>