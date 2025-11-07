import { CategoryListItem } from "lib";
import {Link} from "components/ui/Link";
import styles from "./categories.module.css";

export default function Categories({
  categories,
}: {
  categories: { edges: CategoryListItem[] };
}) {
  return (
    <span>
      <span className={styles.label}>Categoria:</span>
      {(categories?.edges ?? []).map((category) => (
        <Link
          key={category.node.slug}
          href={`/categorie-prodotti/${category.node.slug}`}
          className={styles.link}
        >
          {category.node.name}
        </Link>
      ))}
    </span>
  );
}
