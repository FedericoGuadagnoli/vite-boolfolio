<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <div class="row d-flex g-5 flex-wrap">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </div>
</template>