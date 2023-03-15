<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
};

</script>

<template>
    <div class="col-6 my-5 ">
        <div class="card d-flex flex-column-reverse align-items-center bg-dark text-light h-100 justify-content-between">
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <small v-for="tech in project.technologies" class="p-1 rounded my-3" :class="['bg-' + tech.color]">{{
                    tech.label
                }}</small>
            </div>
            <figure class="text-center h-50 w-100">
                <img :src="project.image" :alt="project.title" class="img-fluid h-100">
            </figure>
            <div class="info text-center">
                <h1 class="p-3">Progetto {{ project.title }}</h1>
                <p class="pt-4 px-2">{{ project.content }}</p>
            </div>
        </div>
    </div>
</template>