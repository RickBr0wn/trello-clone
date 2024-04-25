'use client'

import { CheckIcon, ReloadIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { defaultImages } from '~/constants/images'
import { unsplash } from '~/lib/unsplash'
import { cn } from '~/lib/utils'
import FormErrors from './form-errors'

type FormPickerProps = {
  id: string
  errors?: Record<string, Array<string> | undefined>
}

export default function FormPicker({ id, errors }: FormPickerProps) {
  const { pending } = useFormStatus()
  const [images, setImages] =
    useState<Array<Record<string, any>>>(defaultImages)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedImageId, setSelectedImageId] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ['317099'],
          count: 9,
        })

        console.log({ result })

        if (result && result.response) {
          setImages(result.response as Array<Record<string, any>>)
        } else {
          console.error('Failed to get images from the Unsplash API')
        }
      } catch (error) {
        console.log({ error })
        setImages(defaultImages)
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [])

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <ReloadIcon className="h-6 w-6 text-green-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map(image => (
          <div
            key={image.id}
            className={cn(
              'cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted',
              pending && 'opacity-50 hover:opacity-50 cursor-auto'
            )}
            onClick={() => {
              if (pending) return

              setSelectedImageId(image.id)
            }}
          >
            <input
              id={id}
              name={id}
              type="radio"
              className="hidden"
              checked={selectedImageId === image.id}
              disabled={pending}
              onChange={() => {}}
              value={`${image.id}|${image.urls.thumbs}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={image.urls.thumb}
              alt="unsplash image"
              className="object-cover rounded-sm"
              priority
            />
            {selectedImageId === image.id && (
              <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
            )}
            <Link
              href={image.links.html}
              target="_blank"
              className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline bg-black/40"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      <FormErrors id="image" errors={errors} />
    </div>
  )
}

// Path: components/form/form-picker.tsx
// Created at: 17:24:11 - 24/04/2024
// Language: Typescript
// Framework: React/Next.js
