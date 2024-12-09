<script>
    import Navbar from "./_components/navbar.svelte";
    import content from "./_content/why.json";
    import { marked } from "marked";
    const parsedContent = marked(content.data);
</script>

<Navbar crumbs={[{ href: "/why", label: "Why?" }]} />
<main class="mt-10 max-w-full prose prose-zinc">
    <article class="max-w-4xl mx-auto grid grid-cols-1">
        {@html parsedContent}
    </article>
</main>
