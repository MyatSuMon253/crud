"use client"

import { ColumnDef } from "@tanstack/react-table"

export type User = {
  id: number
  name: string
  email: string
}

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]

export type Post = {
  id: number
  title: string
  content: string
  published: boolean
}

export const postColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "published",
    header: "Published",
  }
]