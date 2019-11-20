<template>
    <div>
        <h2>我是Profile组件</h2>
        <p>{{this.$route.query.name}}</p>
    </div>
</template>
<script>
export default {
    name:'profile'

}
</script>
