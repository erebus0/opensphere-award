import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Component() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Replace this URL with your Google Apps Script web app URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      // Since we're using 'no-cors', we can't access the response details
      // We'll assume it was successful if we get here without an error
      setFormSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">OpenSphere Founder Awards</h1>
        <p className="text-xl mb-8">Recognizing exceptional startup founders and paving the way for global opportunities</p>
        <Button size="lg" onClick={() => document.getElementById('submit-profile')?.scrollIntoView({ behavior: 'smooth' })}>
          Submit a Profile
        </Button>
      </section>

      {/* About the Award Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Award Program</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our awards recognize outstanding founders and startups that demonstrate exceptional innovation, growth potential, and global impact.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Open to founders of startups at any stage, from early-stage ventures to established companies looking to expand globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of the Award</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Visa Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Use your award as supporting evidence for O-1 visa applications, demonstrating your extraordinary ability in business.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gain international visibility and credibility for your startup and personal brand.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with other award-winning founders, investors, and industry leaders.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section id="submit-profile" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Submit a Profile</h2>
          {formSubmitted ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-green-600">Thank you for your submission! We'll review the profile and get back to you soon.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Founder's Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="achievements">Key Achievements</Label>
                    <Textarea id="achievements" name="achievements" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                  </Button>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can this award help with my O-1 visa application?</AccordionTrigger>
              <AccordionContent>
                The OpenSphere Founder Award serves as evidence of your extraordinary ability in business, which is a key requirement for the O-1 visa. It demonstrates recognition in your field and can significantly strengthen your application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who is eligible to apply for the award?</AccordionTrigger>
              <AccordionContent>
                Any founder or co-founder of a startup, regardless of the company's stage or location, can apply. We're looking for innovative thinkers with demonstrable achievements and potential for global impact.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How are winners selected?</AccordionTrigger>
              <AccordionContent>
                Our panel of experienced entrepreneurs, investors, and industry experts evaluates each submission based on innovation, growth potential, and global impact. The selection process is rigorous and impartial.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 OpenSphere. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
            <a href="#" className="text-blue-400 hover:underline mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}