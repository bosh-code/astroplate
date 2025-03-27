import { marked } from "marked";
import React, {
  type FC,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

type TabProps = Readonly<{
  children: ReactElement & { props: { value: string } };
}>;

const Tabs: FC<TabProps> = ({ children }) => {
  const [active, setActive] = useState<number>(0);
  const [defaultFocus, setDefaultFocus] = useState<boolean>(false);

  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (defaultFocus) {
      tabRefs.current[active]?.focus();
    } else {
      setDefaultFocus(true);
    }
  }, [active]);

  const tabLinks = Array.from(
    children.props.value.matchAll(
      /<div\s+data-name="([^"]+)"[^>]*>(.*?)<\/div>/gs,
    ),
    (match: RegExpMatchArray) => ({ name: match[1], children: match[0] }),
  );

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setActive(index);
    } else if (event.key === "ArrowRight") {
      setActive((active + 1) % tabLinks.length);
    } else if (event.key === "ArrowLeft") {
      setActive((active - 1 + tabLinks.length) % tabLinks.length);
    }
  };

  return (
    <div className="tab">
      <ul className="tab-nav">
        {tabLinks.map((item, index) => (
          <li
            key={index}
            className={`tab-nav-item ${index === active ? "active" : ""}`}
            role="tab"
            tabIndex={index === active ? 0 : -1}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onClick={() => setActive(index)}
            ref={(ref) => {
              tabRefs.current[index] = ref;
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {tabLinks.map((item, i) => (
        <div
          className={active === i ? "tab-content block px-5" : "hidden"}
          key={i}
          dangerouslySetInnerHTML={{
            __html: marked.parse(item.children),
          }}
        />
      ))}
    </div>
  );
};

export default Tabs;
