<script>
	import Accordeon from "$lib/components/Accordeon.svelte";
    import Input from "$lib/components/Input.svelte";
    import Button from "$lib/components/Button.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import { plus } from "$lib/assets/icons/icons";
	import { Color, alignFlexMap, directionFlexMap, justifyFlexMap } from "$lib/interface";
    import { theme } from "$lib/store/store";
	import Flex from "$lib/components/Flex.svelte";

    let colorLabel = "";
    let colorValue = "";

    function addColor() {
        let color = new Color(colorLabel, colorValue);
        console.log(color);
    }

</script>
<Flex 
    class="full-width"
    direction={directionFlexMap.COLUMN}
    justify={justifyFlexMap.CENTER}
    align={alignFlexMap.STRETCH}>
    <h2>Initiate your SvelteKit Project</h2>
    <Accordeon
        title="Choose your colors to add to your theme's project">
        Add colors to your theme:
        <Flex
            justify={justifyFlexMap.EVENLY}>
            <Input label="Color Label" borderRadius="1rem" bind:value={colorLabel} />
            <Input label="Theme Label" borderRadius="1rem" bind:value={colorLabel} />
            <Input type="color" borderRadius="1rem" bind:value={colorValue} />
            <Button size="2" borderRadius="50%" onClick={addColor} isRound={true}>
                <Icon icon={plus} />
            </Button>
        </Flex>
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
</Flex>

<style>
    h2 {
        color: var(--secondary-color);
    }
</style>