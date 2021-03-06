/** @jsxRuntime classic */
/** @jsx jsx */
import { CategoryListItem } from "lib";
import Link from "next/link";
import { jsx, Link as UiLink } from "theme-ui";

export default function Categories({
  categories,
}: {
  categories: { edges: CategoryListItem[] };
}) {
  return (
    <span>
      <span sx={{ mr: 1, color: "lightGrey" }}>Categoria:</span>
      {(categories?.edges ?? []).map((category) => (
        <Link
          key={category.node.slug}
          href={`/categorie-prodotti/${category.node.slug}`}
          sx={{ ml: 3 }}
          passHref
        >
          <UiLink>{category.node.name}</UiLink>
        </Link>
      ))}
    </span>
  );
}
