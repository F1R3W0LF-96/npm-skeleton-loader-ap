# 🦴 Skeleton UI Components

A customizable set of Skeleton components for React — great for building smooth loading placeholders for images, paragraphs, and general UI blocks.

---

## 🔧 Components

### `Skeleton`

The base skeleton block. Handles layout, shape, and optional image placeholders.

#### Props

| Prop           | Type                    | Description                                                                 |
|----------------|-------------------------|-----------------------------------------------------------------------------|
| `width`        | `string \| number`      | Width of the skeleton. Defaults to `'100%'`.                               |
| `height`       | `string \| number`      | Height of the skeleton. Defaults to `'1rem'`.                              |
| `circle`       | `boolean`               | Makes the skeleton circular.                                               |
| `borderRadius` | `string \| number`      | Border radius for the skeleton (ignored if `circle` is true).              |
| `placeholder`  | `boolean \| string`     | If `true`, uses default placeholder image (`/Images/loader.gif`). Or pass a URL. |
| `opacity`      | `number \| string`      | Opacity value between 0 and 1 or as a string percentage.                   |

---

### `SkeletonImage`

Image-specific skeleton wrapper. Supports circular or rectangular shapes.

#### Props

Inherits from `Skeleton`, plus:

| Prop     | Type               | Description                                                               |
|----------|--------------------|---------------------------------------------------------------------------|
| `size`   | `number`           | Sets both `width` and `height`. Ignored if `width` or `height` is provided. |
| `circle` | `boolean`          | Defaults to `true` if `size` is passed.                                   |

---

### `SkeletonParagraph`

Multi-line skeleton block for simulating paragraph/text content.

#### Props

| Prop           | Type                       | Description                                               |
|----------------|----------------------------|-----------------------------------------------------------|
| `rows`         | `number`                   | Number of lines. Default is `3`.                          |
| `widths`       | `(string \| number)[]`     | Optional array of widths for each line.                  |
| `lineHeight`   | `string \| number`         | Height of each line. Default is `'1rem'`.                |
| `spacing`      | `string \| number`         | Space between lines. Default is `'0.5rem'`.              |
| `placeholder`  | `boolean \| string`        | Uses image placeholder if `true` or string path provided. |
| `borderRadius` | `string \| number`         | Radius for each line.                                     |
| `opacity`      | `number \| string`         | Line opacity.                                             |

---

### `SkeletonClientWrapper`

Client-side wrapper that shows skeletons during a simulated loading state.

#### Props

| Prop         | Type                        | Description                                                 |
|--------------|-----------------------------|-------------------------------------------------------------|
| `loadertime` | `number`                    | Duration in milliseconds to show skeleton. Default: `5000`. |
| `type`       | `'Image' \| 'Paragraph'`    | Determines which component (`SkeletonImage`, `SkeletonParagraph`) to show. |

Inherits all props from `Skeleton`, `SkeletonImage`, or `SkeletonParagraph` depending on type.

---

## 🪄 useSkeleton Hook

Simple loading hook that returns `true` for a specified time:

```tsx
const loading = useSkeleton(3000); // true for 3 seconds

🖼 Placeholder Image
If using placeholder, ensure the image file is in /public/Images/loader.gif. You can override with a custom image path:


<Skeleton placeholder /> // uses default
<Skeleton placeholder="/Images/my-spinner.gif" /> // custom
📦 Example Usage

<SkeletonClientWrapper
  type="Image"
  size={80}
  circle
  placeholder
  loadertime={3000}
/>

<SkeletonClientWrapper
  type="Paragraph"
  rows={4}
  widths={['80%', '90%', '100%', '70%']}
  placeholder
  spacing="1rem"
/>