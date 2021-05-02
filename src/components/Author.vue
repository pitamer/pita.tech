<template>
  <div class="author">
    <h1 class="author__site-title">
      {{ $static.metadata.siteName.toUpperCase() }}
    </h1>

    <div class="author__section">
      <g-image
        alt="Author image"
        class="author__image"
        src="~/assets/images/pita.png"
        width="200"
        height="200"
        blur="5"
      />
      <div class="author__intro">
        <p>A tech blog</p>
        <p>by Pitamer</p>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.author {
  margin: 0 auto var(--space) auto;
  max-width: 560px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: var(--space);
  // > * {border: 1px red dashed;}

  &__section {
    display: flex;
    align-items: center;
    margin: 0.75em 0;
  }

  &__image {
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 0px 4px var(--image-shadow-color));
  }

  &__intro {
    margin: 0 0 0 1em;
    display: flex;
    flex-flow: column;
    align-items: center;
    p {
      opacity: 0.8;
      margin: 4px 0;
      text-align: left;
    }
  }

  &__site-title {
    font-family: "bungee";
    font-size: 1.9em;
    margin-bottom: 0;
  }
}
</style>
