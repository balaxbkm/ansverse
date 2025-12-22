import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Generate the image
export default function Icon() {
    try {
        const filePath = join(process.cwd(), 'public', 'logo.jpg')
        const file = readFileSync(filePath)
        const base64 = file.toString('base64')
        const src = `data:image/jpeg;base64,${base64}`

        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        background: 'transparent'
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt="Icon"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            ),
            {
                ...size,
            }
        )
    } catch (e) {
        // Fallback if image read fails
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 20,
                        background: 'black',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        borderRadius: '50%',
                    }}
                >
                    A
                </div>
            ),
            { ...size }
        )
    }
}
