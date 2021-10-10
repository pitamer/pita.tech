<template>
  <g-link class="logo" to="/">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/pita.png"
      width="100"
      height="100"
      blur="5"
    />
  </g-link>
</template>

<style lang="scss">
.logo {
  display: grid;
  place-items: center;
  padding: 0.5em;
  border-radius: 50%;

  img {
    width: 2.5em;
    height: 2.5em;
  }
}
</style>
