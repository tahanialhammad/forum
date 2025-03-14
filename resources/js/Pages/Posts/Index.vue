<template>
    <AppLayout>
        <Container>
       all posts
       <div v-for="post in posts" :key="post.id">
        <Link :href="route('posts.show', post.id)" class="group block px-2 py-4">
    {{ post.title }}
</Link>

       </div>

        </Container>
    </AppLayout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps(["posts"]);

</script>
