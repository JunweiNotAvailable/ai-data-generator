import { DataStateProvider } from '../contexts/DataContext'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataStateProvider>
      {children}
    </DataStateProvider>
  )
}
