<script lang="ts">
    interface Props {
        value?: string;
    }

    let { value = $bindable('') }: Props = $props();
</script>

<div class="p-1 -mx-1 sm:mx-5 bg-slate-200/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl sticky top-4 z-30">
    <input bind:value type="text" class="w-full px-10 py-2 rounded-xl outline-none bg-slate-200/80 dark:bg-slate-800/80" placeholder="Search"/>
    <span class="absolute start-1 p-2 opacity-60 pointer-events-none">
        <svg viewBox="0 0 24 24" class="icon h-6 w-6"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
    </span>
    {#if value}
    <button class="absolute end-1 p-2 opacity-60 hover:opacity-80" aria-label="Clear search" onclick={() => value=''}>
        <svg viewBox="0 0 24 24" class="icon h-6 w-6"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
    </button>
    {/if}
</div>