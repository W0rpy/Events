export type ChildrenProps = {
   children: React.ReactNode;
}

export interface IEvent {
   id: string
   name: string
   description?: string
   date: string
   price: number
   location: string
   category: string
}