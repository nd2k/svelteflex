<script>
    export let size = "0";
    export let borderRadius = "0";
    export let isRound = false;
    export let onClick = () => console.log("test");

    /**
     * Compute style for Button component
     * @param {HTMLButtonElement} node
     */
    function computeStyle(node) {
        let style = "";
        if (isRound) {
            style = `width: ${size}rem; height: ${size}rem;`;
        } else {
            style = `width: ${size}rem; `;
        }
        style += `border-radius: ${borderRadius} `;
        // @ts-ignore
        node.style = style;
    }
</script>

<button 
    type="button"
    on:click={onClick}
    style:width={`${size}rem`}
    style:height={isRound ? `${size}rem` : `2rem`}
    style:border-radius={borderRadius}>
    <slot />
</button>

<style>
    button {
        cursor: pointer;
        background-color: var(--tertiary-color);
        color: var(--font-light-color);
        border-radius: 1rem;
        font-size: 1rem;
        padding: 0.5rem 0;
        margin: 1rem;
        border: none;
    }
</style>