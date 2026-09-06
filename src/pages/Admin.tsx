import { useState } from 'react'
import { adminUsers, stories, products } from '../data'
import type { AdminUser } from '../types'

type AdminTab = 'overview' | 'stories' | 'products' | 'resources' | 'users' | 'settings'

const ADMIN_EMAIL = 'admin@theinkbity.com'
const ADMIN_PASS = 'inkadmin2024'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState<AdminTab>('overview')
  const [users, setUsers] = useState<AdminUser[]>(adminUsers)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Invalid credentials. Please try again.')
    }
  }

  const grantAccess = (id: number) => {
    setUsers((prev) =>
      prev.map((u) => u.id === id ? { ...u, role: 'Editor' as const, status: 'Active' as const } : u)
    )
  }

  const revokeAccess = (id: number) => {
    setUsers((prev) =>
      prev.map((u) => u.id === id && u.role !== 'Owner' ? { ...u, status: 'Revoked' as const } : u)
    )
  }

  const inviteUser = () => {
    const newUser: AdminUser = {
      id: users.length + 1,
      name: 'New Invitee',
      email: `invitee${users.length + 1}@example.com`,
      role: 'Viewer',
      joined: 'Sep 2024',
      status: 'Pending',
    }
    setUsers((prev) => [...prev, newUser])
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <p className="font-serif text-cream text-3xl font-bold mb-2">THE INK CITY</p>
            <p className="text-cream/40 text-sm tracking-widest uppercase">Admin Portal</p>
          </div>

          <div className="bg-navy-light border border-white/10 p-10">
            <h2 className="font-serif text-cream text-2xl font-semibold mb-8">Sign In</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div>
                <label className="text-cream/50 text-xs font-semibold tracking-widest uppercase mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@theinkbity.com"
                  className="w-full bg-navy border border-white/15 text-cream text-sm px-4 py-3.5 placeholder-cream/25 rounded-sm"
                  required
                />
              </div>
              <div>
                <label className="text-cream/50 text-xs font-semibold tracking-widest uppercase mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-navy border border-white/15 text-cream text-sm px-4 py-3.5 placeholder-cream/25 rounded-sm"
                  required
                />
              </div>
              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="bg-gold text-navy text-sm font-bold py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 mt-2"
              >
                Sign In to Admin
              </button>
            </form>
            <p className="text-cream/20 text-xs text-center mt-6">
              Demo: admin@theinkbity.com / inkadmin2024
            </p>
          </div>
        </div>
      </div>
    )
  }

  const navItems: { id: AdminTab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'stories', label: 'Stories', icon: '✏' },
    { id: 'products', label: 'Products', icon: '◈' },
    { id: 'resources', label: 'Resources', icon: '◇' },
    { id: 'users', label: 'User Access', icon: '▶' },
    { id: 'settings', label: 'Settings', icon: '✦' },
  ]

  return (
    <div className="min-h-screen bg-cream-dark flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-navy flex flex-col
        transform transition-transform duration-300 lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="px-6 py-8 border-b border-white/10">
          <p className="font-serif text-cream text-xl font-bold">THE INK CITY</p>
          <p className="text-cream/40 text-xs tracking-widest uppercase mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-all duration-200 text-left ${
                activeTab === item.id
                  ? 'bg-gold/15 text-gold border-l-2 border-gold'
                  : 'text-cream/55 hover:text-cream hover:bg-white/5'
              }`}
            >
              <span className={`text-base ${activeTab === item.id ? 'text-gold' : 'text-cream/30'}`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 mb-4">
            <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
              <span className="text-gold text-xs font-bold">CO</span>
            </div>
            <div>
              <p className="text-cream text-xs font-semibold">Chidi Okafor</p>
              <p className="text-cream/40 text-xs">Owner</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full text-left px-4 py-2.5 text-cream/40 hover:text-cream text-xs transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b border-navy/8 px-6 lg:px-10 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-navy/60 p-1"
            >
              ☰
            </button>
            <h1 className="font-semibold text-navy capitalize">
              {activeTab === 'overview' ? 'Dashboard Overview' : navItems.find(n => n.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-gold/15 text-gold text-xs font-bold px-3 py-1.5 rounded-sm">Owner</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-6 lg:px-10 py-8 overflow-auto">

          {/* ──────── OVERVIEW ──────── */}
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {[
                  { label: 'Total Stories', value: '6', change: '+2 this month', icon: '✏' },
                  { label: 'Products Listed', value: '6', change: '+1 this week', icon: '◈' },
                  { label: 'Active Users', value: '12,840', change: '+340 this month', icon: '◉' },
                  { label: 'Newsletter Subs', value: '4,210', change: '+180 this week', icon: '✦' },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-navy/8 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-navy/50 text-xs font-semibold tracking-wide uppercase">{s.label}</p>
                      <span className="text-gold/60 text-lg">{s.icon}</span>
                    </div>
                    <p className="font-serif text-navy text-3xl font-bold mb-1">{s.value}</p>
                    <p className="text-navy/40 text-xs">{s.change}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent activity */}
                <div className="bg-white border border-navy/8 p-6">
                  <h2 className="font-serif text-navy text-lg font-semibold mb-5">Recent Activity</h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { action: 'New story published', item: '"The Last Expedition"', time: '2h ago', color: 'text-gold' },
                      { action: 'New user invited', item: 'lucia@theinkbity.com', time: '5h ago', color: 'text-blue-400' },
                      { action: 'Product updated', item: '"The Story Bible"', time: '1d ago', color: 'text-green-400' },
                      { action: 'Resource downloaded', item: '50 Story Ideas × 48', time: '1d ago', color: 'text-purple-400' },
                      { action: 'Newsletter sent', item: 'The Ink Letter #42', time: '3d ago', color: 'text-gold' },
                    ].map((a, i) => (
                      <div key={i} className="flex items-start gap-3 pb-4 border-b border-navy/5 last:border-0 last:pb-0">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.color.replace('text-', 'bg-')}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-navy/70 text-sm">{a.action}</p>
                          <p className="text-navy font-medium text-sm truncate">{a.item}</p>
                        </div>
                        <p className="text-navy/30 text-xs whitespace-nowrap">{a.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick access */}
                <div className="bg-white border border-navy/8 p-6">
                  <h2 className="font-serif text-navy text-lg font-semibold mb-5">Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Add Story', icon: '✏', action: () => setActiveTab('stories') },
                      { label: 'Add Product', icon: '◈', action: () => setActiveTab('products') },
                      { label: 'Invite User', icon: '▶', action: () => setActiveTab('users') },
                      { label: 'Add Resource', icon: '◇', action: () => setActiveTab('resources') },
                    ].map((qa) => (
                      <button
                        key={qa.label}
                        onClick={qa.action}
                        className="flex items-center gap-3 p-4 border border-navy/8 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 text-left"
                      >
                        <span className="text-gold text-lg">{qa.icon}</span>
                        <span className="text-navy text-sm font-medium">{qa.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 bg-navy p-5">
                    <p className="text-gold text-xs font-bold tracking-wide uppercase mb-1">Your Role</p>
                    <p className="text-cream font-semibold">Owner</p>
                    <p className="text-cream/50 text-xs mt-1">Full access to all admin features. You can grant and revoke access for other team members.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────── STORIES ──────── */}
          {activeTab === 'stories' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-navy/50 text-sm">{stories.length} stories total</p>
                <button className="bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-200">
                  + Add New Story
                </button>
              </div>
              <div className="bg-white border border-navy/8 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-navy/8">
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase">Title</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase hidden sm:table-cell">Category</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase hidden md:table-cell">Read Time</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase">Status</th>
                      <th className="px-6 py-4" />
                    </tr>
                  </thead>
                  <tbody>
                    {stories.map((s) => (
                      <tr key={s.id} className="border-b border-navy/5 hover:bg-cream-dark/40 transition-colors duration-200 last:border-0">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-sm overflow-hidden bg-cream-dark flex-shrink-0">
                              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                            </div>
                            <p className="font-medium text-navy text-sm">{s.title}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <span className="bg-gold/10 text-gold text-xs font-bold px-2.5 py-1 tracking-wide">{s.category}</span>
                        </td>
                        <td className="px-6 py-4 text-navy/50 text-sm hidden md:table-cell">{s.readTime}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Published</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 justify-end">
                            <button className="text-navy/40 hover:text-navy text-xs transition-colors">Edit</button>
                            <button className="text-red-400/60 hover:text-red-500 text-xs transition-colors">Remove</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ──────── PRODUCTS ──────── */}
          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-navy/50 text-sm">{products.length} products total</p>
                <button className="bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-200">
                  + Add New Product
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((p) => (
                  <div key={p.id} className="bg-white border border-navy/8 overflow-hidden group">
                    <div className="aspect-video overflow-hidden bg-cream-dark relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                        <button className="bg-gold text-navy text-xs font-bold px-3 py-2 rounded-sm">Edit</button>
                        <button className="bg-white/20 text-white text-xs font-bold px-3 py-2 rounded-sm">View</button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gold text-xs font-bold tracking-wide uppercase">{p.category}</span>
                        <span className="font-serif text-navy font-bold">{p.price}</span>
                      </div>
                      <p className="font-medium text-navy text-sm">{p.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ──────── RESOURCES ──────── */}
          {activeTab === 'resources' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-navy/50 text-sm">4 free resources</p>
                <button className="bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-200">
                  + Add Resource
                </button>
              </div>
              <div className="bg-white border border-navy/8">
                {['50 Story Ideas', 'YouTube Script Template', '100 Story Hooks', '30-Day Content Planner'].map((r, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-5 border-b border-navy/5 last:border-0 hover:bg-cream-dark/30 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <span className="text-gold text-xl">◇</span>
                      <div>
                        <p className="font-medium text-navy text-sm">{r}</p>
                        <p className="text-navy/40 text-xs mt-0.5">PDF — Free Download</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Active</span>
                      <button className="text-navy/40 hover:text-navy text-xs transition-colors">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ──────── USERS ──────── */}
          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-navy/50 text-sm">{users.length} team members</p>
                  <p className="text-navy/30 text-xs mt-0.5">Grant or revoke editing access to collaborators</p>
                </div>
                <button
                  onClick={inviteUser}
                  className="bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-200"
                >
                  + Invite User
                </button>
              </div>

              <div className="bg-white border border-navy/8 overflow-hidden mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-navy/8">
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase">User</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase hidden sm:table-cell">Role</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase hidden md:table-cell">Joined</th>
                      <th className="text-left px-6 py-4 text-navy/40 text-xs font-semibold tracking-widest uppercase">Status</th>
                      <th className="px-6 py-4" />
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id} className="border-b border-navy/5 last:border-0 hover:bg-cream-dark/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-gold text-xs font-bold">{u.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div>
                              <p className="font-medium text-navy text-sm">{u.name}</p>
                              <p className="text-navy/40 text-xs">{u.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-sm ${
                            u.role === 'Owner'
                              ? 'bg-gold/20 text-gold-muted'
                              : u.role === 'Editor'
                              ? 'bg-blue-50 text-blue-700'
                              : 'bg-navy/5 text-navy/50'
                          }`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-navy/40 text-sm hidden md:table-cell">{u.joined}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            u.status === 'Active'
                              ? 'bg-green-50 text-green-700'
                              : u.status === 'Pending'
                              ? 'bg-yellow-50 text-yellow-700'
                              : 'bg-red-50 text-red-600'
                          }`}>
                            {u.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 justify-end">
                            {u.role !== 'Owner' && (
                              <>
                                {u.status !== 'Active' || u.role === 'Viewer' ? (
                                  <button
                                    onClick={() => grantAccess(u.id)}
                                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                                  >
                                    Grant Editor
                                  </button>
                                ) : null}
                                {u.status === 'Active' && (
                                  <button
                                    onClick={() => revokeAccess(u.id)}
                                    className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors"
                                  >
                                    Revoke
                                  </button>
                                )}
                              </>
                            )}
                            {u.role === 'Owner' && (
                              <span className="text-navy/30 text-xs">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Access level guide */}
              <div className="bg-navy p-6">
                <h3 className="font-serif text-cream text-base font-semibold mb-4">Access Levels</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { role: 'Owner', desc: 'Full control — manage all content, users, settings, and access.', color: 'text-gold' },
                    { role: 'Editor', desc: 'Can create, edit, and publish content. Cannot manage users or settings.', color: 'text-blue-300' },
                    { role: 'Viewer', desc: 'Read-only access to the dashboard. No editing rights.', color: 'text-cream/50' },
                  ].map((a) => (
                    <div key={a.role} className="border border-white/10 p-4">
                      <p className={`font-semibold text-sm mb-1 ${a.color}`}>{a.role}</p>
                      <p className="text-cream/50 text-xs leading-relaxed">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ──────── SETTINGS ──────── */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: 'Site Identity',
                    fields: [
                      { label: 'Site Name', value: 'The Ink City' },
                      { label: 'Tagline', value: 'Discover Stories. Learn Storytelling. Create Your Own.' },
                    ],
                  },
                  {
                    title: 'Contact & Social',
                    fields: [
                      { label: 'Contact Email', value: 'hello@theinkbity.com' },
                      { label: 'Instagram', value: '@theinkbity' },
                      { label: 'Twitter / X', value: '@theinkbity' },
                    ],
                  },
                ].map((section) => (
                  <div key={section.title} className="bg-white border border-navy/8 p-6">
                    <h3 className="font-serif text-navy text-lg font-semibold mb-5">{section.title}</h3>
                    <div className="flex flex-col gap-4">
                      {section.fields.map((field) => (
                        <div key={field.label}>
                          <label className="text-navy/50 text-xs font-semibold tracking-wide uppercase mb-1.5 block">
                            {field.label}
                          </label>
                          <input
                            defaultValue={field.value}
                            className="w-full border border-navy/15 text-navy text-sm px-4 py-3 bg-cream-dark/30 rounded-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-white border border-navy/8 p-6">
                  <h3 className="font-serif text-navy text-lg font-semibold mb-2">Danger Zone</h3>
                  <p className="text-navy/50 text-sm mb-5">These actions are irreversible. Proceed with caution.</p>
                  <div className="flex flex-col gap-3">
                    <button className="border border-red-200 text-red-500 text-sm font-medium px-4 py-3 rounded-sm hover:bg-red-50 transition-colors duration-200 text-left">
                      Clear all newsletter subscribers
                    </button>
                    <button className="border border-red-200 text-red-500 text-sm font-medium px-4 py-3 rounded-sm hover:bg-red-50 transition-colors duration-200 text-left">
                      Reset admin password
                    </button>
                  </div>
                </div>

                <button className="bg-gold text-navy text-sm font-bold px-6 py-3.5 rounded-sm hover:bg-gold-light transition-colors duration-200 self-start">
                  Save Changes
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}
