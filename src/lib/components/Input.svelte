<script>
	import { InputType } from "$lib/interface";

    export let value = "";
    export let type = InputType.TEXT;
    export let label = "";
    export let borderRadius = "0";

    /**
     * Allow a two ways binding on type for input
     * @param {HTMLInputElement} node
     */
    function typeAction(node) {
      node.type = type
    }
</script>

<div class="input">
    <input 
        class="field-input" 
        style:cursor="pointer"
        style:border-radius={borderRadius}
        use:typeAction 
        bind:value placeholder={label} />
</div>

<style>
    .field-input {
        padding: 0 1rem;
        height: 1.5rem;
    }
</style>
