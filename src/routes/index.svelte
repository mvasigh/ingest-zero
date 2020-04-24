<script context="module">
  export async function preload(page, session) {
		console.log(session)

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    this.redirect(302, `${year}/${month}/${day}`);
  }
</script>

<script>
</script>

<style lang="scss">
  h1 {
    text-align: center;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;

    .boop {
      color: red;
    }
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>
  Ingest
  <span class="boop">Zero</span>
</h1>
