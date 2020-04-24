<style lang="scss">
  // Theme variables
  :global(:root) {
    --theme-primary-hue: 260;
  }

  :global(body) {
    background-color: var(--theme-color);
  }
</style>

<slot />
