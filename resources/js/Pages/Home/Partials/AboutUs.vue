<template>
    <div class="flex flex-col lg:flex-row gap-8 my-40">
        <!-- Left Section -->
        <div class="flex-1">
            <div class="relative flex flex-col gap-8 items-start">
                <h3 class="text-rose-500 my-8">About Us</h3>
                <div class="relative mb-8">
                    <h1 class="relative font-black text-4xl z-10">
                        Connecting and Growing Together
                    </h1>
                    <GradientCircle class="absolute -top-8 -left-10 z-0" />
                    <p class="text-slate-500 my-8 lg:pe-40">
                        We are a community of freelancers, developers, designers, and digital strategists dedicated to
                        sharing knowledge, experiences, and insights. Our mission is to provide a collaborative space
                        where freelancers can connect, learn, and grow. Whether you're starting your freelance journey
                        or looking to level up your skills, you'll find support, tips, and resources to help you
                        succeed. Join us and be part of a thriving community shaping the future of work in the digital
                        world.
                    </p>
                </div>
            </div>
        </div>

        <!-- Right Section (Split into Two Halves) -->
        <div class="w-full lg:w-1/2 flex gap-4">
            <!-- Left Half -->
            <div class="w-1/2 relative">
                <img
                    class="absolute -top-32 -left-20 z-10 w-40 md:w-48 lg:w-64"
                    src="/images/ring.png"
                    alt="3D Shape"
                />
                <img
                    src="/images/aboutus1.png"
                    alt=""
                    class="absolute top-10 w-full"
                />
            </div>

            <!-- Right Half -->
            <div class="w-1/2">
                <img
                    src="/images/aboutus2.png"
                    alt=""
                    class="scale-x-[-1] w-full"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import GradientCircle from '@/Components/Svg/GradientCircle.vue';
</script>
