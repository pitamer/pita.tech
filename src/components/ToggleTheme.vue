<template>
  <div
    @click.prevent="toggleTheme"
    :class="['switch', darkTheme ? 'off' : 'on']"
    tabindex="0"
  >
    <div class="switch-bubble">
      <svg
        v-if="darkTheme"
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
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg
        v-else
        class="feather feather-moon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;

      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
    },
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  },
};
</script>

<style lang="scss">
.switch {
  background-color: black;
  height: 24px;
  width: 46px;
  border-radius: 0.3em;
  margin: 0.5em;
  display: grid;
  place-items: center right;
  transition: 0.2s ease-out, box-shadow 0.08s linear;
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 3px 1px var(--body-color);
  }

  &:hover {
    .switch-bubble {
      .feather {
        opacity: 1;
      }
    }
  }

  .switch-bubble {
    background-color: #fafafa;
    height: 22px;
    width: 22px;
    border-radius: 5px;

    display: grid;
    place-items: center;
    margin: 0 1px;
    transition: 0.2s ease-out;
    
    .feather {
      opacity: 0.55;
      transition: opacity 0.1s linear;
    }
  }

  &.off {
    .switch-bubble {
      margin-right: 23px;
    }
  }
}
</style>
