import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import FacultyCard from "./FacultyCard";
import FacultyModal from "./FacultyModal";
import SectionHeader from "../common/SectionHeader";
import { IconChevronLeft, IconChevronRight } from "../common/Icons";
import { CAROUSEL } from "../../utils/constants";

/**
 * Faculty section component - Main orchestrator
 * Manages carousel logic and modal state
 * Data can be replaced with API call in useFetchFaculty hook
 */
const Faculty = ({ facultyData }) => {
  const scrollerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollByCards = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : CAROUSEL.DEFAULT_CARD_WIDTH;
    const gap = CAROUSEL.GAP;
    const amount = (cardWidth + gap) * (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  // keyboard left/right on container
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") scrollByCards(1);
      if (e.key === "ArrowLeft") scrollByCards(-1);
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [scrollByCards]);

  const list = useMemo(() => facultyData || [], [facultyData]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Faculty"
          subtitle="Meet the educators and mentors guiding our students toward excellence."
        />

        <div className="relative">
          {/* Left button */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <IconChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right button */}
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <IconChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50"
          >
            <div className="flex gap-4 sm:gap-6">
              {list.map((item) => (
                <div key={item.id} data-card>
                  <FacultyCard item={item} onOpen={setSelected} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <FacultyModal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </section>
  );
};

export default Faculty;
