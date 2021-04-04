<template>
  <div>
    <button
      role="button"
      aria-label="Toggle dark/light"
      @click.prevent="toggleTheme"
      class="toggle-theme"
    >
        <svg
          v-if="darkTheme"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
        >
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </button>
    <div @click.prevent="toggleTheme" :class="['switch', darkTheme ? 'off' : 'on']">
      <div class="switch-bubble">
        <svg
          v-if="darkTheme"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
        >
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}


.switch {
  // margin: 0.4em;
  height: 1.2em;
  width: 2.2em;
  border-radius: 1.5em;
  display: grid;
  place-items: center right;
  transition: 0.2s ease-out, box-shadow 0.08s linear;
  cursor: pointer;

  border: 1px red dashed !important;
  * {
    border: 1px red dashed;
  }

  .switch-bubble {
    transition: 0.15s ease-out;
    margin: 0 3px;
    height: 0.8em;
    width: 0.8em;
    border-radius: 50%;
  }

  &.on {
    border: 1px solid var(--dark-green);
    background-color: var(--light-green);

    .switch-bubble {
      background-color: var(--dark-green);
      // border: 0.1px solid var(--dark-green);
    }

    &:active {
      box-shadow: 0px 0px 2px black;
    }
  }

  &.off {
    border: 1px solid var(--light-green);
    background-color: var(--dark-green);
    background-color: #333;

    .switch-bubble {
      margin-right: 20px;
      background-color: var(--light-green);
      // border: 0.1px solid var(--light-green);
    }

    &:active {
      box-shadow: 0px 0px 2px white;
    }
  }
}
</style>