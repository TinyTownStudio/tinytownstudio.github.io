<script>
    import Breadcrumbs from "./breadcrumbs.svelte";
    let { crumbs = [] } = $props();
</script>

<header class="h-[200px] flex flex-col items-center justify-center">
    {#if crumbs.length}
        <Breadcrumbs {crumbs} />
    {:else}
        <div class="relative h-1/2">
            <div class="h-full flex items-center justify-center">
                <h1 class="font-sm text-zinc-800 font-semibold z-10">
                    tinytown.studio
                </h1>
            </div>
        </div>
    {/if}
</header>
