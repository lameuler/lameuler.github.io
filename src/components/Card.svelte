<script lang="ts">
	interface Props {
		name: string
		description: string
		tags: string[]
		github: string | boolean | undefined
		website: string | boolean | undefined
		type: string | undefined
	}

	let {
		name,
		description,
		tags,
		github,
		website,
		type
	}: Props = $props()

	let gh = $derived(typeof github === 'string' ? 'https://github.com/'+github : (github ? 'https://github.com/lameuler/'+name : false))
	let site = $derived(typeof website === 'string' ? (website.startsWith('/') ? 'https://ler.sg/'+website : website) : (website ? 'https://ler.sg/'+name : false))

	const base = (import.meta.env.SITE ?? '').replace(/^http:/, 'https://')
	let [ href, title ] = $derived.by(() => {
		if (type === 'page') {
			return [base.replace(/\/$/, '') + '/' + name + '/', 'Visit page']
		} else if (type === 'npm') {
			return ['https://www.npmjs.com/package/' + name, 'View on npm']
		} else {
			return []
		}
	})
</script>

<li class="bg-slate-100/70 dark:bg-slate-900/70 p-2 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 transition-shadow">
	<div class="flex justify-between">
		{#if href}
			<a {href} {title} class="flex gap-1 items-center font-semibold underline text-lg p-2 group">
				{name}
				<svg viewBox="0 0 24 24" class="icon h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:scale-110 transition-[opacity,transform]">
					{#if type === 'npm'}
						<path d="M1 8h22v7h-12v2h-4v-2h-6z" /><path d="M7 8v7" /><path d="M14 8v7" /><path d="M17 11v4" /><path d="M4 11v4" /><path d="M11 11v1" /><path d="M20 11v4" />
					{:else}
						<path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
					{/if}
				</svg>
			</a>
		{:else}
			<span class="font-semibold text-lg p-2">{name}</span>
		{/if}
		{#if gh}
		<a href={gh} title="View on GitHub" class="p-1 text-gray-700 dark:text-gray-200 opacity-70 hover:opacity-100" aria-label="View on GitHub">
			<svg class="icon inline h-6 w-6" viewBox="0 0 24 24">
				<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
			</svg>
		</a>
		{/if}
	</div>
	{#if description}
	<p class="text-gray-600 dark:text-gray-400 px-2 pb-1">
		{description}
	</p>
	{/if}
	<div class="p-1 flex flex-wrap gap-1 text-gray-700 dark:text-gray-300">
		{#each tags as tag}
		<span class="px-3 py-0.5 rounded-full bg-slate-300/60 dark:bg-slate-700/60">{tag}</span>
		{/each}
		{#if site}
		<a href={site} class="font-medium px-3 py-0.5 rounded-full bg-slate-300/60 dark:bg-slate-700/60 hover:bg-slate-400/60 dark:hover:bg-slate-600/60">
			Find out more
			<svg viewBox="0 0 24 24" class="icon h-5 w-5 inline mb-0.5 -mx-0.5"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
		</a>
		{/if}
	</div>
</li>