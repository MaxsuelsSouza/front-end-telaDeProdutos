<template>
  <button @click="callback">{{ value }}</button>
</template>
<script>
export default {
  name: "InputButon",
  props: {
    value: { type: String, required: true },
    callback: { type: Function, default: () => {} },
  },
};
</script>
<style scoped>
button {
  width: 100%;
  background-color: #223d5c;
  color: white;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #254974;
}
</style>