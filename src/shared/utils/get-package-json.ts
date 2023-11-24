import fs from 'fs'
import path from 'path'

const appDirectory = fs.realpathSync(process.cwd())

export const resolveAppPath = (relative: string) =>
  path.resolve(appDirectory, relative)

export const getDependencyNames = (dependencies: Record<string, string>) => {
  return Object.keys(dependencies)
}

export const getPackageJson = () => {
  const pkg = require(resolveAppPath('package.json'))
  return pkg as {
    name: string
    version: string
    dependencies: Record<string, string>
    devDependencies: Record<string, string>
  }
}
