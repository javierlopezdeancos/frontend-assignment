import React, { useState, useEffect } from 'react'
import { Pagination } from "react-headless-pagination"
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import TypographyHeader3Component from '@/components/typography/typography-header-3-component.tsx'
import { type Shows } from '@/shows/shows'
import {
  PaginationComponent,
  PaginationContentComponent,
  PaginationItemComponent,
  PaginationLinkComponent,
  PaginationNextComponent,
  PaginationPreviousComponent,
} from "@/components/pagination/pagination-component.tsx"
import CardComponent from "@/components/card/card-component.tsx"
import LazyLoadImageComponent from '@/components/lazy-load-image/lazy-load-image-component.tsx'

function ShowsComponent({ shows, className }: { shows: Shows[]; className?: string }): React.ReactElement {
  const [page, setPage] = useState<number>(0)
  const [pageShows, setPageShows] = useState<Shows[]>([])

  const pageSize: number = 20

  useEffect(() => {
    if (Array.isArray(shows) && shows.length === 0) {
      return
    }

    const startPageIndex = page * pageSize
    const endPageIndex = startPageIndex + pageSize

    setPageShows(shows.slice(startPageIndex, endPageIndex))
  }, [page, shows]);

  if (Array.isArray(pageShows) && pageShows.length === 0) {
    return <TypographyParagraphComponent>No shows found</TypographyParagraphComponent>
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <main className={`w-full flex flex-col items-start justify-center gap-4 overflow-hidden ${className}`}>
      <article id="shows-list" className="w-full my-0 ml-0 [&>li]:mt-0 flex-1 px-10 flex flex-col gap-4 overflow-auto">
        {pageShows.map((s: Shows) => (
          <CardComponent className="px-5" key={s.id}>
            <div key={s.id} className="flex items-start justify-start gap-4">
              <LazyLoadImageComponent
                image={{
                  alt: s.name,
                  height: 200,
                  src: s.image?.medium || '',
                  width: 100,
                }}
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <TypographyHeader3Component>{s.name}</TypographyHeader3Component>
                <TypographyParagraphComponent>{s.summary.replace(/[\u{0080}-\u{FFFF}]/gu,"")}</TypographyParagraphComponent>
              </div>

            </div>
          </CardComponent>
        ))}
      </article>
      <Pagination
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={10}
        edgePageCount={2}
        middlePagesSiblingCount={1}
        className="w-full h-16 px-10 border-t-1 border-t-slate-500"
        truncableText="..."
        truncableClassName=""
      >
        <PaginationComponent className="h-full flex items-center justify-start gap-2">
          <Pagination.PrevButton>
            <PaginationPreviousComponent className="has-[>svg]:px-0">
              Previous
            </PaginationPreviousComponent>
          </Pagination.PrevButton>
          <PaginationContentComponent>
            <PaginationItemComponent>
              <Pagination.PageButton
                as={<PaginationLinkComponent />}
                activeClassName=""
                inactiveClassName=""
                className=""
              />
            </PaginationItemComponent>
          </PaginationContentComponent>
          <Pagination.NextButton>
            <PaginationNextComponent>
              Next
            </PaginationNextComponent>
          </Pagination.NextButton>
        </PaginationComponent>
      </Pagination>
    </main>
  )
}

export default ShowsComponent
