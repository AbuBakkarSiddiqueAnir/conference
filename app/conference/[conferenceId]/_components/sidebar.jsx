import React, {
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { TweenLite } from "./sortable";

const Sidebar = ({ cf, handleCurrentTab, currentTab }) => {
  const [sortables, setSortables] = useState(cf);
  const containerRef = useRef(null);

  const arrayMove = (from, to) => {
    let array = [...sortables];
    array.splice(to, 0, array.splice(from, 1)[0]);
    console.log(array);
    setSortables(array);
  };
  // eslint-disable-next-line react/display-name
  const Draggable = forwardRef(
    ({ children, dragAction, start, end, index, rowSize, layout }, ref) => {
      useEffect(() => {
        const onMouseDown = (event) => {
          event.preventDefault();
          let startY = event.clientY;

          const onMouseMove = (event) => {
            if (!ref.current) return;
            event.preventDefault();

            const deltaY = event.clientY - startY;
            const newPosition = ref.current.offsetTop + deltaY;

            // console.log(deltaY, startY);
            const maxY =
              ref.current.parentElement.offsetHeight - ref.current.offsetHeight;

            const newY = Math.max(0, Math.min(newPosition, maxY));

            ref.current.style.top = `${newY}px`;

            startY = event.clientY;

            layout();
          };

          const onMouseUp = () => {
            if (!ref.current) return;

            containerRef.current.removeEventListener("mousemove", onMouseMove);
            containerRef.current.removeEventListener("mouseup", onMouseUp);
            for (let prop in end) {
              ref.current.style[prop] = end[prop];
            }
          };

          containerRef.current.addEventListener("mousemove", onMouseMove);
          containerRef.current.addEventListener("mouseup", onMouseUp);

          for (let prop in start) {
            ref.current.style[prop] = start[prop];
          }
        };
        const onMouseUpELement = (event) => {
          if (!ref.current) return;
          const newIndex = Math.round(ref.current.offsetTop / rowSize);
          if (newIndex !== index) {
            arrayMove(index, newIndex);
          }
        };
        ref.current.addEventListener("mousedown", onMouseDown);
        ref.current.addEventListener("mouseup", onMouseUpELement);
      }, [ref]);

      return (
        <li
          ref={ref}
          className="h-[72px] absolute list-item border border-[#D9D9D9] text-body-1 rounded-sm"
        >
          {children}
        </li>
      );
    }
  );

  const Sortable = ({ index, rowSize, conference }) => {
    const elementRef = useRef(null);

    const layout = () => {
      TweenLite.to(elementRef.current, 0.14, { top: index * rowSize });
    };

    useEffect(() => {
      if (elementRef.current) layout();
    }, []);

    return (
      <Draggable
        ref={elementRef}
        layout={layout}
        index={index}
        rowSize={rowSize}
        start={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 16px 32px 0px",
          zIndex: 100,
          transform: "scale(1.05)",
        }}
        end={{
          boxShadow: "none",
          zIndex: 0,
          transform: "scale(1)",
        }}
      >
        <button
          onClick={() => handleCurrentTab(conference)}
          className={`bg-inherit rounded-sm flex gap-x-6 p-2 flex-start w-full h-full items-center ${
            conference.id === currentTab.id ? "bg-primary" : ""
          }`}
        >
          <div className="p-4 rounded-sm bg-white">
            <Image alt="arrow" src="/d-arrow.svg" width={25} height={25} />
          </div>
          {conference.name}
        </button>
      </Draggable>
    );
  };

  return (
    <aside className="w-[25%] min-w-[300px]">
      <ul
        ref={containerRef}
        className="w-full flex flex-col gap-y-6 h-[384px] relative"
      >
        {sortables.map((conference, index) => (
          <Sortable
            key={conference.id}
            conference={conference}
            index={index}
            rowSize={100}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
