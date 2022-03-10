<script context="module">
	import { getAllPosts } from '../../static/a';

export async function get() {
	return { body: await getAllPosts() };
}
</script>

<script>

let body;

</script>

{body}

<!-- <ul>
	{#each body as file}
		<li>{file}</li>
	{/each}
</ul> -->


