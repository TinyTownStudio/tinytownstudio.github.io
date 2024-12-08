<script>
    import { marked } from "marked";
    import Navbar from "./components/navbar.svelte";
    const who = marked(`
We build things
      `);
</script>

<Navbar crumbs={[{ href: "", label: "Who are we?" }]} />
<main class="mt-10 max-w-full prose prose-zinc">
    <div class="max-w-4xl mx-auto grid grid-cols-1">
        <div class="prose prose-zinc h-[200vh]">
            {@html who}
        </div>
    </div>
</main>
