
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-patern bg-cover bg-fixed ">
        {children}
      </div>
    )
  }