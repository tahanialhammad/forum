<template>
    <nav class="bg-slate-950 border-b border-slate-800">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('welcome')">
                        <ApplicationMark class="block h-9 w-auto" />
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <template v-for="item in menu" :key="item.name">
                            <NavLink v-if="item.when ? item.when() : true" :href="item.url"
                                :active="route().current(item.route)">
                                {{ item.name }}
                            </NavLink>
                        </template>
                    </div>
                </div>

                <div class="hidden sm:flex sm:items-center sm:ml-6">
                                                <!-- Settings Dropdown -->
                                                <div v-if="$page.props.auth.user" class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button v-if="
                                            $page.props.jetstream
                                                .managesProfilePhotos
                                        "
                                            class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-slate-300 transition">
                                            <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.auth.user
                                                .profile_photo_url
                                                " :alt="$page.props.auth.user.name
                                                    " />
                                        </button>

                                        <span v-else class="inline-flex rounded-md">
                                            <button type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-500 bg-white hover:text-slate-700 focus:outline-none focus:bg-slate-50 active:bg-slate-50 transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="block px-4 py-2 text-xs text-slate-400">
                                            Manage Account
                                        </div>

                                        <DropdownLink :href="route('profile.show')">
                                            Profile
                                        </DropdownLink>

                                        <DropdownLink v-if="
                                            $page.props.jetstream
                                                .hasApiFeatures
                                        " :href="route('api-tokens.index')">
                                            API Tokens
                                        </DropdownLink>

                                        <div class="border-t border-slate-200" />

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Log Out
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>

                            <template v-else>
                                <PrimaryLink :href="route('login')">Log in</PrimaryLink>
                                <PrimaryLink :href="route('register')" class="ms-2 bg-rose-500 hover:bg-transparent">
                                    Register</PrimaryLink>
                            </template>
</div>
            </div>
        </div>

    </nav>
</template>

<script setup>
import ApplicationMark from '@/Components/ApplicationMark.vue';
import NavLink from '@/Components/NavLink.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import { Link } from '@inertiajs/vue3';
import DropdownLink from '@/Components/DropdownLink.vue';

const menu = [
    {
        name: "Home",
        url: route("welcome"),
        route: "/",
    },
    // {
    //     name: "Dashboard",
    //     url: route("dashboard"),
    //     route: "dashboard",
    //     when: () => usePage().props.auth.user,
    // },
    // {
    //     name: "Blog",
    //     url: route("posts.index"),
    //     route: "posts.index",
    // },
    // {
    //     name: "Create a Post",
    //     url: route("posts.create"),
    //     route: "posts.create",
    //     when: () => usePage().props.auth.user,
    // },
    // {
    //     name: "Contact",
    //     url: route("contact"),
    //     route: "contact",
    // },
];
</script>