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
          {/* @ts-expect-error Server Component */}
          <Sidebar>
            <div className="flex min-h-full flex-col py-12 sm:px-6 lg:px-8 bg-slate-700 text-neutral-200">
              {children}
            </div>
          </Sidebar>
        </AuthContext>
      </body>
    </html>
  )
}

export default RootLayout
