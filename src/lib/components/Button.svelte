<script>
    export let size = "0";
    export let borderRadius = "0";
    export let onClick = () => console.log("test");
    const style = `
        width: ${size}rem; 
        border-radius: ${borderRadius}   
    `;
</script>

<button {style} on:click={onClick}>
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