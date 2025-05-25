import React from 'react'
import ReactCountryFlagComponent from "react-country-flag"
import { Star as StarIcon } from 'lucide-react'
import { type Show } from '@/shows/shows'
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import TypographyHeader2Component from '@/components/typography/typography-header-2-component.tsx'
import TypographyHeader3Component from '@/components/typography/typography-header-3-component'
import LazyLoadImageComponent from '@/components/lazy-load-image/lazy-load-image-component.tsx'
import BadgeComponent from '@/components/badge/badge-component.tsx'
import SeparatorComponent from '@/components/separator/separator-component.tsx'
import getYearHelper from '@/helpers/get-year-helper.ts'
import getSpanishDayOfWeekHelper, { type EnglishDaysOfWeek } from '@/helpers/get-spanish-day-of-week-helper.ts'

function ShowComponent({ show, className }: { show: Show; className?: string }): React.ReactElement {
  const premieredYear = getYearHelper(show.premiered)
  const endedYear = getYearHelper(show.ended)
  const spanishDayOfTheWeek = getSpanishDayOfWeekHelper(show.schedule.days[0] as EnglishDaysOfWeek)

  return (
    <main className={`w-full px-10 py-5 flex flex-col items-start justify-start gap-4 overflow-hidden ${className}`}>
      <div key={show.id} className="flex items-start justify-start gap-8">
        <LazyLoadImageComponent
          image={{
            alt: show.name,
            height: 200,
            src: show.image?.medium || '',
            width: 300,
          }}
        />
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex items-center justify-start gap-2">
            <TypographyHeader2Component>{show.name}</TypographyHeader2Component>
            {show.rating?.average && (
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-start gap-1">
                  {(() => {
                    const stars = new Array(Math.floor(show.rating.average)).fill(0)

                    stars.map((_, i) => {
                      stars[i] = <StarIcon key={i} size={16} className="text-yellow-500" />
                    })

                    if (Math.floor(show.rating.average) < show.rating.average) {
                      stars.push(<StarIcon key={stars.length} size={16} className="text-gray-400" />)
                    }

                    return stars
                  })()}
                </div>
                <TypographyParagraphComponent>{show.rating.average}</TypographyParagraphComponent>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex items-start justify-start gap-2">
              {show.genres.map((genre) => (
                <BadgeComponent key={genre}>{genre}</BadgeComponent>
              ))}
            </div>
            <TypographyParagraphComponent>
              {show.summary.replace(/[\u{0080}-\u{FFFF}]/gu,"")}
            </TypographyParagraphComponent>
          </div>
          <SeparatorComponent />
          <div className="flex flex-col items-start justify-start gap-4">
            <TypographyHeader3Component>
              Información
            </TypographyHeader3Component>
            <div className="flex flex-col items-start justify-start gap-0">
              <div className="flex items-start justify-start gap-4">
                <TypographyParagraphComponent className='font-medium'>
                  Puedes verlo en:
                </TypographyParagraphComponent>
                <div className="flex items-center justify-center gap-2">
                  <ReactCountryFlagComponent countryCode={show.network.country.code}
                    svg
                    style={{
                        width: '1em',
                        height: '1em',
                    }}
                    title={show.network.country.name}
                  />
                  <TypographyParagraphComponent>
                    <a className="font-semibold hover:underline" href={show.network.officialSite} >{show.network.name}</a>
                    {` (${premieredYear})-(${endedYear})`}
                  </TypographyParagraphComponent>
                </div>
              </div>
              <div className="flex items-start justify-start gap-4">
                <TypographyParagraphComponent className='font-medium'>
                  Puedes verlo el dia:
                </TypographyParagraphComponent>
                <TypographyParagraphComponent>
                  {`El ${spanishDayOfTheWeek} a las ${show.schedule.time}`}
                </TypographyParagraphComponent>
              </div>
              <div className="flex items-start justify-start gap-4">
                <TypographyParagraphComponent className='font-medium'>
                  Estado:
                </TypographyParagraphComponent>
                <TypographyParagraphComponent>
                  {show.status}
                </TypographyParagraphComponent>
              </div>
              <div className="flex items-start justify-start gap-4">
                <TypographyParagraphComponent className='font-medium'>
                  Tipo:
                </TypographyParagraphComponent>
                <TypographyParagraphComponent>
                  {show.type}
                </TypographyParagraphComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShowComponent
