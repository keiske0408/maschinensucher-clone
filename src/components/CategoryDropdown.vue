<template></template>

<script>
export default {
  name: "CategoryHeader",
  data() {
    return {
      showDropdown: false,
      selectedOption: "Relevanz",
      sortOptions: [
        "Relevanz",
        "Preis aufsteigend",
        "Preis absteigend",
        "Neueste zuerst",
        "Älteste zuerst",
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
      this.$emit("sort-changed", option);
    },
  },
};
</script>
