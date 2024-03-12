import React, { RefObject, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import "./conferences-sidebar.css";
import { Item, ItemRef, TailoredConferenceType } from "@/types";

interface SidebarProps {
  cf: TailoredConferenceType[];
  handleCurrentTab: (conference: TailoredConferenceType) => void;
  currentTab: TailoredConferenceType;
}

export default function Sidebar({
  cf,
  handleCurrentTab,
  currentTab,
}: SidebarProps) {
  const [sortables, setSortables] = useState<TailoredConferenceType[]>(cf);

  const SortableList: React.FC<{
    sortable?: boolean;
    data: TailoredConferenceType[];
    onReorder: (ordered: TailoredConferenceType[]) => void;
    renderItem: (
      conference: TailoredConferenceType,
      active: boolean
    ) => JSX.Element;
    keyExtractor: (conference: TailoredConferenceType) => string;
    transitionDuration?: number;
  }> = ({
    sortable = true,
    data = [],
    onReorder,
    renderItem,
    keyExtractor,
    transitionDuration = 200,
  }) => {
    const listRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<ItemRef[]>(data.map(() => ({ current: null })));
    const [active, setActive] = useState<number | null>(null);
    const [currentOrder, setCurrentOrder] = useState<number[]>(
      data.map((d, i) => i)
    );

    const onSortStart = (
      event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) =>
      sortable &&
      sortStart(
        event,
        data,
        listRef,
        itemsRef,
        onReorder,
        setActive,
        setCurrentOrder,
        transitionDuration
      );

    return (
      <div ref={listRef} className="w-full flex flex-col gap-y-0  relative ">
        {data.map((conference, index) => (
          <div key={keyExtractor(conference)}>
            <div
              ref={itemsRef.current[index]}
              onMouseDown={onSortStart}
              onTouchStart={onSortStart}
              // eslint-disable-next-line react/no-children-prop
              children={renderItem(conference, active === index)}
            />
          </div>
        ))}
      </div>
    );
  };

  const sortStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    data: TailoredConferenceType[],
    listRef: React.RefObject<HTMLDivElement>,
    itemsRef: React.RefObject<ItemRef[]>,
    onReorder: (ordered: TailoredConferenceType[]) => void,
    setActive: React.Dispatch<React.SetStateAction<number | null>>,
    setCurrentOrder: React.Dispatch<React.SetStateAction<number[]>>,
    transitionDuration: number
  ) => {
    if ((itemsRef.current as any).length < 2) return;
    if (
      event.type === "mousedown" &&
      (event as React.MouseEvent<HTMLDivElement>).button > 0
    )
      return;
    if (
      event.type === "touchstart" &&
      (event as React.TouchEvent<HTMLDivElement>).touches.length > 1
    )
      return;

    const list = listRef.current;
    if (!list) return; // Check if listRef is valid
    if (list.classList.contains("is-sorting")) return;
    list.classList.add("is-sorting");

    const css = (item: HTMLDivElement, styles: Partial<CSSStyleDeclaration>) =>
      Object.keys(styles).forEach(
        (style) => ((item.style[style as any] as any) = styles[style as any])
      );

    css(list, {
      position: "relative",
      height: list.offsetHeight + "px",
      width: list.offsetWidth + "px",
    });

    const items = (itemsRef.current as any)
      .filter((ref: RefObject<HTMLDivElement>) => ref.current)
      .map((ref: RefObject<HTMLDivElement>, index: number) => {
        const dom = ref.current;
        if (!dom) return null; // Check if dom is valid
        return {
          index: index,
          dom: dom,
          left: dom.offsetLeft,
          top: dom.offsetTop,
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          x: dom.offsetLeft,
          y: dom.offsetTop,
          dragged: dom.contains(event.target as Node), // Ensure event.target is of type Node
        };
      })
      .filter((item: HTMLElement) => item !== null) as Item[]; // Filter out null items

    const dragged = items.find((item) => item.dragged);
    if (!dragged) return; // Check if dragged item exists
    const spacing = items[1].top - (items[0].top + items[0].height);

    let curIndex = items.indexOf(dragged);
    let newOrder = items.map((item) => item.index);

    setActive(curIndex);

    draggable(event, {
      onStart: () => {
        items.forEach((item) => {
          css(item.dom, {
            position: "absolute",
            width: item.width + "px",
            height: item.height + "px",
            transform: `translateX(${item.x}px) translateY(${item.y}px)`,
            zIndex: "2",
          });
          setTimeout(() => {
            if (item.dragged) return;
            css(item.dom, {
              transition: `transform ${transitionDuration}ms ease`,
            });
          });
        });

        css(dragged.dom, { zIndex: "3" });
      },
      onMove: (delta) => {
        const draggX = dragged.left + delta.x;
        const draggY = dragged.top + delta.y;

        const dragIndex = items.reduce((acc, item) => {
          if (item.index === 0) return acc;
          const shadowCenter = draggY + dragged.height / 2;
          const itemStart = item.top - spacing / 2;
          return (acc += shadowCenter > itemStart ? 1 : 0);
        }, 0);

        if (dragIndex !== curIndex) {
          newOrder[dragIndex] = newOrder.splice(
            curIndex,
            1,
            newOrder[dragIndex]
          )[0];
          curIndex = dragIndex;

          newOrder.reduce((acc, index) => {
            const item = items[index];
            item.y = acc;
            css(item.dom, {
              transform: `translateX(${item.x}) translateY(${item.y}px)`,
            });

            return (acc += item.height + spacing);
          }, 0);

          setCurrentOrder(
            newOrder.reduce((acc, cur, idx) => {
              (acc[newOrder[idx]] as number) = idx;
              return acc;
            }, [])
          );
        }

        css(dragged.dom, {
          transform: `translateX(${draggX}px) translateY(${draggY}px)`,
        });
      },
      onEnd: () => {
        setActive(null);

        css(dragged.dom, {
          transition: `all ${transitionDuration}ms ease`,
          transform: `translateX(${dragged.x}) translateY(${dragged.y}px)`,
        });

        setTimeout(() => {
          list.removeAttribute("style");
          list.classList.remove("is-sorting");
          items.forEach((item) => {
            item.dom.removeAttribute("style"); // Clear styles
          });
          setCurrentOrder(items.map((item) => item.index));
          onReorder(
            items.reduce((acc, cur, idx) => {
              acc[idx] = data[newOrder[idx]];
              return acc;
            }, [] as TailoredConferenceType[])
          );
        }, transitionDuration);
      },
    });
  };

  const draggable = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    {
      onStart,
      onMove,
      onEnd,
    }: {
      onStart: (startPosition: { x: number; y: number }) => void;
      onMove: (
        deltaPosition: { x: number; y: number },
        currentPosition: { x: number; y: number }
      ) => void;
      onEnd: (currentPosition: { x: number; y: number }) => void;
    }
  ) => {
    let startPosition: { x: number; y: number };
    const onDragStart = (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      const currentPosition = getPosition(e);
      onStart(startPosition);
      startPosition = currentPosition;
      const touch = e.type === "touchstart";
      window.addEventListener(
        touch ? "touchmove" : "mousemove",
        onDragMove as unknown as EventListener,
        {
          passive: false,
        }
      );
      window.addEventListener(
        touch ? "touchend" : "mouseup",
        onDragEnd as unknown as EventListener,
        false
      );
    };
    const onDragMove = (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      const currentPosition = getPosition(e);
      const deltaPosition = {
        x: currentPosition.x - startPosition.x,
        y: currentPosition.y - startPosition.y,
      };
      onMove(deltaPosition, currentPosition);
      e.preventDefault();
    };
    const onDragEnd = (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
      const currentPosition = getPosition(e);
      onEnd(currentPosition);
      const touch = e.type === "touchend";
      window.removeEventListener(
        touch ? "touchmove" : "mousemove",
        onDragMove as unknown as EventListener,
        false
      );
      window.removeEventListener(
        touch ? "touchend" : "mouseup",
        onDragEnd as unknown as EventListener,
        false
      );
    };
    const getPosition = (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
      const dragEvent = (
        "touches" in e ? e.touches[0] || e.changedTouches[0] : e
      ) as Touch | MouseEvent;
      return { x: dragEvent.pageX, y: dragEvent.pageY };
    };

    onDragStart(e);
  };

  const ListItem: React.FC<{
    conference: TailoredConferenceType;
    active: boolean;
  }> = ({ conference, active }) => (
    <div
      className={clsx(
        active && "is-active",
        "h-[72px] conference absolute mb-4 list-item border border-[#D9D9D9] text-body-1 rounded-sm"
      )}
    >
      <button
        onClick={() => handleCurrentTab(conference)}
        className={clsx(
          "bg-inherit rounded-sm flex gap-x-6 p-2 flex-start w-full h-full items-center",
          conference.id === currentTab.id ? "bg-primary" : ""
        )}
      >
        <div className="p-4 rounded-sm bg-white">
          <Image alt="arrow" src="/d-arrow.svg" width={25} height={25} />
        </div>
        {conference.name}
      </button>
    </div>
  );

  return (
    <aside className="w-[25%] min-w-[300px]">
      <SortableList
        data={sortables}
        renderItem={(conference, active) => (
          <ListItem conference={conference} active={active} />
        )}
        keyExtractor={(conference) => conference.id}
        onReorder={(ordered) => setSortables(ordered)}
      />
    </aside>
  );
}
