<template>
  <div>
    <label for="">{{ label }}</label> <br />
    <input :placeholder="placeHolder" :type="type" />
  </div>
</template>
<script>
export default {
  name: "BtnInput",
  props: {
    label: { type: String, required: true },
    placeHolder: { type: String },
    type: { type: String, default: "text" },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
input {
  width: 100%;
  padding: 7px 10px;
  margin: 8px 0px;
  display: inline-block;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>