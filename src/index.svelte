<script>
    import { marked } from "marked";
    import Navbar from "./components/navbar.svelte";
    const toolsContent = marked(`
### Our Tools
- [pub](https://github.com/TinyTownStudio/pub) ↗
      `);

    const companyContent = marked(`
### Company
- [Who are we?](/who)
- [Team](/team)
`);

    const appsContent = marked(`
### Apps
- [ping](https://ping.tinytown.studio) ↗`);
</script>

<Navbar />
<main class="mt-10 max-w-full prose prose-zinc">
    <div
        class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    >
        <div class="prose prose-zinc">
            {@html companyContent}
        </div>
        <div class="prose prose-zinc">
            {@html toolsContent}
        </div>
        <div class="prose prose-zinc">
            {@html appsContent}
        </div>
    </div>
</main>
