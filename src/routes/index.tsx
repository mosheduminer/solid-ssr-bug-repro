import { children, Component, For, JSX, Match, Switch } from "solid-js";
import { ResolvedChildren } from "solid-js/types/reactive/signal";
import Counter from "~/components/Counter";
import "./index.css";

const Wrapper: Component = (props) => {
  const c = children(() => props.children);
  return (
    <For each={c() as unknown as { num: number }[]}>
      {(item, index) => {
        console.log(`This won't log ${item}`);
        return (
          <div>
            {index()}: {item.num}
          </div>
        );
      }}
    </For>
  );
};

const Inner = (props: { num: number }) => {
  return props as unknown as JSX.Element;
};

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Wrapper>
        <For each={[...Array(5).keys()]}>
          {(num) => {
            console.log(`This logs ${num}`);
            return <Inner num={num} />;
          }}
        </For>
      </Wrapper>
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
