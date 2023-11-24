import chalk from 'chalk'
import { createTable } from './table'

export const renderTable = ({
  title,
  emptyMessage,
  listArray,
}: {
  title: string
  emptyMessage: string
  listArray: any
}): void => {
  console.log(title)

  if (listArray.length === 0) {
    return console.log(`${emptyMessage}\n`)
  }

  const table = createTable()

  listArray.forEach((text: string) => {
    const formattedName = `${chalk.blue(text)}`

    table.push([formattedName])
  })

  console.log(`${table.toString()}\n`)
}
