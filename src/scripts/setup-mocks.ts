import fs from 'fs'
import path from 'path'
import {
  getDependencyNames,
  getPackageJson,
  getFilesNamesInDirectory,
  renderTable,
  IFile,
} from '../shared'
import ora from 'ora'
import { ColorifyConstants } from '../shared/utils/colors'
import chalk from 'chalk'

export default async function importMocks() {
  const spinner = ora('configuring mocks \n').start()
  const pkg = getPackageJson() // Get package.json from the current app

  if (!pkg.devDependencies) {
    console.log(
      `${ColorifyConstants.COMMAND_OR_RELEASE_REF(
        `in the current app ${pkg.name} there are no devDependencies`
      )}`
    )
    spinner.stop()
    return
  }

  const mocksFiles = await getFilesNamesInDirectory(
    path.join(__dirname, '../../__mocks__/apps')
  )

  // Get all files in the mocks apps directory
  renderTable({
    title: 'Available mocked apps: \n',
    emptyMessage: 'No apps found',
    listArray: mocksFiles.map((item) => item.fileName),
  })

  // Get all devDependencies from the current app
  const devDependencies = getDependencyNames(pkg.devDependencies)
  const filteredMocks = mocksFiles.filter((mock) =>
    mock?.fileName ? devDependencies.includes(mock?.fileName) : false
  )

  renderTable({
    title: 'Available devDependencies to setup: \n',
    emptyMessage: 'No devDependencies found',
    listArray: filteredMocks.map((item) => item.fileName),
  })

  const destinationDir: string = path.join(process.cwd(), '__mocks__')

  // Verify if the destination directory exists, if not, create it
  if (!fs.existsSync(destinationDir)) {
    console.log(chalk.redBright('creating mocks folder...'))
    fs.mkdirSync(destinationDir)
  }

  /**
   * Recursively copies a file or directory to a destination.
   * If the provided file is a directory, it copies all the files and subdirectories within it.
   * If the provided file is a file, it copies the file to the destination.
   * @param file - The file or directory to be copied.
   * @param destination - The destination directory where the file or directory will be copied to.
   */
  function copyRecursive(file: IFile, destination: string): void {
    if (!file.originalFileName) return

    const sourcePath: string = file.filePath

    const destPath: string = path.join(destination, file.originalFileName)

    if (fs.lstatSync(sourcePath).isDirectory()) {
      const files: string[] = fs.readdirSync(sourcePath)
      fs.mkdirSync(destPath, { recursive: true })
      files.forEach((subFile) => {
        const subSourcePath: string = path.join(file.filePath, subFile)
        const subDestPath: string = destPath
        copyRecursive(
          {
            fileName: subFile,
            originalFileName: subFile,
            filePath: subSourcePath,
          },
          subDestPath
        )
      })
    } else {
      fs.copyFileSync(sourcePath, destPath)
      console.log(chalk.greenBright(`copied ${destPath}`))
    }
  }

  filteredMocks.forEach((file) => {
    copyRecursive(file, destinationDir)
  })
  spinner.stop()
}
