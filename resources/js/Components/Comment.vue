<template>
    <div class="sm:flex">
        <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <img :src="comment.user.profile_photo_url" class="h-10 w-10 rounded-full" />
        </div>
        <div class="flex-1">
            <div class="prose prose-sm mt-1 max-w-none text-slate-400" v-html="comment.html"></div>
            <!-- delete ago becouse its now from date.js -->

            <span class="block pt-1 text-xs text-slate-300 first-letter:uppercase">By {{ comment.user.name }}
                {{ relativeDate(comment.created_at) }} | <span class="text-rose-500">{{ comment.likes_count }}
                    likes</span>
            </span>
            <div class="mt-2 flex justify-end space-x-3 empty:hidden">
                <div v-if="$page.props.auth.user">
                    <Link v-if="comment.can.like" preserve-scroll :href="route('likes.store', ['comment', comment.id])"
                        method="post" class="inline-block text-slate-200 hover:text-rose-500 transition-colors">
                    <HandThumbUpIcon class="size-4 inline-block mr-1" />
                    <span class="sr-only">Like Comment</span>
                    </Link>
                    <Link v-else preserve-scroll :href="route('likes.destroy', ['comment', comment.id])" method="delete"
                        class="inline-block text-slate-200 hover:text-rose-500 transition-colors">
                    <HandThumbDownIcon class="size-4 inline-block mr-1" />
                    <span class="sr-only">Unlike Comment</span>
                    </Link>
                </div>
                <form v-if="comment.can?.update" @submit.prevent="$emit('edit', comment.id)">
                    <button class="font-mono text-xs hover:font-semibold">
                        Edit
                    </button>
                </form>
                <form v-if="comment.can?.delete" @submit.prevent="$emit('delete', comment.id)">
                    <button class="font-mono text-xs text-red-700 hover:font-semibold">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { relativeDate } from "@/Utilities/date.js";
import { Link, router, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/vue/20/solid/index.js";

const props = defineProps(["comment"]);

const emit = defineEmits(["edit", "delete"]);
</script>