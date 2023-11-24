import fs from 'fs'
import path from 'path'

export const getFilesRecursively = (directory: string) => {
  const files = fs.readdirSync(directory)

  let allFiles: string[] = []

  files.forEach((file) => {
    const filePath = path.join(directory, file)

    allFiles.push(filePath)
  })

  return allFiles
}

export interface IFile {
  fileName: string | undefined
  originalFileName: string | undefined
  filePath: string
}

export const getFilesNamesInDirectory = (directory: string): IFile[] => {
  const files = getFilesRecursively(directory)
  return files.map((file) => {
    return {
      fileName: file.split('/').pop()?.replace('.js', ''),
      originalFileName: file.split('/').pop(),
      filePath: file,
    }
  })
}
