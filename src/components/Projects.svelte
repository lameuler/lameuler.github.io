<script lang="ts">
    import Fuse from 'fuse.js'
    import Search from '@components/Search.svelte'
    import Card from './Card.svelte'

    interface Project {
        description: string,
        tags: string[]
        github?: string | boolean
        website?: string | boolean
    }

    export let projects: {[name: string]: Project}

    let value = ''

    const items = Object.entries(projects).map(([key, value]) => ({ name: key, ...value }))
    $: view = value ? fuse.search(value).map(i => i.item) : items

    const fuse = new Fuse(items, {
        keys: ['name', 'description']
    })
</script>

<Search bind:value/>
<ul class="grid md:grid-cols-2 gap-2 sm:p-6 min-h-48">
    {#each view as value}
        <Card name={value.name} description={value.description} tags={value.tags} github={value.github ?? true} website={value.website ?? false}/>
    {:else}
        <span class="text-gray-600 dark:text-gray-400 px-6 py-4">No results found.</span>
    {/each}
</ul>