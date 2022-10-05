export type BulletsSchema = Array<{
  image: string
  price: string
  titleBullet: string
  link?: LinkProps
}>

export interface LinkProps {
  url: string
  attributeNofollow?: boolean
  attributeTitle?: string
  openNewTab?: boolean
  newTab?: boolean
}