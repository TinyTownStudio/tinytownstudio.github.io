<script>
    import Breadcrumbs from "./breadcrumbs.svelte";
    let { crumbs = [] } = $props();
</script>

<header class="h-[200px] flex flex-col items-center justify-center">
    <div class="relative h-1/2">
        <div class="h-full flex items-center justify-center">
            <h1 class="font-sm text-zinc-800 font-semibold z-10">
                tinytown.studio
            </h1>
            <svg
                class="h-full w-full absolute top-0 left-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    class="fill-color"
                    d="M34.6,-59.8C46.2,-53.3,57.9,-46.7,65.6,-36.7C73.3,-26.8,77,-13.4,72.1,-2.8C67.2,7.7,53.7,15.5,47.9,28.7C42.1,42,44.1,60.9,37.4,73.5C30.7,86.1,15.3,92.4,3.3,86.6C-8.7,80.9,-17.4,63,-25.3,51.1C-33.3,39.3,-40.7,33.5,-52.9,26C-65.2,18.5,-82.3,9.2,-84.3,-1.1C-86.3,-11.5,-73.1,-23.1,-64.7,-37.3C-56.3,-51.5,-52.8,-68.3,-42.8,-75.9C-32.8,-83.4,-16.4,-81.5,-2.4,-77.3C11.5,-73,23,-66.4,34.6,-59.8Z"
                    transform="translate(100 100)"
                />
            </svg>
        </div>
    </div>
    {#if crumbs.length}
        <Breadcrumbs {crumbs} />
    {/if}
</header>

<style>
    .fill-color {
        fill: theme("colors.zinc.100");
    }
</style>
