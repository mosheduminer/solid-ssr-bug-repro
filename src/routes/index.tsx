import { children, Component, For } from "solid-js";
import { ResolvedChildren } from "solid-js/types/reactive/signal";
import Counter from "~/components/Counter";
import "./index.css";

const Comp: Component = (props) => {
  const c = children(() => props.children);
  return (
    <For each={c() as ResolvedChildren[]}>
      {(item, index) => {
        console.log(`This won't log ${item}`)
        return (
          <div>
            {index()}: {item}
          </div>
        );
      }}
    </For>
  );
};

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Comp>
        <For each={[...Array(5).keys()]}>
          {num => {
            console.log(`This logs ${num}`)
            return (
              <div>{num}</div>
            )
          }}
        </For>
      </Comp>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
