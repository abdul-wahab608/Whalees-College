import React, { useMemo, useState, useEffect, useCallback } from "react";
import FacultyCard from "./FacultyCard";
import FacultyModal from "./FacultyModal";
import SectionHeader from "../common/SectionHeader";
import { IconChevronLeft, IconChevronRight } from "../common/Icons";

/**
 * Faculty section component - Main orchestrator
 * Manages carousel logic and modal state
 * Data can be replaced with API call in useFetchFaculty hook
 */
const Faculty = ({ facultyData }) => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 2; // Fixed at 2 cards per page

  const list = useMemo(() => facultyData || [], [facultyData]);

  // Calculate number of pages
  const totalPages = Math.ceil(list.length / cardsPerPage);

  // Navigate to next page (circular)
  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  // Navigate to previous page (circular)
  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Function to scroll to specific page
  const scrollToPage = useCallback((pageIndex) => {
    setCurrentPage(pageIndex);
  }, []);

  // keyboard left/right navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleNext, handlePrev]);

  // Get current visible cards
  const visibleCards = useMemo(() => {
    const startIndex = currentPage * cardsPerPage;
    return list.slice(startIndex, startIndex + cardsPerPage);
  }, [list, currentPage, cardsPerPage]);

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
            onClick={handlePrev}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Previous page"
          >
            <IconChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right button */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Next page"
          >
            <IconChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Carousel Container - Shows only 2 cards */}
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 transition-all duration-500 ease-in-out">
              {visibleCards.map((item) => (
                <div key={item.id} className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] flex-shrink-0">
                  <FacultyCard item={item} onOpen={setSelected} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? 'bg-blue-600 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
                aria-current={currentPage === index ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <FacultyModal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </section>
  );
};

export default Faculty;
