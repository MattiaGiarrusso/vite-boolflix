<script>
import { store } from '../store.js'

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <section class="search-bar d-flex align-items-center">
        <div class="input-group px-4">
            <input type="text" class="form-control" placeholder="Cerca un film o una serie TV..." v-model="store.searchContent" @keyup.enter="$emit('search')">
            <button class="btn ms-btn-search" type="button" @click="$emit('search')">Cerca</button>
        </div>
    </section>
</template>


<style scoped lang="scss">

@use '../style/generic';

section {
    height: 60px;
    background-color: black;

    .ms-btn-search {
        background-color: red;
        &:hover {
            background-color: darkred;
        }
    }
}

</style>