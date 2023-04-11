<script>
    import { plus, minus } from "$lib/assets/icons/icons";
    import Icon from "$lib/components/Icon.svelte";
    import { fade } from "svelte/transition";

    export let title = "Test";

    let isOpen = false;

    function openAccordeon() {
        isOpen = !isOpen;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="accordeon" on:click={openAccordeon}>
    {#if !isOpen}
        <Icon icon={plus} />
    {:else}
        <Icon icon={minus} />
    {/if}
    <p>{title}</p>
</div>
{#if isOpen}
    <div class="accordeon-body" transition:fade="{{delay: 100, duration: 200}}">
        <slot />       
    </div>
{/if}   

<style>
    .accordeon {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding-left: 1rem;
        background-color: var(--tertiary-color);
        cursor: pointer;    
    }
    .accordeon-body {
        background-color: var(--bg-color-2);
        padding: 1rem;
        color: var(--font-dark-color);
    }
</style>

