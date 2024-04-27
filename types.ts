import { Card, List } from '@prisma/client'

export type ListWithCards = List & { cards: Array<Card> }

export type CardWithList = Card & { list: List }
