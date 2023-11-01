import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { TDateFormatterParams, TTimezone } from 'types'

dayjs.extend(utc)
dayjs.extend(timezone)

export const dateFormatter = ({
  dateTime,
  format,
  time,
}: TDateFormatterParams) => {
  const tz = 'Asia/Bangkok'
  const dateOnly = dayjs(dateTime).format('YYYY-MM-DD')
  const date = dayjs(dateTime).tz(tz)

  switch (time) {
    case 'start': {
      return dayjs.tz(dateOnly, tz).startOf('day').format(format)
    }
    case 'end': {
      return dayjs.tz(dateOnly, tz).endOf('day').format(format)
    }
    default: {
      return date.format(format)
    }
  }
}

export const getTimeZones = (): TTimezone[] => {
  return Intl.supportedValuesOf('timeZone').map((name: string) => {
    const timeZone = dayjs().tz(name)
    const offset = timeZone.format('Z')
    return {
      value: {
        location: name,
        time: offset,
      },
      label: `${offset} (${name})`,
    }
  })
}

export const getCurrentTimezone = (): string => {
  return dayjs.tz.guess()
}
