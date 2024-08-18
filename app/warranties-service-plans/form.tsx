/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9VTmVBBH7Oa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function WarrantiesServicePlansForm() {
  return (
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Request a Quote</CardTitle>
        <CardDescription>Fill out the form below to get a quote for your vehicle-related services.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="surname" className="text-sm font-medium">
                  Surname
                </Label>
                <Input id="surname" placeholder="Enter your surname" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-number" className="text-sm font-medium">
                  Contact Number
                </Label>
                <Input id="contact-number" type="tel" placeholder="Enter your contact number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="vehicle-make" className="text-sm font-medium">
                  Vehicle Make
                </Label>
                <Input id="vehicle-make" placeholder="Enter your vehicle make" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="vehicle-model" className="text-sm font-medium">
                  Vehicle Model
                </Label>
                <Input id="vehicle-model" placeholder="Enter your vehicle model" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="year-model" className="text-sm font-medium">
                  Year Model
                </Label>
                <Select>
                  <SelectTrigger id="year-model">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="current-mileage" className="text-sm font-medium">
                  Current Mileage
                </Label>
                <Input id="current-mileage" type="number" placeholder="Enter current mileage" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm font-medium">Quote Options</Label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="warranty" />
                  <Label htmlFor="warranty">Warranty</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-plan" />
                  <Label htmlFor="service-plan">Service Plan</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="warranty-and-service-plan" />
                  <Label htmlFor="warranty-and-service-plan">Warranty and Service Plan</Label>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm font-medium">Payment Plan</Label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="once-off" />
                  <Label htmlFor="once-off">Once-off</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="monthly-and-once-off" />
                  <Label htmlFor="monthly-and-once-off">Monthly and Once-off</Label>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm font-medium">Service History</Label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="full" />
                  <Label htmlFor="full">Full</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="partial" />
                  <Label htmlFor="partial">Partial</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="none" />
                  <Label htmlFor="none">None</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message/Notes
              </Label>
              <Textarea id="message" rows={5} placeholder="Enter any additional information" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button>Request Quote</Button>
        </div>
      </CardFooter>
    </Card>
  )
}