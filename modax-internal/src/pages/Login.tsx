import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, Mail, Lock, Loader2 } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState(import.meta.env.DEV ? 'demo@modax.com' : '')
  const [password, setPassword] = useState(import.meta.env.DEV ? 'password' : '')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(email, password)
      void navigate('/strategy')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back to home */}
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          {/* Logo and Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-gray-400">Enter your email to sign in to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                    required
                    className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                    required
                    className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => { setRememberMe(checked as boolean); }}
                className="border-gray-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label 
                htmlFor="remember" 
                className="text-sm text-gray-400 cursor-pointer"
              >
                Remember me
              </Label>
            </div>

            {error && (
              <div className="rounded-md bg-red-900/20 border border-red-900/50 p-3">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-gray-800 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-gray-800 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary hover:text-primary/80 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
        <div className="relative z-10 max-w-md text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <span className="text-3xl font-bold text-primary">M</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Failed Experiments into Empire
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Access your sales portal to resurrect POCs, build production systems, and expand strategically.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-emerald-400 mb-1">90</div>
              <div className="text-sm text-gray-400">Days to Production</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-primary mb-1">300%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}