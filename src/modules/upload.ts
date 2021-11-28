import { globalUploadLimit } from '../config.json'
import error from './error'

export default async (file: any, uploadLimit: number) => {
  if (file.size >= uploadLimit || file.size >= globalUploadLimit) return error('File Too Big')

  try {
    const formData = new FormData()
    formData.append('upload', file)
    const response = await fetch('https://azury.dev/api/accountless/new', { method: 'POST', body: formData })
    const data = await response.json()
  } catch (err: any) {
    error(err.toString())
  }
}