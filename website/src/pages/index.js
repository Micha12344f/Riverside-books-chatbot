import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

const highlights = [
  {
    title: "Local Semantic Retrieval",
    text: "The chatbot uses local embeddings and ranking logic instead of defaulting to an API-backed LLM.",
  },
  {
    title: "Visible Match Reasoning",
    text: "The project includes a live test runner and notebooks so the ranking behavior is easy to inspect.",
  },
  {
    title: "Safe By Design",
    text: "It declines weak matches instead of confidently returning the wrong answer.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Riverside Books Chatbot"
      description="Documentation site for the Riverside Books FAQ chatbot"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Riverside Books</p>
          <h1 className={styles.title}>A small chatbot with unusually visible reasoning.</h1>
          <p className={styles.copy}>
            This site explains a FAQ chatbot built around local semantic retrieval,
            safe rejection behavior, and a notebook-friendly inspection flow.
          </p>
          <div className={styles.actions}>
            <a className="button button--primary button--lg" href="/docs/overview">
              Open the docs
            </a>
            <a className="button button--secondary button--lg" href="/docs/live-test">
              See the live test flow
            </a>
          </div>
        </section>

        <section className={styles.grid}>
          {highlights.map((item) => (
            <article key={item.title} className={clsx(styles.card)}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
