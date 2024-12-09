<script>
    let { crumbs = [] } = $props();
</script>

<div class="mt-10 w-full sticky top-0 z-20 h-header-height">
    <div
        class="flex h-header-height w-full items-center px-page-gutter before:absolute before:inset-0 before:z-[-1] before:bg-b-low [@supports(backdrop-filter:blur(0))]:before:bg-b-low-a [@supports(backdrop-filter:blur(0))]:before:backdrop-blur-md"
    >
        <div class="mx-auto flex w-full max-w-4xl items-center">
            <nav>
                <ul role="list" class="flex flex-wrap items-center">
                    <li
                        class="text-md lowercase after:text-f-med after:mx-[1ch] after:content-['/']"
                    >
                        <a href="/" class="focus:underline focus:outline-none"
                            >tinytown.studio</a
                        >
                    </li>
                    {#each crumbs as crumb}
                        <li
                            class="text-md lowercase after:text-f-med last:truncate [&amp;:not(:last-child)]:after:mx-[1ch] [&amp;:not(:last-child)]:after:content-['/']"
                        >
                            <a
                                href={crumb.href ?? "?#"}
                                class="focus:underline focus:outline-none font-semibold italic font-serif"
                                aria-label="Return to top of page"
                                >{crumb.label}</a
                            >
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
    </div>
</div>
