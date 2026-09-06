export type Page = 'home' | 'stories' | 'creator-hub' | 'resources' | 'shop' | 'about' | 'admin'

export interface Story {
  id: number
  category: string
  title: string
  description: string
  readTime: string
  image: string
  featured?: boolean
}

export interface Product {
  id: number
  title: string
  description: string
  price: string
  category: string
  image: string
  badge?: string
}

export interface Resource {
  id: number
  title: string
  description: string
  format: string
  icon: string
}

export interface AdminUser {
  id: number
  name: string
  email: string
  role: 'Owner' | 'Editor' | 'Viewer'
  joined: string
  status: 'Active' | 'Pending' | 'Revoked'
}
