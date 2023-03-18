<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'CategoryProjectPage',
    components: { ProjectsList },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        getProject() {
            const e = `${apiBaseUrl}categories/${this.$route.params.id}/projects`;
            axios.get(e).then(res => {
                this.projects = res.data;
            });
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <h1 class="text-center py-5">Tipi di progetto {{ projects[0].type.label }}</h1>
    <ProjectsList class="d-flex flex-wrap justify-content-center" :projects="projects"></ProjectsList>
    <div class="text-center py-3">
        <RouterLink class="btn btn-primary" :to="{ name: 'home' }">Torna alla Home</RouterLink>
    </div>
</template>