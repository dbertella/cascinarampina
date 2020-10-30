/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export default function Categories({ categories }: any) {
  return (
    <span sx={{ ml: 1 }}>
      Categoria
      {categories.edges.length > 0 ? (
        categories.edges.map((category: any) => (
          <span key={category.node.name} sx={{ ml: 1 }}>
            {category.node.name}
          </span>
        ))
      ) : (
        <span sx={{ ml: 1 }}>{categories.edges.node.name}</span>
      )}
    </span>
  );
}
