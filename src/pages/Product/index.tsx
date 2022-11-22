import { useState } from "react";
import styles from "./Product.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import Filter from "./Filter";
import Order from "./Order";

export default function Product() {
  const [searchFilter, setSearchFilter] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          <h1>
            Código <span>&</span>
            <span> Doces sz</span>
          </h1>
        </div>
      </header>
      <section className={styles.product}>
        <h3 className={styles.product__title}>Produtos</h3>
        <Search searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <div className={styles.product__filter}>
          <Filter filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>
      </section>
    </main>
  );
}
