<template>
  <g-link class="logo" to="/">
	{{ $static.metadata.siteName.toUpperCase() }}
    <svg
      class="feather feather-sun"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="1" x2="1" y2="12"></line>
      <line x1="1" y1="12" x2="12" y2="23"></line>
      <line x1="1" y1="12" x2="23" y2="12"></line>
    </svg>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  background-color: #fafafa;
  height: 1.2em;
  width: 1.2em;
  display: grid;
  place-items: center;
  margin: 0.5em;
  text-decoration: none;
  color: var(--body-color) !important;
  //   font-size: 0.9em;
  border-radius: 0.25em;
  padding: 0;

  &:hover {
    .feather {
      opacity: 1;
    }
  }

  .feather {
    opacity: 0.55;
    transition: opacity 0.1s linear;
  }
}
</style>
