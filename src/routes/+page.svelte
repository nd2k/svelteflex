<script>
    import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
    import { theme } from "$lib/store/store";
    import { goto } from "$app/navigation";
    let projects = [];

    function createProject() {
        goto("/initiate")
    }

</script>

<div class="home-page">
    <div class="starting-hero">
        {#if projects.length === 0}
        <p>No existing project. Please start the creation of one project by clicking on
        the following button.</p>
        <Input label="Project Name" borderRadius="1rem" bind:value={$theme.projectName} />
        <Button size="10" borderRadius="1rem" onClick={createProject}>
            Create Project
        </Button>
        {:else}
            <h1>Existing projects:</h1>
        {/if}
    </div>
</div>

<style>
    .home-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .starting-hero {
        margin: 1rem auto;
        width: 75%;
        text-align: center;
    }
</style>


