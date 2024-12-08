<script>
    import Navbar from "./components/navbar.svelte";
    const team = [
        {
            name: "reaper",
            link: "https://reaper.is",
            // TODO: add about section handling
            about: "",
        },
        {
            name: "mellow",
            link: "https://mellow.dev",
        },
    ];
</script>

<Navbar crumbs={[{ href: "/team", label: "team" }]} />
<main class="mt-10 max-w-full prose prose-zinc">
    <div class="max-w-4xl mx-auto grid grid-cols-1">
        {#each team as teamMember}
            <a
                href={teamMember.link}
                class="hover:underline-offset-4 underline hover:text-black text-zinc-600"
            >
                {teamMember.name} ↗
            </a>
        {/each}
    </div>
</main>
