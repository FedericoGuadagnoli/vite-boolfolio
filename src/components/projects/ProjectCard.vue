<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean }
};

</script>

<template>
    <div class="col-6 my-5 ">
        <div
            class="card d-flex flex-column-reverse align-items-center bg-dark text-light h-100 justify-content-between  p-3">
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <small v-for="tech in project.technologies" class="p-1 rounded my-3" :class="['bg-' + tech.color]">{{
                    tech.label
                }}</small>
            </div>
            <div>
                <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                    class="btn btn-success">Dettagli
                </RouterLink>
            </div>
            <figure class="text-center h-50 w-100">
                <img :src="project.image" :alt="project.title" class="img-fluid h-100">
            </figure>
            <div class="info d-flex flex-column gap-3 justify-content-center align-items-center">
                <h1 class="text-center">Progetto {{ project.title }}</h1>
                <p class="text-center">{{ project.content }}</p>
                <a v-if="isDetail" :href="project.link_github" class="btn btn-primary">Link GitHub</a>
                <p v-if="isDetail">Tipo di progetto:
                    <strong>{{ project.type.label }}</strong>
                </p>
            </div>
        </div>
    </div>
</template>