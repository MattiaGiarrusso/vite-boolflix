<script>

export default {
    name: 'AppHeader'
}

</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container-fluid d-flex">
            <div>
                <h2>BOOLFLIX</h2>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">

@use '../style/generic';

header {
    height: 70px;
    background-color: black;
    color: red;
}

</style>