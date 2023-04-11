<script>
	import Accordeon from "$lib/components/Accordeon.svelte";
    import Input from "$lib/components/Input.svelte";
    import Button from "$lib/components/Button.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import { plus } from "$lib/assets/icons/icons";
	import { Color } from "$lib/interface";
    import { theme } from "$lib/store/store";

    let colorLabel = "";
    let colorValue = "";

    function addColor() {
        let color = new Color(colorLabel, colorValue);
        
    }

</script>
<div class="initiate-page">
    <h2>Initiate your SvelteKit Project</h2>
    <Accordeon
        title="Choose your colors to add to your theme's project">
        Add colors to your theme:
        <div class="flex">
            <Input label="Color label" borderRadius="1rem" bind:value={colorLabel} />
            <Input type="color" borderRadius="1rem" bind:value={colorValue} />
            <Button size="2" borderRadius="50%" onClick={addColor}>
                <Icon icon={plus} />
            </Button>
        </div>
        <!-- <div class="result">
            {#if theme.selectedColors.length > 0}
                Your selected colors: 
                {#each theme.selectedColors as color}
                    {color.label} --- {color.value}
                {/each}
            {/if}
        </div> -->
    </Accordeon>
    <Accordeon
        title="Choose your font">

    </Accordeon>
</div>

<style>
    .initiate-page {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 1rem;
        color: var(--font-light-color);
    }
    h2 {
        color: var(--secondary-color);
    }
    .flex {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
        padding: 1rem;
    }
</style>