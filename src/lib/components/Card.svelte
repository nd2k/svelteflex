<div class="card">
    <slot />
</div>

<style>
    .card {
        width: 50%;
        height: 50%;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        border-radius: 1rem;
        background-color: var(--bg-color-2);
        padding: 1rem;
    }
</style>