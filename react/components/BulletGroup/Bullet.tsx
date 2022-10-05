import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

type Props = {
  src: string
  price: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, price, titleBullet, link }: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--price",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.bullet__item}>
      <Link
        to={link.url}
        className = {handles["bullet__item--link"]}
        >
        <img className={handles["bullet__item--image"]} src={src} alt={titleBullet} width='80' />
        <p className={handles["bullet__item--price"]}>{price}</p>
        <p className={handles["bullet__item--title"]}>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bulle",
  type: "object",
  properties: {
    src: {
      title: "Imágen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet