import Sidebar from './components/sidebar/Sidebar'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'

export const metadata = {
  title: 'Posted',
  description: 'Posted',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <div className="flex min-h-full flex-row bg-slate-700 text-neutral-200">
            {/* @ts-expect-error Server Component */}
            <Sidebar />
            {children}
          </div>
        </AuthContext>
      </body>
    </html>
  )
}

export default RootLayout
