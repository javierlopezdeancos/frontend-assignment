import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Pagination } from "react-headless-pagination"
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import TypographyHeader3Component from '@/components/typography/typography-header-3-component.tsx'
import { type Show } from '@/shows/shows'
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
import getScapedTextHelper from "@/helpers/get-scaped-text-helper.ts"

function ShowsComponent({ shows, className }: { shows: Show[]; className?: string }): React.ReactElement {
  const [page, setPage] = useState<number>(0)
  const [pageShows, setPageShows] = useState<Show[]>([])

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
      <article id="shows-list" className="w-full my-0 ml-0 [&>li]:mt-0 flex-1 flex flex-col gap-0 overflow-auto">
        {pageShows.map((s: Show) => (
          <Link key={s.id} id={`shows-list-${s.id}`} to="/show/$id" params={{ id: String(s.id) }} className="not-last:border-b-1 not-last:border-b-slate-200 hover:bg-gray-50">
            <CardComponent>
              <div className="flex items-start justify-start gap-4">
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
                  <TypographyParagraphComponent>
                    {getScapedTextHelper(s.summary)}
                  </TypographyParagraphComponent>
                </div>
              </div>
            </CardComponent>
          </Link>
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
