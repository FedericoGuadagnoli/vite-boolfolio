<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: null
        }
    },
    methods: {
        getProject() {
            const e = apiBaseUrl + 'projects/' + this.$route.params.id;
            axios.get(e).then(res => {
                this.project = res.data;
            })
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <ProjectCard :isDetail="true" :project="project"></ProjectCard>
    </div>
    <div class="text-center py-5">
        <RouterLink class="btn btn-danger" :to="{ name: 'home' }">Torna alla Home</RouterLink>
    </div>
</template>