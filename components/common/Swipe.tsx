import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeProps {
  totalItems: number;
  onSwipe: (index: number) => void;
  children: React.ReactNode;
}

export default function Swipe({ totalItems, onSwipe, children }: SwipeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (direction: "left" | "right") => {
    let newIndex = currentIndex + (direction === "left" ? -1 : 1);
    if (newIndex >= 0 && newIndex < totalItems) {
      setCurrentIndex(newIndex);
      onSwipe(newIndex);
    }
  };

  return (
    <div className="flex flex-row items-center left-0">
      {/* 上下结构：内容 + 按钮 */}

      {/* 左右滑动按钮 */}
      {/* <div className="flex gap-4 justify-center items-center"> */}
      <button
        onClick={() => paginate("left")}
        disabled={currentIndex === 0}
        className="px-4 py-2 transition-all rounded disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="w-auth">{children}</div>

      {/* <span className="text-sm font-semibold text-gray-600">
        {currentIndex + 1} / {totalItems}
      </span> */}

      <button
        onClick={() => paginate("right")}
        disabled={currentIndex === totalItems - 1}
        className="px-4 py-2 transition-all rounded disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      {/* </div> */}
    </div>
  );
}
