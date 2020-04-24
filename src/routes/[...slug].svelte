<script context="module">
  import { parse } from "date-fns";

  export async function preload({ params }) {
    const [year, month, day, action] = params.slug;
    const date = parse(`${year} ${month} ${day}`, "y L d", new Date());

    return { date, action };
  }
</script>

<script>
  import { onMount } from 'svelte'

  export let date;
  export let action;

  onMount(() => {
    // TODO: Parse the hash here and do sum wit it
    console.log(window.location.hash)
  })
</script>

<p>{date.toDateString()}</p>

<p>{action}</p>
