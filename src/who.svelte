<script>
    import Navbar from "./_components/navbar.svelte";
    const team = [
        {
            name: "reaper",
            link: "https://reaper.is",
            about: "A dev drowing in code trying out ways to swim out while making it easier to drown and swim out easier the next time.",
            from: "In his own words",
        },
        {
            name: "mellow",
            link: "https://mellow.dev",
            about: 'Plant based minimalist. Interested in altruism, essentialism, intentionalism, and probably some other "isms".',
            from: "In his own words",
        },
    ];
</script>

<Navbar crumbs={[{ href: "/who", label: "Who?" }]} />
<main class="mt-10 max-w-full prose prose-zinc">
    <div class="max-w-4xl mx-auto grid grid-cols-1">
        {#each team as teamMember}
            <a
                href={teamMember.link}
                target="_blank"
                rel="noreferrer noopener"
                class="hover:underline-offset-4 underline hover:text-black text-zinc-800"
            >
                {teamMember.name} ↗
            </a>
            <p class="text-sm text-zinc-600 mb-0">
                <span><em>{teamMember.from}</em></span>
            </p>
            <p class="text-sm text-zinc-600">
                {teamMember.about}
            </p>
        {/each}
    </div>
</main>
