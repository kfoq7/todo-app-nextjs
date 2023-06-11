import { readdirSync } from 'node:fs'
import { Router } from 'express'

const PATH_ROUTER = `${__dirname}`

const router = Router()

const cleanFileName = (filename: string) => {
  return filename.split('.').shift()
}

readdirSync(PATH_ROUTER).forEach(filename => {
  const cleanName = cleanFileName(filename)
  if (cleanName !== 'index') {
    import(`./${cleanName}.route`).then(moduleRouter => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
