# Vue.js Cheat Sheet

Quick reference for common Vue directives with practical examples.

## `v-model`
Creates two-way binding between form input elements and component state.

### Prerequisites
- Use it on supported form elements like `input`, `textarea`, and `select`.
- In Vue 3 Composition API, the bound variable should be reactive (for example, `ref`).
- For custom components, the component must support the model contract (`modelValue` + `update:modelValue` by default).

### Sample code
```html
<div id="app">
  <input v-model="username" placeholder="Enter username" />
  <p>Current value: {{ username }}</p>
</div>

<script type="module">
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref("");
      return { username };
    }
  }).mount("#app");
</script>
```

### Limitations
- Works only with form-like value bindings, not arbitrary DOM properties.
- On custom components, it does not work automatically unless the component emits the expected update event.
- Modifiers like `.number` and `.trim` are useful but can change input behavior in ways that surprise users.

---

## `v-on`
Attaches event listeners to DOM elements (shorthand: `@`).

### Prerequisites
- Define the handler function in the component (`methods` or `setup` return).
- Use a valid DOM event name (`click`, `input`, `submit`, etc.).
- For form submit, usually combine with `.prevent` to stop page reload.

### Sample code
```html
<div id="app">
  <button @click="increment">Clicked {{ count }} times</button>
  <form @submit.prevent="save">
    <input v-model="note" />
    <button type="submit">Save</button>
  </form>
</div>

<script type="module">
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);
      const note = ref("");

      const increment = () => {
        count.value++;
      };

      const save = () => {
        console.log("Saved:", note.value);
      };

      return { count, note, increment, save };
    }
  }).mount("#app");
</script>
```

### Limitations
- Inline expressions become hard to maintain when logic grows.
- Some native events behave differently across element types and browsers.
- Overusing many listeners in large lists can affect performance if handlers are heavy.

---

## `v-for`
Renders a list by iterating over an array/object/range.

### Prerequisites
- Data source should be iterable (commonly an array).
- Provide a stable unique `:key` for each item when rendering components or changing lists.
- Avoid combining `v-if` and `v-for` on the same element; use a wrapper/computed filter instead.

### Sample code
```html
<div id="app">
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }} - {{ todo.done ? "Done" : "Pending" }}
    </li>
  </ul>
</div>

<script type="module">
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const todos = ref([
        { id: 1, title: "Learn directives", done: true },
        { id: 2, title: "Build mini app", done: false },
        { id: 3, title: "Review reactivity", done: false }
      ]);

      return { todos };
    }
  }).mount("#app");
</script>
```

### Limitations
- Using array index as `key` can cause rendering bugs during insert/reorder/remove.
- Very large lists can be slow without virtualization/windowing.
- Mutating nested structures incorrectly can lead to confusing update behavior.

---

## `v-bind`
Binds element attributes or component props to dynamic JavaScript expressions (shorthand: `:`).

### Prerequisites
- The bound expression must exist in component state (`data`, `computed`, or `setup` return).
- Use valid target attributes/props such as `src`, `href`, `disabled`, `class`, `style`.
- For object/array binding (`class`/`style`), keep values in Vue-friendly structures (boolean flags or key-value maps).

### Sample code
```html
<div id="app">
  <img v-bind:src="imageUrl" v-bind:alt="imageAlt" width="140" />
  <a :href="profileUrl" :title="tooltip">View Profile</a>
  <button :disabled="isSaving">Save</button>
  <p :class="{ active: isActive, muted: !isActive }">Status text</p>
</div>

<script type="module">
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const imageUrl = ref("https://picsum.photos/200");
      const imageAlt = ref("Random preview image");
      const profileUrl = ref("https://example.com/profile");
      const tooltip = ref("Open user profile");
      const isSaving = ref(false);
      const isActive = ref(true);

      return { imageUrl, imageAlt, profileUrl, tooltip, isSaving, isActive };
    }
  }).mount("#app");
</script>
```

### Limitations
- Binding to non-standard/invalid attributes may not produce expected DOM behavior.
- `v-bind` is one-way data flow; changes in the DOM do not update state (use `v-model` for input syncing).
- Complex inline expressions can reduce readability and should be moved to computed values when they grow.

---

## `v-once`
Renders an element/component once and skips future updates for that part of the template.

### Prerequisites
- Use it only for content that should remain static after first render.
- The initial render data must already be available, since later reactive changes will be ignored.
- Place it on the smallest safe subtree to avoid freezing more UI than intended.

### Sample code
```html
<div id="app">
  <h2 v-once>Welcome, {{ username }}</h2>
  <p>Live counter: {{ counter }}</p>
  <button @click="counter++">Increment</button>
</div>

<script type="module">
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref("Yasanka");
      const counter = ref(0);
      return { username, counter };
    }
  }).mount("#app");
</script>
```

### Limitations
- The `v-once` section will not react to state changes after the first render.
- Not suitable for dynamic text, localization updates, or conditionally changing UI.
- Misuse can cause stale UI that looks like reactivity is broken.
