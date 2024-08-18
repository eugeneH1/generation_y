'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const ReferralForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Referral Form</CardTitle>
        <CardDescription>Please fill in the referral details</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="tel" placeholder="Enter your number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referralName">Referral Name</Label>
            <Input id="referralName" placeholder="Enter referral name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referralNumber">Referral Number</Label>
            <Input id="referralNumber" type="tel" placeholder="Enter referral number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ReferralForm